import { sequence } from '@sveltejs/kit/hooks';
import jwt from 'jsonwebtoken';
import * as db from '$db';
import { JWT_SECRET } from '$env/static/private';
import { protectedLinks } from '$routes';

const verifyAuthToken = async ({ event }) => {
  // get authToken cookie
  let authToken = event.cookies.get('authToken');

  // decode authToken
  const { username } = jwt.verify(authToken, JWT_SECRET);

  // find user in database
  const user = await db.findOne({ collection: 'users', query: { username } });

  // check if no username found
  if (user === undefined) throw 'User not in database';

  // delete password from user
  delete user.password;

  // generate authToken
  authToken = jwt.sign(user, JWT_SECRET);

  // set auth cookie token
  event.cookies.set('authToken', authToken, {
    path: '/',
    sameSite: 'strict',
    secure: process.env.NODE_ENV === 'production',
    maxAge: 60 * 60 * 24 * 7
  });

  return user;
};

const protectedRoutesHandle = async ({ event, resolve }) => {
  // initialize protected routes
  const protectedRoutes = protectedLinks.map(({ href }) => href);

  // check if route is protected
  if (protectedRoutes.includes(event.url.pathname)) {
    try {
      // verify authToken
      const user = await verifyAuthToken({ event });

      // set user locals
      event.locals.user = user;
    } catch (error) {
      console.log({ error });

      // delete authToken cookie
      event.cookies.set('authToken', '', {
        path: '/',
        sameSite: 'strict',
        secure: process.env.NODE_ENV === 'production',
        maxAge: -3600
      });

      // redirect to sign-in route if invalid authToken
      return Response.redirect(`${event.url.origin}/sign-in`, 301);
    }
  }

  const response = await resolve(event);

  return response;
};

const rootRouteHandle = async ({ event, resolve }) => {
  // get authToken cookie
  let authToken = event.cookies.get('authToken');

  // check if route is root
  if (event.url.pathname === '/') {
    // redirect to sign-in route if authToken is undefined
    if (authToken === undefined) return Response.redirect(`${event.url.origin}/sign-in`, 301);
    try {
      // verify authToken
      const user = await verifyAuthToken({ event });

      // set user locals
      event.locals.user = user;

      // redirect to dashboard
      return Response.redirect(`${event.url.origin}/dashboard`, 301);
    } catch (error) {
      console.log({ error });

      // redirect to sign-in route if invalid authToken
      return Response.redirect(`${event.url.origin}/sign-in`, 301);
    }
  }

  const response = await resolve(event);

  return response;
};

export const handle = sequence(rootRouteHandle, protectedRoutesHandle);
