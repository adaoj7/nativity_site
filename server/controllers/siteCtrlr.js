import {
    Volunteer,
    Shift,
    ShiftType,
    Day,
    Year,
    Availability,
    User,
} from "../../scripts/model.js";
import { Sequelize } from "sequelize";

export default {
    loadSetupShifts: async (req, res) => {
        const shift = await Year.findAll({
            include: [
                {
                    model: Day,
                    separate: true,
                    order: ["dateId"],
                    include: [
                        {
                            model: Shift,
                            where: { isFull: false },
                            separate: true,
                            order: ["shiftId"],
                            include: [
                                {
                                    model: ShiftType,
                                    where: { shiftType: "setup" },
                                },
                            ],
                        },
                    ],
                },
            ],
        });
        res.json(shift);
        // console.log(shift)
    },
    loadHostShifts: async (req, res) => {
        const shift = await Year.findAll({
            include: [
                {
                    model: Day,
                    separate: true,
                    order: ["dateId"],
                    include: [
                        {
                            model: Shift,
                            where: { isFull: false },
                            separate: true,
                            order: ["shiftId"],
                            include: [
                                {
                                    model: ShiftType,
                                    where: { shiftType: "host" },
                                },
                            ],
                        },
                    ],
                },
            ],
        });
        res.json(shift);
        // console.log(shift)
    },
    newVolunteer: async (req, res) => {
        try {
            // This is the information received from the form
            const { userId, checked } = req.body;

            // Creates new shift for each shift that users signed up for
            for (const shiftId of checked) {
                const newVolunteerShifts = await Availability.create({
                    userId,
                    shiftId,
                });
                console.log(newVolunteerShifts);
            }

            // Closes shifts if they have 15 volunteers
            for (const shiftId of checked) {
                console.log(
                    (await Availability.count({
                        where: { shiftId: shiftId },
                    })) >= 15
                );
                if (
                    (await Availability.count({
                        where: { shiftId: shiftId },
                    })) >= 15
                ) {
                    const shift = await Shift.findByPk(shiftId);
                    await shift.update({ isFull: true });
                    console.log(shift);
                }
            }
            res.sendStatus(200);
        } catch (theseHands) {
            console.log(theseHands);
            res.sendStatus(500);
        }
    },
    loadUserShifts: async (req, res) => {
        const { userId } = req.body;
        const shifts = await Availability.findAll({
            where: { userId: userId },
            include: [
                {
                    model: Shift,
                    // separate: true,
                    order: ["shiftId"],
                    include: [
                        {
                            model: Day,
                        },
                    ],
                },
            ],
        });
        res.json(shifts);
        // console.log(shifts)
    },
    deleteUserShift: async (req, res) => {
        console.log(req.body);
        const { availabilityId, shiftId } = req.body;

        try {
            await Availability.destroy({
                where: {
                    availabilityId: availabilityId,
                },
            });
            res.sendStatus(200);
        } catch (err) {
            console.log(err);
        }

        if ((await Availability.count({ where: { shiftId: shiftId } })) <= 15) {
            const shift = await Shift.findByPk(shiftId);
            await shift.update({ isFull: false });
            console.log(shift);
        }

        console.log("availability destroyed");
    },
};
