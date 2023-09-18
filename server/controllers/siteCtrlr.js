import { Volunteer, Shift } from "../../scripts/model.js"

export default {
    loadShifts: async (req,res) => {
        const shift = await Shift.findAll()
        res.json(shift)
        console.log(shift)
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