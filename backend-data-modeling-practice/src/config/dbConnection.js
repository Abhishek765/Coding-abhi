import mongoose from "mongoose";

export const connectToDB = async () => {
  try {
    const conn = await mongoose.connect(process.env.MONGO_DB_URL, {
      dbName: "data-modeling",
    });
    console.log(`Database connection established with ${conn.connection.name}`);
  } catch (error) {
    console.error(error);
    process.exit(1); // exit the process with failure status
  }
};
