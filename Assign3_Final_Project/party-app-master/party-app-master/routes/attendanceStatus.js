const con = require('../database');

/**
 * 1. Get event id of the events that the user wishes to go 
 *  from the user id | event id  table.
 * 2. Compare the event ids of the events displayed in the homepage
 * 3. Disable the 'Going' button for the events of the respective event ids
 */

module.exports = (event, username)=>{
    let getUserIDQuery = "SELECT id FROM users WHERE username='"+username+"'";
    con.query(getUserIDQuery, (err, result)=>{
        if(err) throw err;

        console.log(result[0]['id']);
        let insertQuery = "INSERT INTO user_event (user_id, event_id) VALUES ("+result[0]['id']+","+event+")";
        con.query(insertQuery, (err, result)=> {
            if(err) throw err;
            else console.log('You are going to this event...')
        })
    })
}


       