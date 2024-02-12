// const express = require('express');     //this is ES5 version syntax

//old why to import the routes
// const student = require('./routes/student');
// const teacher = require('./routes/teacher');

import express from 'express';  //this is ES6 version syntax

import stu from './routes/student.js';
import teacher from './routes/teacher.js';


const app = express();

//load the router Modules
app.use('/student', stu);
app.use('/teacher', teacher);

const port = process.env.PORT || 3000;




app.listen(port, () => {
    console.log(`Server listenting at http://localhost:${port}`);
})