const express = require('express');
const app = express();
const port = 5000;
const path = require('path');
const mongoose = require('mongoose');
const ejsMate = require('ejs-mate');
const methodOverride = require('method-override');

mongoose.connect('mongodb://127.0.0.1:27017/shopping-app')
    .then(()=>{
        console.log('db connected successfully')
    })
    .catch((err)=>{
        console.log(err);
    })


app.engine('ejs',ejsMate);

app.set('view engine', 'ejs');
app.set('views',path.join(__dirname,'views'));
app.use(express.static(path.join(__dirname,'public')));
app.use(express.urlencoded({extended:true}));
app.use(methodOverride('_method'));

const productRoutes = require('./routes/product');
app.use(productRoutes);


app.listen(port,()=>{
    console.log(`server started at port ${port}`);
})