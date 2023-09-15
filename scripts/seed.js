import { User, Availability, db, SetupShift } from "./model.js";
import setupShifts from './data/setupShifts.json' assert {type: 'json'}
import hostShifts from './data/hostShifts.json' assert {type: 'json'}
console.log('Syncing database...')
await db.sync({force: true})

const setupShiftsInDB = await Promise.all(
    setupShifts.map((shift) => {
        const {shiftDate, shiftTimeRange, shiftType} = shift

        const newShift = SetupShift.create({
            shiftDate: shiftDate,
            shiftTimeRange: shiftTimeRange,
            shiftType: shiftType
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

console.log(setupShiftsInDB)
// console.log(hostShiftsInDB)

await db.close()
console.log('Finished seeding database!')