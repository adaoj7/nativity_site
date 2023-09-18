import { User, Availability, db, Shift, Year, Day,ShiftType } from "./model.js";
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
        const {date, yearId} = param

        const newDay = Day.create({
            date,
            yearId,
        })
        return newDay
    })
)

const shiftTypesInDB = await Promise.all(
    shiftType.map((shift) => {
        const {shiftType} = shift

        const newShift = ShiftType.create({
            shiftType: shiftType
        })
        return newShift
    })
)

const shiftsInDB = await Promise.all(
    shifts.map((param) => {
        const {dateId, timeRange, typeId} = param

        const newShift = Shift.create({
            dateId,
            timeRange,
            typeId
        })
        return newShift
    })
)

console.log(yearsInDB)
console.log(daysInDB)
console.log(shiftsInDB)
console.log(shiftTypesInDB)
// console.log(hostShiftsInDB)

await db.close()
console.log('Finished seeding database!')