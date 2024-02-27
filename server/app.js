import express from "express";
import morgan from "morgan";
import ViteExpress from "vite-express";
import session from "express-session";
import siteCtrlr from "./controllers/siteCtrlr.js";
import authCtrlr from "./controllers/authCtrlr.js";
import adminCtrlr from "./controllers/adminCtrlr.js";
import Stripe from "stripe";
import "dotenv/config";
import process from "process";

const {
    addVolunteer,
    loadSetupShifts,
    loadHostShifts,
    loadUserShifts,
    deleteUserShift,
} = siteCtrlr;
const { register, login, user, logout } = authCtrlr;
const { signupQuery, allShifts, addAdmin, removeAdmin } = adminCtrlr;

const app = express();
const PORT = 4242;
const stripe = new Stripe(process.env.STRIPE_SECRET);
const domain = process.env.VITE_HOST;

app.use(morgan("dev"));
app.use(express.urlencoded({ extended: false }));
app.use(express.static("public"));
app.use(express.json());
app.use(
    session({
        resave: false,
        saveUninitialized: true,
        secret: "what am I hiding?",
        cookie: {
            maxAge: 1000 * 60 * 60 * 24 * 14,
        },
    })
);

// authentication endpoints
app.post("/api/register", register);
app.post("/api/login", login);
app.get("/api/user", user);
app.delete("/api/logout", logout);

// admin endpoints
app.get("/api/adminQuery", allShifts);
app.post("/api/adminQuery", signupQuery);
app.post("/api/newAdmin", addAdmin);
app.post("/api/removeAdmin", removeAdmin);

// volunteer form endpoints
app.get("/api/setup", loadSetupShifts);
app.get("/api/host", loadHostShifts);
app.post("/api/newVolunteer", addVolunteer);
app.post("/api/userShifts", loadUserShifts);
app.delete("/api/deleteShift", deleteUserShift);

// stripe endpoints
app.post("/api/create-checkout-session/donate", async (req, res) => {
    console.log("hit");
    const session = await stripe.checkout.sessions.create({
        line_items: [
            {
                price: "price_1OOohVB3pG0RBYQkrYs4DXOh",
                quantity: 1,
            },
        ],
        mode: "payment",
        success_url: `${domain}?success=true`,
        cancel_url: `${domain}/donate`,
    });
    console.log(session.url);
    res.status(200).send(session.url);
});

ViteExpress.listen(app, PORT, () =>
    console.log(`what is the answer? http://localhost:${PORT}`)
);
