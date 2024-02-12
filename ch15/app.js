

import express from 'express';
import {join} from 'path';

const app = express();

const port = process.env.PORT || 3000;

import myLogger from './middlewares/logger-middleware.js';

import web from './routes/web.js';

import student from './routes/student.js';

//set template engine
app.set('view engine', 'ejs');

app.use(express.static(join(process.cwd(), 'public')));


//Application level Middleware
// app.use(myLogger);

//when we provide the path to middleware
// app.use('/about',myLogger);


app.use('/',web);
app.use('/',student);


app.listen(port, () => {
    console.log(`server is running at http://localhost:${port}`);
})