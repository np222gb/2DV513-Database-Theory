const con = require('../database');

module.exports = function (username, password, callback) {
    let sql = "SELECT * FROM users WHERE username='"+username+"' AND password='"+password+"';";
    con.query(sql, function (err, result) {
        if (err) throw err;
        return callback(result.length >= 0);
    });     
};
