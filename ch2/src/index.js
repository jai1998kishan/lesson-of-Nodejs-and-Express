//setup Babel with express js
// const express = require('express')
import express from 'express';
const app = express()
const port = 3000

app.get('/', (req, res) => {
  res.send('Hello Boby')
})

app.listen(port, () => {
  console.log(`Example app listening on port ${port}`)
})