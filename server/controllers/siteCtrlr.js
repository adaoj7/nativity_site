import { Volunteer, Shift, ShiftType, Day, Year, Availability} from "../../scripts/model.js"
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
    addVolunteer: async (req,res) => {
        try {
            const {fname,lname,email,phone,checked} = req.body
            // console.log(checked)
            const newVolunteer = await Volunteer.create({fname,lname,email,phone})
            const {userId} = await Volunteer.findOne({
                order: [['userId', 'DESC']]
            })

            if(checked.length > 0){
                for (const shiftId of checked){
                    const newVolunteerShifts = await Availability.create({userId,shiftId})
                    console.log(newVolunteerShifts)
                }
            } else {
                const emptyVolunteerShifts = await Availability.create({userId})
                // console.log(emptyVolunteerShifts)
            }

            for (const shiftId of checked){
                // console.log(shiftId)
                // console.log(await Availability.count({where:{shiftId:shiftId}}))
                if (await Availability.count({where:{shiftId:shiftId}}) >= 15){
                    const shift = await Shift.findByPk(shiftId)
                    // console.log(shift)
                    // shift.isFull = true
                    await shift.update({isFull:true})
                    console.log(shift)
                }
            }
            // console.log(newVolunteer)
            // console.log(checked)
        } catch (theseHands) {
            console.log(theseHands)
            res.sendStatus(500)
        }
    }

}