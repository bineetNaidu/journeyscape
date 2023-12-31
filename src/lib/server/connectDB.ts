import mongoose from 'mongoose';

const uri = process.env.MONGODB_URI as string;

const db = mongoose.connection;

export const connectDB = async () => {
  if (db.readyState >= 1) {
    console.log('Database already connected');
    return;
  }

  return mongoose.connect(uri);
};

export const disconnectDB = async () => {
  if (db.readyState === 0) {
    console.log('Database already disconnected');
    return;
  }
  return mongoose.disconnect();
};

export default db;
