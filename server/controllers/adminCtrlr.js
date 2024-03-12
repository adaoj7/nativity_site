import { Availability, Shift, Day, Year, User } from "../../scripts/model.js";
import { Op } from "sequelize";

export default {
    allShifts: async (req, res) => {
        try {
            const shift = await Year.findAll({
                include: [
                    {
                        model: Day,
                        separate: true,
                        order: ["dateId"],
                        include: [
                            {
                                model: Shift,
                                separate: true,
                                order: ["shiftId"],
                            },
                        ],
                    },
                ],
            });
            res.json(shift);
        } catch (err) {
            console.log(err);
            res.sendStatus(400);
        }
    },
    signupQuery: async (req, res) => {
        // console.log(req.body)
        try {
            const { date, time, checked } = req.body;
            // console.log(checked)
            console.log(time);
            const nameArr = checked.filter((e) => e === "Name");
            const name = nameArr[0];
            const emailArr = checked.filter((e) => e === "Email");
            const email = emailArr[0];
            const phoneArr = checked.filter((e) => e === "Phone");
            const phone = phoneArr[0];
            const { dateId } = await Day.findOne({ where: { date: date } });
            const { shiftId } = await Shift.findOne({
                where: { timeRange: time, dateId: dateId },
            });
            const volunteersAvail = await User.findAll({
                include: [
                    {
                        model: Availability,
                        where: { shiftId: shiftId },
                        include: [
                            {
                                model: Shift,
                            },
                        ],
                    },
                ],
            });
            for (let i = 0; i < volunteersAvail.length; i++) {}

            res.json({ volunteersAvail, name, email, phone });
        } catch (err) {
            console.log(err);
            res.sendStatus(400);
        }
    },
    addAdmin: async (req, res) => {
        const { email } = req.body;
        try {
            console.log(email);
            const newAdmin = await User.findOne({
                where: { email: email },
            });
            //need to create a check to see if isAdmin is already true
            console.log(newAdmin);
            if (newAdmin) {
                await newAdmin.update({ isAdmin: true });
                console.log(newAdmin);
                res.status(200).send(newAdmin);
            } else {
                res.status(404).send("No user matches that email");
            }
        } catch (err) {
            console.log(err);
            res.status(404);
        }
    },
    removeAdmin: async (req, res) => {
        const { email } = req.body;
        try {
            console.log(email);
            const oldAdmin = await User.findOne({
                where: { email: email },
            });
            if (oldAdmin) {
                await oldAdmin.update({ isAdmin: false });
                console.log(oldAdmin);
                res.status(200).send(oldAdmin);
            } else {
                res.status(404).send("No user matches that email");
            }
        } catch (err) {
            console.log(err);
            res.status(404);
        }
    },
};
