import { User } from "../../scripts/model.js";
import bcrypt from "bcryptjs";

export default {
    register: async (req, res) => {
        console.log("register");
        try {
            const { fname, lname, email, phone, church, password } = req.body;
            console.log(fname, lname);
            const foundUser = await User.findOne({ where: { email } });

            if (foundUser) {
                res.status(400).send(
                    "This email has already been used for an account."
                );
            } else {
                const salt = bcrypt.genSaltSync(10);
                const hash = bcrypt.hashSync(password, salt);
                console.log(salt);

                const newUser = await User.create({
                    fname,
                    lname,
                    phone,
                    church,
                    email,
                    hashedPass: hash,
                    isAdmin: false,
                });
                console.log(newUser);
                req.session.user = {
                    fname: newUser.fname,
                    lname: newUser.lname,
                    userId: newUser.userId,
                    email: newUser.email,
                    isAdmin: newUser.isAdmin,
                };
                console.log("User created");
                res.status(200).send(req.session.user);
            }
        } catch (err) {
            console.log(err);
            res.sendStatus(500);
        }
    },
    login: async (req, res) => {
        console.log("login");

        try {
            const { email, password } = req.body;

            const foundUser = await User.findOne({ where: { email } });

            if (!foundUser) {
                res.status(400).send("No user was found with that email");
            } else {
                const isAuthenticated = bcrypt.compareSync(
                    password,
                    foundUser.hashedPass
                );
                if (isAuthenticated) {
                    req.session.user = {
                        fname: foundUser.fname,
                        lname: foundUser.lname,
                        userId: foundUser.userId,
                        email: foundUser.email,
                        isAdmin: foundUser.isAdmin,
                    };

                    res.status(200).send(req.session.user);
                    console.log("Hello there");
                } else {
                    res.status(401).send("Username or password was incorrect");
                }
            }
        } catch (err) {
            console.log(err);
            res.sendStatus(500);
        }
    },
    user: async (req, res) => {
        if (req.session.user) {
            res.status(200).send(req.session.user);
        } else {
            res.status(404).send("No user is signed in");
        }
    },
    logout: async (req, res) => {
        console.log("logout");
        try {
            req.session.destroy();
            res.sendStatus(200);
        } catch (err) {
            console.log(err);
            res.status();
        }
    },
};
