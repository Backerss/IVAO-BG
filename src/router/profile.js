const express = require('express');
const profile = express.Router();
const cookieParser = require('cookie-parser');
const cookie = require('cookie-session');


profile.use(cookieParser());

profile.get('/', (req, res) => {

    res.render('user/profile');

});



exports.profile = profile;