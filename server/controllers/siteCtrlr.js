import { Volunteer,SetupShift } from "../../scripts/model.js"

export default {
    loadShifts: async (req,res) => {
        const setupShift = await SetupShift.findAll()
        res.json(setupShift)
        console.log(setupShift)
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