import express from 'express';  //this is ES6 version syntax

//import the DataBase
import connectDB from './db/connectdb.js';

const app = express();

const port = process.env.PORT || 3000;

//database url and port
const DATABASE_URL = process.env.DATABASE_URL || 'mongodb://localhost:27017';


//database connection
connectDB(DATABASE_URL);


//importing the path for access the public file
import {join} from 'path';


//set template engine
app.set('view engine', 'ejs');

//to access all the file of public
app.use(express.static(join(process.cwd(), 'public')));    

app.listen(port, () => {
    console.log(`Server listenting at http://localhost:${port}`);
})