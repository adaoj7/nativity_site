import { Volunteer, Shift, ShiftType, Day, Year } from "../../scripts/model.js"
import { Sequelize } from "sequelize"

export default {
    loadShifts: async (req,res) => {
        const shift = await Year.findAll({include: [{model: Day, include:[{model: Shift, include: [{model: ShiftType}]}]}]})
        // const shift = await Shift.findAll({include: Day})
        // const shift = await client.query('select * from shifts full outer join days using (date_id);')
        // const shiftTypes = await ShiftType.findAll()
        // const shiftDates = await Day.findAll()
    
        res.json(shift)
        console.log(shift)
    },
    addVolunteer: async (req,res) => {
        try {
            const {fname,lname,email,phone} = req.body
            const newVolunteer = await Volunteer.create({fname,lname,email,phone})
            console.log(newVolunteer)

        } catch (theseHands) {
            console.log(theseHands)
            res.sendStatus(500)
        }
    }

}