import { Availability,Shift,Day,Year,Volunteer } from "../../scripts/model.js";
import { Op } from "sequelize";

export default {
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
        // console.log(req.body)
        const {date, time, checked} = req.body
        // console.log(checked)
        console.log(time)
        const nameArr = checked.filter((e) => e === 'Name')
        const name = nameArr[0]
        const emailArr = checked.filter((e) => e === 'Email')
        const email = emailArr[0]
        const phoneArr = checked.filter((e) => e === 'Phone')
        const phone = phoneArr[0]
        const {shiftId} = await Shift.findOne({where: {timeRange:time}})
        console.log(date)
        console.log(shiftId)
        const volunteers = await Volunteer.findAll({
        
            // raw: true,
            // plain: false, 
            // nest: true,
            
            include:[{
                model: Availability,
                include: [{
                    model: Shift,
                    required: true,
                    include:[{
                        model:Day,
                        required: true,
                        where: {date:date}
                    }],
                    where: {shiftId:shiftId},
                }],
            }]
        })
        // console.log(volunteers)
        const volunteersAvail = volunteers.filter((ele) => ele.availabilities.length > 0)

        res.json({volunteersAvail,name,email,phone})
    }
}