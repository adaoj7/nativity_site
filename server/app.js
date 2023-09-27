import express from "express";
import morgan from "morgan";
import ViteExpress from 'vite-express';
import session from "express-session";
import siteCtrlr from './controllers/siteCtrlr.js';
import authCtrlr from './controllers/authCtrlr.js'
import adminCtrlr from "./controllers/adminCtrlr.js";

const { addVolunteer,loadSetupShifts,loadHostShifts,loadUserShifts,loadUserName } = siteCtrlr
const {register,login,user,logout,} = authCtrlr
const {signupQuery,allShifts} = adminCtrlr

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

// admin endpoints
app.get('/api/adminQuery', allShifts)
app.post('/api/adminQuery',signupQuery)

// volunteer form endpoints
app.get('/api/setup',loadSetupShifts)
app.get('/api/host',loadHostShifts)
app.post('/api/userName',loadUserName)
app.post('/api/newVolunteer',addVolunteer)
app.post('/api/userShifts',loadUserShifts)


ViteExpress.listen(app,4242,() => console.log('what is the answer? http://localhost:4242'))