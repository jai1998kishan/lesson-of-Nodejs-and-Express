import express from "express";
import connectDB from "./db/connectdb.js";
import "./models/Student.js";

const app = express();
const port = process.env.PORT || 3000;

const DATABASE_URL = process.env.DATABASE_URL || "mongodb://localhost:27017";

import {
  getAllDoc,
  getAllDocSpecificField,
  getSingleDoc,
  getSingleDocSpecificField,
  getDocByField,
  getDocByFieldSpecificField,
  getLimitedDoc,
  getSkipDoc,
  getCountDoc,
  getSortedDoc,
  mixDoc,
  compDoc,
  logDoc,
} from "./models/Student.js";

//Database Connection
connectDB(DATABASE_URL);

// getAllDoc();
// getAllDocSpecificField();
// getSingleDoc();
// getSingleDocSpecificField();
// getDocByField();
// getDocByFieldSpecificField();
// getLimitedDoc();
// getSkipDoc();
// getCountDoc();
// getSortedDoc();
// mixDoc();
// compDoc();
logDoc();

app.listen(port, () => {
  console.log(`server listening at http://localhost:${port}`);
});
