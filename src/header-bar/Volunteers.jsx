import { useState } from "react";
import axios from "axios";
import { useLoaderData } from "react-router-dom";
import React from "react";
import { Formik, Field, Form } from "formik";
import SetupDates from "./SetupDates";


const sleep = (ms) => new Promise((r) => setTimeout(r, ms));

const Volunteers = () => {
  const volunteerYear = new Date
  const year = volunteerYear.getFullYear()

  const { dataAboutShifts } = useLoaderData();
  console.log(dataAboutShifts)

  const years = dataAboutShifts.filter((ele) => ele.year === year)
  // console.log(years)

  const daysOfShifts = years.map(({days}) => {
    let dates = days.map(({date,shifts}) => {
      return{
        date,shifts
      }
    })
    return {dates}
  })
  
  // console.log(shiftDays[0].dates[0].shifts[0].shift_type.shiftType)


    return (
        <div>
            <h1>Sign Up</h1>
            <Formik
                initialValues={{
                    firstName: "",
                    lastName: "",
                    email: "",
                    phone: "",
                    checked: []
                }}

                onSubmit={async (values, { setSubmitting,resetForm }) => {
                    // console.log(setupTimes);
                    console.log(values);
                    await sleep(500);
                    alert(JSON.stringify(values, null, 2));
                    const sendNewVolunteer = async () => {
                        let bodyObj = {
                            fname: values.firstName,
                            lname: values.lastName,
                            email: values.email,
                            phone: values.phone,
                            checked: values.checked
                        };

                        const { data } = await axios.post(
                            "/api/newVolunteer",
                            bodyObj
                            );
                            if (!data.error) {
                            } else {
                                console.log(data.error);
                            }
                            
                        };
                        setSubmitting(false);
                        resetForm({
                            firstName: "",
                            lastName: "",
                            email: "",
                            phone: "",
                            checked: []
                        })

                    sendNewVolunteer();
                }}
            >


                {({ values,errors,touched,handleBlur,handleChange,handleSubmit,handleReset,isSubmitting,}) => (
                    <Form onSubmit={handleSubmit}>
                        <input
                            type="firstName"
                            name="firstName"
                            onChange={handleChange}
                            onBlur={handleBlur}
                            onReset={handleReset}
                            value={values.firstName}
                            placeholder="first name"
                        />
                        <input
                            type="lastName"
                            name="lastName"
                            onChange={handleChange}
                            onBlur={handleBlur}
                            value={values.lastName}
                            placeholder="last name"
                        />
                        <input
                            type="email"
                            name="email"
                            onChange={handleChange}
                            onBlur={handleBlur}
                            value={values.email}
                            placeholder="email"
                        />
                        <input
                            type="phone"
                            name="phone"
                            onChange={handleChange}
                            onBlur={handleBlur}
                            value={values.phone}
                            placeholder="phone"
                        />
                        {/* 
            Multiple checkboxes with the same name attribute, but different
            value attributes will be considered a "checkbox group". Formik will automagically
            bind the checked values to a single array for your benefit. All the add and remove
            logic will be taken care of for you.
          */}
                        <div id="checkbox-group">Checked</div>
                        <ul role="group" aria-labelledby="checkbox-group">
                            <SetupDates dates={daysOfShifts}/>
                            {/* <component={SetupDates} dates={daysOfShifts}/> */}
                        </ul>

                        <button type="submit">Submit</button>
                    </Form>
                )}
            </Formik>
        </div>
    );
};
export default Volunteers;
