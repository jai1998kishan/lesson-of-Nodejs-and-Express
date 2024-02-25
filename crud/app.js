import express from 'express';  //this is ES6 version syntax

import {join} from 'path';

import connectDB from './db/contectdb.js';
const app = express();

const port = process.env.PORT || 3000;

const DATABASE_URL = process.env.DATABASE_URL || "mongodb://localhost:27017";


//importing routes
import web from "./routes/web.js";


//database connection
connectDB(DATABASE_URL);

app.use(express.urlencoded({extended:false}));

//static files
app.use('/student',express.static(join(process.cwd(), "public")));
app.use('/student/edit',express.static(join(process.cwd(), "public")));

//set template engine
app.set("view engine", "ejs");

//loading Routes
app.use("/student", web);

app.listen(port, () => {
    console.log(`Server listenting at http://localhost:${port}`);
})