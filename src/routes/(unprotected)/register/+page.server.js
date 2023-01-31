import { fail } from '@sveltejs/kit';
import crypto from 'crypto-js';
import * as db from '$db';
import { USERS_DEFAULT_PASSWORD } from '$env/static/private';

export const actions = {
  default: async ({ request }) => {
    // get submitted data
    const { firstName, lastName } = Object.fromEntries(await request.formData());

    // create username
    const username = `${firstName.charAt(0).toLowerCase()}${lastName.toLowerCase()}`;

    // check if email already exists in database
    if ((await db.findOne({ collection: 'users', query: { username } })) !== null)
      return fail(401, { error: 'User already exists.' });

    // hash password
    const password = JSON.stringify(crypto.SHA256(USERS_DEFAULT_PASSWORD).words);

    // find default role
    const { _id: _roleId } = await db.findOne({ collection: 'roles', query: { name: 'default' } });

    // create user in database
    await db.insertOne({
      collection: 'users',
      doc: {
        createdAt: new Date(),
        isActive: false,
        firstName,
        lastName,
        password,
        redirectSignIn: '/onboarding',
        roles: [_roleId],
        username
      }
    });

    return { success: true };

    // // find user in database
    // const user = await db.findOne({
    //   collection: 'users',
    //   query: { username: new RegExp(username, 'i') }
    // });

    // // check if no username found
    // if (user === null) return fail(401, { error: 'Incorrect username provided.' });

    // // hash password
    // const hash = JSON.stringify(crypto.SHA256(password).words);

    // // check if password doesn't match
    // if (hash !== user.password) return fail(401, { error: 'Invalid credentials passed.' });

    // // delete password from user
    // delete user.password;

    // // generate authToken
    // const authToken = jwt.sign(user, JWT_SECRET);

    // // set auth cookie token
    // cookies.set('authToken', authToken, {
    //   path: '/',
    //   sameSite: 'strict',
    //   secure: process.env.NODE_ENV === 'production',
    //   maxAge: 60 * 60 * 24 * 7
    // });

    // throw redirect(301, '/dashboard');
  }
};
