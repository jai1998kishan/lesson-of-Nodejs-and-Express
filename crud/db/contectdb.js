import mongoose  from "mongoose";

const connectDB = async (DATABASE_URL) => {
    try {
        const DB_OPTION = {
            dbName: "school",
        };
        await mongoose.connect(DATABASE_URL, DB_OPTION);
        console.log("Connect Successfully...!");
    } catch (error) {
        console.log(error);
    }
}



export default connectDB;