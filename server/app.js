import express from "express";
import morgan from "morgan";
import ViteExpress from 'vite-express';
import session from "express-session";
// import handlerFunctions from './controller.js';

const app = express();

app.use(morgan('dev'))
app.use(express.urlencoded({extended:false}))
app.use(express.static('public'))
app.use(express.json())
app.use(
    session({
        resave: false,
        saveUninitialized: true,
        secret: 'what am I hiding?'
    })
)

// Login and session info
app.post('/login', (req, res) => {
    const sess = req.session;
    sess.email = req.body.email; // add the user's email to the session
    // res.render('dashboard.html');
    console.log('hit the login')
});

app.get('/', (req, res) => {
    if (req.session.email) {
      // A user is logged in, so show their email
      res.send(`<p>Hello ${req.session.email}!</p><a href="/logout">Logout</a>`);
    } else {
      res.send('<a href="/login">Please login.</a>');
    }
});
// app.get('/api/')

ViteExpress.listen(app,4242,() => console.log('what is the answer? http://localhost:4242'))