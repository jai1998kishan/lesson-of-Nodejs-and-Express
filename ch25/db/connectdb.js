import mongoose from "mongoose";

const connectDB = async (DATABASE_URL) => {
  try {
    const DB_OPTIONS = {
      dbName: "sessiondb",
    };
    await mongoose.connect(DATABASE_URL, DB_OPTIONS);
    console.log("Connection Successfuly.....!");
  } catch (err) {
    console.log(err);
  }
};

export default connectDB;
