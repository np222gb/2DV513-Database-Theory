const con = require('../database');

module.exports = function (req, res) {
    console.log(req.body);    
        // Basic INSERT NEW USER OPERATION
        // Further implementation to avoid duplicates 
        let sql = "INSERT INTO users (username, password) VALUES ('"+req.body.username+"','"+req.body.password+"')";
        con.query(sql, function (err, result) {
            if (err) throw err;
            console.log("1 record inserted");
        });         
    res.render('loginForm');
    };
