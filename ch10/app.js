// const express = require('express');     //this is ES5 version syntax

import express from 'express';  //this is ES6 version syntax

const app = express();

const port = process.env.PORT || 3000;

import web from './routes/web.js';

app.use('/',web);

app.listen(port, () => {
    console.log(`Server listenting at http://localhost:${port}`);
})