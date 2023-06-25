const express = require('express');
const login = express.Router();
const cookieParser = require('cookie-parser');
const cookie = require('cookie-session');


login.use(cookieParser());

login.get('/', (req, res) => {

    res.render('login');

});


login.post('/login_check', (req, res) => {

    console.log(req.body);

    //res.send();

});



exports.login = login;