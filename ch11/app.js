// const express = require('express');     //this is ES5 version syntax

import express from 'express';  //this is ES6 version syntax
import {join} from 'path';

const app = express();

const port = process.env.PORT || 3000;

import web from './routes/web.js';

//Static Files
console.log(join(process.cwd(), 'public'));
app.use(express.static(join(process.cwd(), 'public')));   //if we ant to use all the file from public use this line
// app.use('/static', express.static(join(process.cwd(), 'public')));
// app.use('/css',express.static(join(process.cwd(), 'public/css')));    // if we want to use sceified file than use this line


//to handle the dot file(.hello.css) file
// const options = {
//     dotfiles: "deny",
//     etag: false,
//     extension: ['htm', 'html'],
//     index: false,
//     maxAge: 'id',
//     redirect: false,
//     setHeaders: function (res,path, stat){
//         res.set('x-timestamp', Date.now())
//     }
// }
// app.use(express.static(join(process.cwd(), 'public'), options));




app.use('/', web);

app.listen(port, () => {
    console.log(`Server listenting at http://localhost:${port}`);
})