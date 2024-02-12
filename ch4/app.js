//first Express js Application

// const express = require('express');  // this is ES5 syntax to import express

import express from 'express'       //this is ES6 syntax to import express
const app = express();

const port = process.env.PORT || '3000';

// app.get('/', function(req,res){
//     res.send('Hello World!');
// })

app.get('/', (req,res) => {
    res.send('Hello World!');
})


app.listen(port, () => {
    console.log(`server listening at http://localhost:${port}`);
})