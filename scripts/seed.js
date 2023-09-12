import { User, VolunteerShift, Availability, db } from "./model.js";

console.log('Syncing database...')
await db.sync({force: true})

await db.close()
console.log('Finished seeding database!')