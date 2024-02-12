//Router Parameter 


// const express = require('express');     //this is ES5 version syntax

import express from 'express';  //this is ES6 version syntax

const app = express();

const port = process.env.PORT || 3000;

// app.get('/student/delete/:id', (req,res) => {
//     console.log(req.params);
//     res.send(`Student Delete ${req.params.id}`);
// })


// app.get('/product/:category/:id', (req,res) => {
//     console.log(req.params);
//     // res.send(`product Category: ${req.params.category} and product id: ${req.params.id}`);
    
//     const {category, id} = req.params;
//     res.send(`product Category: ${category} and product id: ${id}`);
// })


// app.get('/product/order/:year/and/:month', (req,res) => {
//     console.log(req.params);
//     const {year, month} = req.params;
//     res.send(`year: ${year} and month: ${month}`);
// })



// app.get('/train/:from-:to', (req,res) => {
//     console.log(req.params);
//     const {from, to} = req.params;
//     res.send(`Travelling Fron: ${from} to: ${to}`);
// })


// app.get('/location/:state.:city', (req,res) => {
//     console.log(req.params);
//     const {state, city } = req.params;
//     res.send(`state: ${state} City: ${city}`);
// })


//With Regx
// app.get('/student/:id([0-9]{2})', (req,res) => {
//     console.log(req.params);
//     res.send(`Student Delete ${req.params.id}`);
// })

// app.get('/:type(post|article)/:id', (req,res) => {
//     console.log(req.params);
//     res.send('Post or Article');
// })



//app.param()
// app.param('id', (req,res,next,id) => {
//     console.log(`Called only once ID: ${id}`);
//     next();
// })
// app.get('/user/:id', (req,res,next) => {
//     console.log('this is user ID Path 1');
//     next();
// })
// app.get('/user/:id', (req,res) => {
//     console.log('This is user ID Path 2');
//     res.send('Respones is OK');
// })


//app.param()  -   Array of Router Parameter
// app.param(['id', 'page'], (req,res,next,value) => {
//     console.log(`Called only once: ${value}`);
//     next();
// })
// app.get('/user/:id/:page', (req,res,next) => {
//     console.log('this is user ID Path 1');
//     next();
// })
// app.get('/user/:id/:page', (req,res) => {
//     console.log('This is user ID Path 2');
//     res.send('Respones is OK');
// })



//Query String
// app.get('/product', (req,res) => {
//     console.log(req.query);
    // res.send(`Response OK ${req.query.cat}`);

    // if we type in browser  http://localhost:3000/product?cat=laptop&id=55
//     const {cat,id} = req.query;
//     res.send(`Response OK ${cat} and ${id}`)
// })















app.listen(port, () => {
    console.log(`Server listenting at http://localhost:${port}`);
})