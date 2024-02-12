// Routing 
// const express = require('express');     //this is ES5 version syntax

import express from 'express';  //this is ES6 version syntax

const app = express();

const port = process.env.PORT || 3000;

// Routes
app.get('/', (req,res) => {
    res.send('Get method!');
})

// app.all('/sabkch', (req,res) => {
//     res.send('All Method !');
// })

// app.all('*', (req,res) => {
//     res.send('Page not found');
// })

// app.all('/api/*', (req,res) => {
//     res.send('API Page');
// })


//string Path
// app.get('/about', (req,res) => {
//     res.send('Get About!');
// })
// app.get('/contact', (req,res) => {
//     res.send('Get Contact!');
// })


//string pattern path
// app.get('/ab?cd', (req,res) => {
//     res.send('this route path will match acd and abcd');
// })


// Regular expression path
// app.get(/a/, (req,res) => {
//     res.send('This is a');
// })


//One callback
// app.get('/cbexample1', (req,res) => {
//     res.send('One Callback Example');
// })

//more than one callback
// app.get('/cbexample2', (req,res,next) => {
//     console.log('First callback');
//     next();
// }, (req,res) => {
//     console.log('second callback');
//     res.send('More than One Callback Example');
// })


//An Array of Callback
// const cb1 = (req,res,next) => {
//     console.log('first callback');
//     next();
// }
// const cb2 = (req,res,next) => {
//     console.log('second callback');
//     next();
// }
// const cb3 = (req,res) => {
//     console.log('Third callback');
//     res.send('An array of callback Example');
// }

// app.get('/cbexample3', [cb1,cb2,cb3])



//Conbination of Independent function and Array of functions
// const cb1 = (req,res,next) => {
//     console.log('first callback');
//     next();
// }
// const cb2 = (req,res,next) => {
//     console.log('second callback');
//     next();
// }

// app.get('/cbexample4',[cb1,cb2], (req,res,next) => {
//     console.log('Third callback');
//     next();
// }, (req,res) => {
//     console.log('fourth callback');
//     res.send('Conbination of Independent function and Array of functions')
// })



//Chained Route callback
// app.route('/student')
//     .get( (req,res) => {
//         res.send('All Student');
//     })
//     .post( (req,res) => {
//         res.send('Add new Student');
//     })
//     .put( (req,res) => {
//         res.send('update Student');
//     })

// app.route('/student')
//     .all((req,res,next) => {
//         console.log('first run this for all HTTP Method');
//         next();
//     })
//     .get( (req,res) => {
//         console.log('GET Method');
//         res.send('All Student');
//     })
//     .post( (req,res) => {
//         console.log('POST Method');
//         res.send('Add new Student');
//     })
//     .put( (req,res) => {
//         console.log('PUT Method');
//         res.send('update Student');
//     })




app.listen(port, () => {
    console.log(`Server listenting at http://localhost:${port}`);
})