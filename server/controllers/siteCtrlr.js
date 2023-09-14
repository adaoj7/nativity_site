import { Volunteer,VolunteerShift } from "../../scripts/model.js"

export default {
    loadShifts: async (req,res) => {
        const allShifts = await VolunteerShift.findAll()
        res.json(allShifts)
        console.log(allShifts)
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