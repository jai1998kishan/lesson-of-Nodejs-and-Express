import express from 'express';
const app = express();
const port = process.env.PORT || 3000;

import {join} from 'path';

import web from './routes/web.js';

//set template engine
app.set('view engine','ejs');

//this line use to use public file
app.use(express.static(join(process.cwd(), 'public')));

//load routers
app.use('/',web);

app.listen(port, () => {
    console.log(`server is listening at http://localhost:${port}`);
})


