import { Volunteer, Shift, ShiftType, Day } from "../../scripts/model.js"

export default {
    loadShifts: async (req,res) => {
        const shift = await Shift.findAll()
        const shiftTypes = await ShiftType.findAll()
        const shiftDates = await Day.findAll()
    
        res.json({shift,shiftTypes,shiftDates})
        console.log('hi')
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