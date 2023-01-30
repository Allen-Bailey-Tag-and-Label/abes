import { MongoClient } from 'mongodb';
import { MONGO_DB, MONGO_PASSWORD, MONGO_URI } from '$env/static/private';

const client = new MongoClient(
  MONGO_URI.replace('?retryWrites', `${MONGO_DB}?retryWrites`).replace('<password>', MONGO_PASSWORD)
);
let connection;

const connect = async () => {
  if (connection === undefined) connection = await client.connect();
};

const insertOne = async ({ collection = undefined, doc = undefined }) => {
  // await connection
  await connect();

  // create doc
  const createdDoc = await client
    .db()
    .collection(collection)
    .findOneAndUpdate(doc, { $set: {} }, { upsert: true, returnDocument: 'after' });

  return JSON.parse(JSON.stringify(createdDoc));
};

const find = async ({ collection = undefined, query = {} }) => {
  // await connection
  await connect();

  // find documents
  const docs = await client.db().collection(collection).find(query).toArray();

  return JSON.parse(JSON.stringify(docs));
};

const findOne = async ({ collection = undefined, query = {} }) => {
  // await connection
  await connect();

  // find document
  const doc = await client.db().collection(collection).findOne(query);

  return JSON.parse(JSON.stringify(doc));
};

const findOneAndUpdate = async ({ collection = undefined, query = {}, update = {} }) => {
  // await connection
  await connect();

  // find document and update
  const doc = await client
    .db()
    .collection(collection)
    .findOneAndUpdate(query, update, { upsert: true, returnDocument: 'after' });

  return JSON.parse(JSON.stringify(doc));
};

export { insertOne, find, findOne, findOneAndUpdate };
