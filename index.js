const express = require('express'); //import express
const app = express();
const ejs = require('ejs'); //import ejs
const port = 3000;
const bodyParser = require('body-parser'); //import body-parser
app.use(bodyParser.urlencoded({ extended: true }));

// import routers
const homeRouter = require('./routes/home'); 
const usersRouter = require('./routes/users');


app.set('view engine', 'ejs');
app.use(express.static('public'));
app.use(express.urlencoded({ extended: false }));
app.use(express.json());

app.use('/', homeRouter);
app.use('/users', usersRouter);



app.listen(port, ( ) => {
    console.log(`Example app listening at http://localhost:${port}`)
})