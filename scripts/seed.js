import { User, Availability, db, Shift, Year, Day,ShiftType,Volunteer } from "./model.js";
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
        const {dateId, timeRange, typeId, isFull} = param

        const newShift = Shift.create({
            dateId,
            timeRange,
            typeId,
            isFull
        })
        return newShift
    })
)
const usersToCreate = []
  
for (let i = 1; i <= 15; i++) {
  usersToCreate.push({
    fname: 'Adam',
    lname: 'Johnson',
    email: `user${i}@test.com`,
    phone: '123'
  })
}

const usersInDB = await Promise.all(
  usersToCreate.map((user) => {
      return Volunteer.create(user)
  })
);

const availToCreate = []
  
for (let i = 1; i <= 15; i++) {
  availToCreate.push({
    userId: `${i}`,
    shiftId: '1'
  })
}

const availabilityInDB = await Promise.all(
  availToCreate.map((avail) => {
      return Availability.create(avail)
  })
);


console.log(usersInDB)
console.log(availabilityInDB)
// console.log(yearsInDB)
// console.log(daysInDB)
console.log(shiftsInDB)
// console.log(shiftTypesInDB)
// console.log(hostShiftsInDB)

await db.close()
console.log('Finished seeding database!')