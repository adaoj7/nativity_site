import { Volunteer, Shift, ShiftType, Day, Year, Availability,User} from "../../scripts/model.js"
import { Sequelize } from "sequelize"

export default {
    loadSetupShifts: async (req,res) => {
        const shift = await Year.findAll({
            include: 
                [{model: Day,
                    separate: true,
                    order: ['dateId'],
                    include:
                        [{model: Shift,
                            where: {isFull:false},
                            separate: true,
                            order: ['shiftId'], 
                            include: 
                                [{model: ShiftType,
                                    where: {shiftType: 'setup'}
                                }]
                        }]
                }],            
            })
        res.json(shift)
        // console.log(shift)
    },
    loadHostShifts: async (req,res) => {
        const shift = await Year.findAll({
            include: 
                [{model: Day,
                    separate: true,
                    order: ['dateId'],
                    include:
                        [{model: Shift,
                            where: {isFull:false},
                            separate: true,
                            order: ['shiftId'], 
                            include: 
                                [{model: ShiftType,
                                    where: {shiftType: 'host'}
                                }]
                        }]
                }],                
            })
        res.json(shift)
        // console.log(shift)
    },
    loadUserName: async (req,res) => {
        const {userId} = req.body
        const user = await User.findOne({
            where: {userId:userId}
        })
        console.log(user)
        res.json(user)
    },
    addVolunteer: async (req,res) => {
        try {
            // This is the information received from the form 
            const {fname,lname,email,phone,checked} = req.body
            // Checked is the array holding all of the shifts that people signed up for by shiftId
            console.log(checked)
            // Need to add conditional if someone wants to add a second form that doesn't create a new volunteer
            const newVolunteer = await Volunteer.create({fname,lname,email,phone})
            console.log(newVolunteer)
            // Finds the userId of the most recent user created, however this will need to change if the user is one that has already signed in. Could be accessed from the volunteer form or user form. Could we eliminate the Volunteer table and join the User table instead?
            const {userId} = await Volunteer.findOne({
                order: [['userId', 'DESC']]
            })

            // Creates new shift for each shift that users signed up for
            for (const shiftId of checked){
                const newVolunteerShifts = await Availability.create({userId,shiftId})
                console.log(newVolunteerShifts)
            }
            
            // Closes shifts if they have 15 volunteers
            for (const shiftId of checked){
                if (await Availability.count({where:{shiftId:shiftId}}) >= 15){
                    const shift = await Shift.findByPk(shiftId)
                    await shift.update({isFull:true})
                    console.log(shift)
                }
            }
            

        } catch (theseHands) {
            console.log(theseHands)
            res.sendStatus(500)
        }
    },
    loadUserShifts: async (req,res) => {
        const shift = await Year.findAll({
            include: 
                [{model: Day,
                    separate: true,
                    order: ['dateId'],
                    include:
                        [{model: Shift,
                            where: {isFull:false},
                            separate: true,
                            order: ['shiftId'], 
                            include: 
                                [{model: ShiftType,
                                    where: {shiftType: 'host'}
                                }]
                        }]
                }],                
            })
        res.json(shift)
        // console.log(shift)
    },

}