import { Volunteer, Shift, ShiftType, Day, Year, Availability} from "../../scripts/model.js"
import { Sequelize } from "sequelize"

export default {
    loadShifts: async (req,res) => {
        const shift = await Year.findAll({
            include: 
                [{model: Day,
                    separate: true,
                    order: ['dateId'],
                    include:
                        [{model: Shift,
                            separate: true,
                            order: ['shiftId'], 
                            include: 
                                [{model: ShiftType,
                                    where: {shiftType: 'setup'}
                                }]
                        }]
                }],
            // order: [
            //     [Sequelize.literal('date_id'), 'DESC']
            // ]
                                
            })
        // const shift = await Shift.findAll({include: Day})
        // const shift = await client.query('select * from shifts full outer join days using (date_id);')
        // const shiftTypes = await ShiftType.findAll()
        // const shiftDates = await Day.findAll()
    
        res.json(shift)
        // console.log(shift)
    },
    addVolunteer: async (req,res) => {
        try {
            const {fname,lname,email,phone,checked} = req.body
            console.log(checked)
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
                console.log(emptyVolunteerShifts)
            }
            console.log(newVolunteer)
            // console.log(checked)
        } catch (theseHands) {
            console.log(theseHands)
            res.sendStatus(500)
        }
    }

}