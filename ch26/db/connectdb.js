import mongoose from "mongoose";

const connectDB = async (DATABASE_URL) => {
  try {
    const DB_OPTIONS = {
      dbName: "blogdb",
    };
    await mongoose.connect(DATABASE_URL, DB_OPTIONS);
    console.log("Connection to database is Successfuly.....!");
  } catch (err) {
    console.log(err);
  }
};

export default connectDB;
