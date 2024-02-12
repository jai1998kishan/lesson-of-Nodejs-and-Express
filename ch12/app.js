// const express = require('express');     //this is ES5 version syntax

import express from 'express';  //this is ES6 version syntax
import {join} from 'path';

const app = express();

const port = process.env.PORT || 3000;

import web from './routes/web.js';

//Setup the directory where template files are located
app.set('views', './views');
// app.set('views','./myviews') // if we change the name of views folder then we have to write like this myviews is the folder name

//setup the template Engine to use
app.set('view engine', 'ejs')

app.use(express.static(join(process.cwd(), 'public')));

app.use('/', web);



app.listen(port, () => {
    console.log(`Server listenting at http://localhost:${port}`);
})