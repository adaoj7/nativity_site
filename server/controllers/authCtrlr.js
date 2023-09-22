import { User } from "../../scripts/model.js";
import bcrypt from 'bcryptjs'
import { Availability,Shift,Day,Year } from "../../scripts/model.js";

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
    },
    allShifts: async (req,res) => {
        const shift = await Year.findAll({
            include: 
                [{model: Day,
                    separate: true,
                    order: ['dateId'],
                    include:
                        [{model: Shift,
                            separate: true,
                            order: ['shiftId'], 
                        }]
                }],            
            })
        res.json(shift)
    },    
    signupQuery: async (req,res) => {
        console.log(req.body)
        const {shiftDate, shiftTime,date, time, checked} = req.body
        console.log(date)
        const volunteers = await Availability.findAll({
            include: [{
                model: Shift,
                where: {timeRange: time},
                include:[{
                    model: Day,
                    where: {date:date}

                }]
            }]
        })
        res.json(volunteers)
    }
}