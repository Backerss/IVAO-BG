const express = require('express');
const profile = express.Router();
const cookieParser = require('cookie-parser');
const cookie = require('cookie-session');
const { connection } = require('../sql/db.js');


profile.use(cookieParser());





profile.get('/', (req, res) => {

    if(!req.cookies._vid)
    {
        res.redirect('/login');
    }
    else
    {
        //get data from cookie
        const data = JSON.parse(req.cookies._data);

        var imgink;
        var imgink2;

        connection.query('SELECT * FROM bg_atcrating WHERE bg_level = ?', [data.bg_atc_rating], (err, result) => {
                
            if (err) throw err;
            
            if(result.length > 0)
            {

                imgink = result[0].bg_img;
            }
              
        });


        connection.query('SELECT * FROM bg_pilotrating WHERE bg_level = ?', [data.bg_pilot_rating], (err, result) => {
                    
                if (err) throw err;
                
                if(result.length > 0)
                {
    
                    imgink2 = result[0].bg_img;
                    
                }
                
        });

        res.render('user/profile', {
            bg_img: imgink,
            bg_img2: imgink2,
        });


    }

});



exports.profile = profile;