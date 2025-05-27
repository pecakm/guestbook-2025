import mongoose from 'mongoose';

const MONGODB_URI = process.env.MONGODB_URI as string;

if (!MONGODB_URI) {
  throw new Error('MONGODB_URI is not defined');
}

export default async function connectDB() {
  try {
    await mongoose.connect(MONGODB_URI);
  } catch (error) {
    console.error('Failed to connect to MongoDB', error);
  }
}
