const mysql = require('mysql');
const express = require('express');
var app = express();

const bodyParser = require('body-parser');


app.use(bodyParser.json());


var mysqlConnection = mysql.createConnection({
    host: 'localhost',
    user: 'root',
    password: 'gigi',
    database: 'xuser'
});

mysqlConnection.connect((err) => {
    if (!err)
        console.log('DB connection succeded.');
    else
        console.log('DB connection failed \n Error : ' + JSON.stringify(err, undefined, 2));
});


app.listen(3000, () => console.log('Express server is runnig at port no : 3000'));

app.get('/users', (req, res) => {
    mysqlConnection.query('SELECT * FROM registration', (err, rows, fields) => {
        if (!err)
            res.send(rows);
        else
            console.log(err);
    });
});
