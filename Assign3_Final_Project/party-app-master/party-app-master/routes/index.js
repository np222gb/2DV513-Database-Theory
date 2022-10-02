const con = require('../database');

module.exports = (req, res)=>{
    con.query('SELECT * FROM home', (err, result)=> {
        console.log(result);
    res.render('homepage', {results:result});
})}


       