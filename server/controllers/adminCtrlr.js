﻿import { Availability,Shift,Day,Year,Volunteer } from "../../scripts/model.js";
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
        const {dateId} = await Day.findOne({where:{date:date}})
        console.log(dateId)
        const {shiftId} = await Shift.findOne({where: {timeRange:time,dateId:dateId}})
        console.log(shiftId)
        const volunteersAvail = await Volunteer.findAll({
            include:[{
                model: Availability,
                where: {shiftId:shiftId},
                include:[{
                    model: Shift, 
                }]
            }]    
        })
        for (let i = 0; i < volunteersAvail.length; i++)
        {console.log(volunteersAvail)}

        res.json({volunteersAvail,name,email,phone})
    }
}