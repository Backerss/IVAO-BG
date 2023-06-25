const express = require('express');
const login = express.Router();
const cookieParser = require('cookie-parser');
const cookie = require('cookie-session');
const bcrypt = require('bcrypt');

const { connection } = require('../sql/db.js');


login.use(cookieParser());



//check cookie if have _vid exist
login.use((req, res, next) => {
    
        if (req.cookies._vid) {
            res.redirect('/');
        } else {
            next();
        }

});

login.get('/', (req, res) => {

    res.render('login');

});


login.post('/login_check', (req, res) => {

    
    const { vid, pass } = req.body;


    connection.query('SELECT * FROM bg_account WHERE bg_vid = ?', [vid], (err, result) => {
            
            if (err) throw err;
    
            if (result.length > 0) {
    
                bcrypt.compare(pass, result[0].bg_password, (err, response) => {
    
                    if (response) {
                        
                        res.cookie('_vid', vid);
                        res.cookie('_data', result[0]);
                        res.send('success');
                        
                    } else {
    
                        res.send('VID or Password is incorrect!');
    
                    }
    
                });
    
            } else {
    
                res.send('VID or Password is incorrect!');
        
            }
    });


    //res.send();

});



exports.login = login;