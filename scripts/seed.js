import { User, VolunteerShift, Availability, db } from "./model.js";
import shiftData from './data/shifts.json' assert {type: 'json'}

console.log('Syncing database...')
await db.sync({force: true})

const shiftsInDB = await Promise.all(
    shiftData.map((shift) => {
        const {shiftDate, shiftTimeRange, shiftType} = shift

        const newShift = VolunteerShift.create({
            shiftDate: shiftDate,
            shiftTimeRange: shiftTimeRange,
            shiftType: shiftType
        })
        return newShift
    })
)

console.log(shiftsInDB)

await db.close()
console.log('Finished seeding database!')