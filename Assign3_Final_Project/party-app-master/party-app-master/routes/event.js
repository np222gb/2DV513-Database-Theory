const con = require('../database');

module.exports = function (req, res) {
    console.log(req.body)
        // INSERT NEW Event OPERATION
        // Further implementation to avoid duplicates, city data from db.

    let sql = "INSERT INTO events (event_name, event_date,event_location, audience) VALUES ('"+req.body.eventname+"','"+req.body.date+"','"+req.body.location+"','"+req.body.audience+"')";
        con.query(sql, function (err, result) {
            if (err) throw err;
            console.log("1 record inserted");
        });         
    res.redirect('/')
};
