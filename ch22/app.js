import express from "express";
import connectDB from "./db/connectdb.js";
import "./models/Student.js";

const app = express();
const port = process.env.PORT || 3000;

const DATABASE_URL = process.env.DATABASE_URL || "mongodb://localhost:27017";

import { deleteDocById, deleteOneDoc, deleteOneDocByAge, deleteManyDoc } from "./models/Student.js";

//Database Connection
connectDB(DATABASE_URL);


// deleteDocById('65c0df77b0401125906e0346');
// deleteOneDoc('65d4a1d6b65212083489211b');
// deleteOneDocByAge()
deleteManyDoc(26);


app.listen(port, () => {
  console.log(`server listening at http://localhost:${port}`);
});
