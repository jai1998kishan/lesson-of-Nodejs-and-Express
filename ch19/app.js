import express from 'express';
import connectDB from './db/connectdb.js';
import './models/Student.js';
import {createDoc, createMultiDoc } from './models/Student.js';
const app = express();
const port = process.env.PORT || 3000;

const DATABASE_URL = process.env.DATABASE_URL || "mongodb://localhost:27017"




//Database Connection
connectDB(DATABASE_URL);

//Create and save document
createDoc();
// createDoc('Sumit', 29, 8666.6, ['Gaming','Dancing'], false, [{value: 'This is bad'}]);
// createMultiDoc();

app.listen(port, () => {
    console.log(`server listening at http://localhost:${port}`);
})