const express = require('express');
const app = express();
const pug = require('pug');
const Joi = require('joi');


app.use(express.static('public'));


app.set('view engine', 'pug');
app.set('views', './views');

const schema = {
    name: Joi.string().min(3).validate(),
}




app.get('/', (req,res) => {
    res.render('./index');
});

app.get('/signin', (req,res) => {
    res.render('./Signin');
});




module.exports = app;