const mysql = require('mysql');

let con = mysql.createConnection({
    host: "localhost",
    user: "root",
    password: "root",
    database:"fikatime"});

con.connect((err)=>{
    if(err) throw err;
    else 
    console.log('Connected');
});

module.exports = con;