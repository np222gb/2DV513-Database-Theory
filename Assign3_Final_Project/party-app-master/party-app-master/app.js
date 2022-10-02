const express = require('express');
const path = require('path');
const app = express();
const bodyParser = require('body-parser');
const PORT = 8080;

const event = require('./routes/event');
const register = require('./routes/register');
const login = require('./routes/login');
const home = require('./routes/index');
const attendance = require('./routes/attendanceStatus');

const server = app.listen(PORT, () => {
  console.log(`Express is running on port ${server.address().port}`);
});

app.all('*',(req, res, next)=> {
    console.log(app.locals.username)
    if (app.locals.username || req.url.indexOf('login') !== 0)
        next();
    else
        res.render('loginForm')
})

app.set('views', path.join(__dirname, 'views'));
app.set('view engine', 'pug');
app.use(bodyParser.urlencoded({ extended: true }));


app.get('/', home)
    .post('/', (req, res)=> {
        console.log(req.body.goingButton);
        attendance(req.body.goingButton, app.locals.username)
        res.redirect('/')
    });

app.get('/createevent', (req, res)=> {
    res.render('createEvent');
}).post('/createevent',event);

app.get('/register', (req, res) => {
    res.render('registerForm');
}).post('/register',register);

app.get('/login', (req, res) => {
    res.render('loginForm');
}).post('/login', (req, res)=> {
    login(req.body.username, req.body.password, (resp)=> {
        if(resp) {
            app.locals.username = req.body.username;
            console.log(req.body.username); 
        }
    });
    res.redirect('/')
});

/** MVP (CREATE EVENT) -> 1. Get event parameters from the createEvent.pug page.
 *         2. Store it in variables. 
 *         3. Insert the parameters into the database.
 */

/** MVP (LIST EVENTS)-> 1. Get events from the database.
 *         2. Display them in the home page. 
 */
/**
 * MVP (Use Views) -> Views are used instead of exposing the actual table.
 *          Views can mimic entire tables or specific rows/ columns of a table.
 */
