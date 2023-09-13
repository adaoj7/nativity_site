﻿import { User } from "../../scripts/model.js";
import bcrypt from 'bcryptjs'

export default {
    register: async (req,res) => {
        console.log('register')
        try {
            const {email,password} = req.body

            const foundUser = await User.findOne({where: {email}})

            if (foundUser) {
                res.status(400).send('This email has already been used for an account.')
            } else {
                const salt = bcrypt.genSaltSync(10)
                const hash = bcrypt.hashSync(password,salt)
                console.log(salt)

                const newUser = await User.create({email, hashedPass: hash})
                console.log(newUser)
                req.session.user = {
                    userId: newUser.userId,
                    email: newUser.email
                }
                
                res.status(200).send(req.session.user)
            }

        } catch (err) {
            console.log(err)
            res.sendStatus(500)
        }
    },
    login: async (req, res) => {
        const sess = req.session;
        sess.email = req.body.email; // add the user's email to the session
        // res.render('dashboard.html');
        console.log('hit the login')
    },
    user: async (req,res) => {
        console.log('user');
    },
    logout: async (req,res) => {
        console.log('logout');
    }
}