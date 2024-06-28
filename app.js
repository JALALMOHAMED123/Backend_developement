const express = require('express');
const bodyParser = require('body-parser');
const path = require('path');
const app=express();

const adminroutes=require('./routes/admin');
const shoproutes=require('./routes/shop');
const login=require('./routes/login');

app.use(bodyParser.urlencoded({extended: true}));
app.use(express.static(path.join(__dirname,'public')));

app.use(login);

app.use('/admin',adminroutes);

app.use('/shop',shoproutes);

app.use((req,res,next)=>{
  res.status(404).sendFile(path.join(__dirname, 'views', '404.html'));
});

app.listen(4000);
