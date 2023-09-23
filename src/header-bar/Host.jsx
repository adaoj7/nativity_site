import { useState } from "react";
import axios from "axios";
import { useLoaderData } from "react-router-dom";
import React from "react";
import { Formik, Field, Form } from "formik";
import SetupDates from "../components/SetupDates";
import * as Yup from 'yup'


const phoneRegExp = /^(\+?\d{0,4})?\s?-?\s?(\(?\d{3}\)?)\s?-?\s?(\(?\d{3}\)?)\s?-?\s?(\(?\d{4}\)?)?$/


const SignupSchema = Yup.object().shape({
    firstName: Yup.string()
      .min(2, 'Too Short!')
      .max(50, 'Too Long!')
      .required('Required'),
    lastName: Yup.string()
      .min(2, 'Too Short!')
      .max(50, 'Too Long!')
      .required('Required'),
    email: Yup.string().email('Invalid email').required('Required'),
    phone: Yup.string().matches(phoneRegExp, 'Phone number is not valid'),
    checked: Yup.array().min(1)
  });


const sleep = (ms) => new Promise((r) => setTimeout(r, ms));

const Host = () => {
  const volunteerYear = new Date
  const year = volunteerYear.getFullYear()

  const { dataAboutShifts } = useLoaderData();
//   console.log(dataAboutShifts)

  const years = dataAboutShifts.filter((ele) => ele.year === year)

  const daysOfShifts = years.map(({days}) => {
    let dates = days.map(({date,shifts}) => {
      return{
        date,shifts
      }
    })
    return {dates}
  })
  


    return (
        <div>
            <h1>Host Form</h1>
            <Formik
                initialValues={{
                    firstName: "",
                    lastName: "",
                    email: "",
                    phone: "",
                    checked: []
                }}
                validationSchema={SignupSchema}
                onSubmit={async (values, { setSubmitting,resetForm }) => {
                    // console.log(setupTimes);
                    console.log(values);
                    await sleep(500);
                    // alert(JSON.stringify(values, null, 2));
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
                    // location.replace(location.href)
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
                        {errors.firstName && touched.firstName ? (<div>{errors.firstName}</div>) : null}
                        <input
                            type="lastName"
                            name="lastName"
                            onChange={handleChange}
                            onBlur={handleBlur}
                            value={values.lastName}
                            placeholder="last name"
                        />
                        {errors.lastName && touched.lastName ? (<div>{errors.lastName}</div>) : null}
                        <input
                            type="email"
                            name="email"
                            onChange={handleChange}
                            onBlur={handleBlur}
                            value={values.email}
                            placeholder="email"
                        />
                        {errors.email && touched.email ? (<div>{errors.email}</div>) : null}
                        <input
                            type="phone"
                            name="phone"
                            onChange={handleChange}
                            onBlur={handleBlur}
                            value={values.phone}
                            placeholder="phone"
                        />
                        {errors.phone && touched.phone ? (<div>{errors.phone}</div>) : null}
                       
                        <h3 id="checkbox-group">Shifts:</h3>
                        <ul role="group" aria-labelledby="checkbox-group">
                            <SetupDates dates={daysOfShifts}/>
                            {/* <component={SetupDates} dates={daysOfShifts}/> */}
                        </ul>
                        {errors.checked && <div>{'Must at least check one availability'}</div>}
                        <button type="submit">Submit</button>
                    </Form>
                )}
            </Formik>
        </div>
    );
};
export default Host;