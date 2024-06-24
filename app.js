const express = require('express');
const bodyParser = require('body-parser');

const app=express();

const adminroutes=require('./routes/admin');
const shoproutes=require('./routes/shop');

app.use(bodyParser.urlencoded({extended: true}));

app.use('/admin',adminroutes);

app.use('/shop',shoproutes);

app.use((req,res,next)=>{
  res.status(404).send('<h1>Page not found</h1>');
});

app.listen(4000);
