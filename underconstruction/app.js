
import express from 'express';
import {join} from 'path';
const app = express();
const port = process.env.PORT || 3000;

import web from './routes/web.js';
import underConstruction from './middlewares/uc-middleware.js';

//set template engine
app.set('view engine', 'ejs');

//to access all the file of public
app.use(express.static(join(process.cwd(), 'public'))); 

//Application level Middleware
// app.use(underConstruction);

//if we want particular page to go underconstruction
// app.use('/about',underConstruction);

app.use('/',web);

app.listen(port, () => {
    console.log(`server is running at http://localhost:${port}`);
})