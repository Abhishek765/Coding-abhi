import mongoose from 'mongoose';
import { DB_NAME } from '../constants';

export const connectDB = async () => {
  try {
    const conn = await mongoose.connect(process.env.MONGODB_URI!, {
      dbName: DB_NAME
    });
    console.log(
      `Connecting to DB: ${conn.connection.name} with host: ${conn.connection.host}`
    );
  } catch (error) {
    console.error(`Failed to connect to DB: `, error);
    process.exit(1); // exit the process with failure status
  }
};
