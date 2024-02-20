import express from "express";
import connectDB from "./db/connectdb.js";
import "./models/Student.js";

const app = express();
const port = process.env.PORT || 3000;

const DATABASE_URL = process.env.DATABASE_URL || "mongodb://localhost:27017";

import { updateDocById, updateoneDoc, updateoneDocByAge, updatemanyDoc } from "./models/Student.js";

//Database Connection
connectDB(DATABASE_URL);

// updateDocById('65c0df77b0401125906e0346');
// updateoneDoc('65c0df77b0401125906e0346');
// updateoneDoc('65c0df77b0401125906e0643');
// updateoneDocByAge(26);
updatemanyDoc(50); 



app.listen(port, () => {
  console.log(`server listening at http://localhost:${port}`);
});
