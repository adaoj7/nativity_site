import express from "express";
import morgan from "morgan";
import ViteExpress from 'vite-express';
import session from "express-session";
import siteCtrlr from './controllers/siteCtrlr.js';
import authCtrlr from './controllers/authCtrlr.js'

const { addVolunteer } = siteCtrlr
const {register,login,user,logout} = authCtrlr

const app = express();

app.use(morgan('dev'))
app.use(express.urlencoded({extended:false}))
app.use(express.static('public'))
app.use(express.json())
app.use(
    session({
        resave: false,
        saveUninitialized: true,
        secret: 'what am I hiding?',
        cookie:{
            maxAge: 1000 * 60 * 60 * 24 * 14
        }
    })
)


// authentication endpoints
app.post('/api/register', register);
app.post('/api/login', login)
app.get('/api/user',user)
app.delete('/api/logout',logout)

// volunteer form endpoints
app.post('/api/newVolunteer',addVolunteer)


ViteExpress.listen(app,4242,() => console.log('what is the answer? http://localhost:4242'))