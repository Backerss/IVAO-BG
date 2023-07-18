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
        const data = JSON.parse(req.cookies._data);

        res.render('user/profile', {
            bg_img: GetATCIMG(data.bg_atc_rating),
            bg_img2: GetPILOTIMG(data.bg_pilot_rating),
        });

    }

});


function GetATCIMG(level)
{


    var img = connection.query('SELECT * FROM bg_atcrating WHERE bg_level = ?', [level], (err, result) => {
                
        if (err) throw err;
        
        if(result.length > 0)
        {
            return result[0].bg_img;
            
        }
          
    });
    return img;
}


function GetPILOTIMG(level)
{
    connection.query('SELECT * FROM bg_pilotrating WHERE bg_level = ?', [level], (err, result) => {
                
        if (err) throw err;
        
        if(result.length > 0)
        {
            return result[0].bg_img;
        }
          
    });
}





exports.profile = profile;