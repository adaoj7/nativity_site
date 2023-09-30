import { useState,useEffect } from "react";
import axios from "axios";
import { useLoaderData } from "react-router-dom";
import React from "react";
import { Formik, Field, Form } from "formik";
import Dates from "./Dates";
import * as Yup from 'yup'
import { useSelector } from "react-redux";


const phoneRegExp = /^(\+?\d{0,4})?\s?-?\s?(\(?\d{3}\)?)\s?-?\s?(\(?\d{3}\)?)\s?-?\s?(\(?\d{4}\)?)?$/


const SignupSchema = Yup.object().shape({
    checked: Yup.array().min(1)
  });


const sleep = (ms) => new Promise((r) => setTimeout(r, ms));

const Host = () => {

    const fname = useSelector((state) => state.fname)
    const lname = useSelector((state) => state.lname)
    const userId = useSelector((state) => state.userId)
    const [data,setData] = useState([])

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
  
  const userShift = async () => {
        
    const {data} = await axios.post('/api/userShifts', {userId})
    // console.log(res)
    setData(data)
    }
    useEffect(() => {
    userShift()
    },[])

    const userShiftId = data.map((ele) => ele.shiftId)
    console.log(userShiftId)


    return (
        <div>
            <h3>Hello, {fname} {lname}</h3>
            <Formik
                initialValues={{
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
                            userId: userId,
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
                            checked: []
                        })

                    sendNewVolunteer();
                    location.replace('/volunteer/myShifts')
                }}
            >


                {({ errors,handleSubmit }) => (
                    <Form onSubmit={handleSubmit}>
                        <h3 id="checkbox-group">Host Shifts:</h3>
                        <ul role="group" aria-labelledby="checkbox-group">
                            <Dates dates={daysOfShifts} userShifts={userShiftId}/>
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