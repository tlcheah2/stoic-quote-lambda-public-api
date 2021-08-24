// Import the dependency.
const { MongoClient } = require('mongodb');

let mongoClient;
let db;

const connectDB = async () => {
  // Create a module-scoped connection promise.
  // CRITICAL: You must call connect outside the handler so that the client
  // can be reused across function invocations.
  if (!mongoClient) {
    mongoClient = await MongoClient.connect(process.env.MONGODB_URI,
      { useNewUrlParser: true, useUnifiedTopology: true });
    db = mongoClient.db('quote');
    console.log('Connected to DB successfully');
  }
  return mongoClient;
};

const getQuoteCollection = async () => {
  if (!mongoClient) {
    await connectDB();
  }
  if (db) return db.collection('quotes');
  throw new Error('No Quote Collection found');
};

module.exports = {
  connectDB,
  getQuoteCollection,
};
