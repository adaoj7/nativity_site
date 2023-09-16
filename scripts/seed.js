import { User, Availability, db, Shift, Year, Day } from "./model.js";
import years from './data/years.json' assert {type: 'json'}
import days from './data/days.json' assert {type: 'json'}
import shifts from './data/shifts.json' assert {type: 'json'}
import shiftType from './data/shiftType.json' assert {type: 'json'} 

console.log('Syncing database...')
await db.sync({force: true})

const yearsInDB = await Promise.all(
    years.map((param) => {
        const { year } = param

        const newYear = Year.create({
            year: year
        })
        return newYear
    })
)

const daysInDB = await Promise.all(
    days.map((param) => {
        const {date, year} = param

        const newDay = Day.create({
            date,
            // year,
        })
        return newDay
    })
)

const shiftsInDB = await Promise.all(
    shifts.map((param) => {
        const {date, timeRange, shiftType} = param

        const newShift = Shift.create({
            date,
            timeRange,
            shiftType
        })
        return newShift
    })
)
// const hostShiftsInDB = await Promise.all(
//     hostShifts.map((shift) => {
//         const {shiftDate, shiftTimeRange, shiftType} = shift

//         const newShift = HostShift.create({
//             shiftDate: shiftDate,
//             shiftTimeRange: shiftTimeRange,
//             shiftType: shiftType
//         })
//         return newShift
//     })
// )

console.log(yearsInDB)
console.log(daysInDB)
console.log(shiftsInDB)
// console.log(hostShiftsInDB)

await db.close()
console.log('Finished seeding database!')