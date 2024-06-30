const express = require('express');
const bodyParser = require('body-parser');
const path = require('path');
const app=express();
const errorController = require('./controllers/error');

const adminroutes=require('./routes/admin');
const shoproutes=require('./routes/shop');
const login=require('./routes/login');
const contactroutes=require('./routes/contact-us');
const successroutes=require('./routes/success');

app.use(bodyParser.urlencoded({extended: true}));
app.use(express.static(path.join(__dirname,'public')));

app.use(login);

app.use('/admin',adminroutes);

app.use('/shop',shoproutes);

app.use(contactroutes);

app.use(successroutes);

app.use(errorController.get404);

app.listen(4000);
