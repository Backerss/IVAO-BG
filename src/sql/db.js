//mysql connecntion 

//import env file

var mysql = require('mysql');
var connection = mysql.createConnection({
    host     : 'localhost',
    user     : 'root',
    password : '',
    database : 'iva-bg',
});

//Check connection
connection.connect(function(err) {
    if (err) {
        console.error('error connecting: ' + err.stack);
        return;
    }
    console.log('[MYSQL] Connection ' + connection.config.database);
});

exports.connection = connection;