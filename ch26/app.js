import express from "express";
import connectDB from "./db/connectdb.js";
import web from "./routes/web.js";

const app = express();
const port = process.env.PORT || "3000";
const DATABASE_URL = process.env.DATABASE_URL || "mongodb://localhost:27017";

//Database connection
connectDB(DATABASE_URL);

//Set template Engine
app.set("view engine", "ejs");

//to use req.body we have to create middleware
app.use(express.urlencoded({ extended: true }));

app.use("/", web);

app.listen(port, () => {
  console.log(`Server listening at http://localhost:${port}`);
});
