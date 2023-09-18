import { useState } from "react";
import axios from "axios";
import HostTimes from "../components/HostTimes";
import { useLoaderData } from "react-router-dom";
import React from "react";
import { Formik, Field, Form } from "formik";

const sleep = (ms) => new Promise((r) => setTimeout(r, ms));

const Volunteers = () => {
    const { shift } = useLoaderData();
    const setupTimes = shift.map(({ shiftId, dateId, timeRange, typeId }) => {
        return {
            id: shiftId,
            dateId,
            timeRange,
            typeId,
            isVolunteer: false,
        };
    });
    console.log(setupTimes);
    
    
    return (
        <div>
            <h1>Sign Up</h1>
            <Formik
                initialValues={{
                    firstName: "",
                    lastName: "",
                    email: "",
                    phone: "",
                    setup: setupTimes,
                }}
                onSubmit={async (values, { setSubmitting }) => {
                    console.log(setupTimes);
                    console.log(values);
                    await sleep(500);
                    alert(JSON.stringify(values, null, 2));
                    setSubmitting(false);
                    const sendNewVolunteer = async () => {
                        let bodyObj = {
                            fname: values.firstName,
                            lname: values.lastName,
                            email: values.email,
                            phone: values.phone,
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

                    sendNewVolunteer();
                }}
            >


                {({
                    values,
                    errors,
                    touched,
                    handleBlur,
                    handleChange,
                    handleSubmit,
                    handleReset,
                    isSubmitting,
                }) => (
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
                            {`${values.setup[1].dateId}`}
                            <span>
                                <label>
                                    <Field
                                        type="checkbox"
                                        name="checked"
                                        value="One"
                                    />
                                    {`${values.setup[0].timeRange}`}
                                </label>
                            </span>
                            <span>
                                <label>
                                    <Field
                                        type="checkbox"
                                        name="checked"
                                        value="Two"
                                    />
                                    {`${values.setup[1].timeRange}`}
                                </label>
                            </span>
                            <span>
                                <label>
                                    <Field
                                        type="checkbox"
                                        name="checked"
                                        value="Three"
                                    />
                                    {`${values.setup[2].timeRange}`}
                                </label>
                            </span>
                            <span>
                                <label>
                                    <Field
                                        type="checkbox"
                                        name="checked"
                                        value="Four"
                                    />
                                    {`${values.setup[3].timeRange}`}
                                </label>
                            </span>
                        </ul>

                        <ul role="group" aria-labelledby="checkbox-group">
                            {`${values.setup[0].shiftDate}`}
                            <span>
                                <label>
                                    <Field
                                        type="checkbox"
                                        name="checked"
                                        value="O"
                                    />
                                    {`${values.setup[0].shiftTimeRange}`}
                                </label>
                            </span>
                            <span>
                                <label>
                                    <Field
                                        type="checkbox"
                                        name="checked"
                                        value="Two"
                                    />
                                    {`${values.setup[1].shiftTimeRange}`}
                                </label>
                            </span>
                            <span>
                                <label>
                                    <Field
                                        type="checkbox"
                                        name="checked"
                                        value="Three"
                                    />
                                    {`${values.setup[2].shiftTimeRange}`}
                                </label>
                            </span>
                            <span>
                                <label>
                                    <Field
                                        type="checkbox"
                                        name="checked"
                                        value="Four"
                                    />
                                    {`${values.setup[3].shiftTimeRange}`}
                                </label>
                            </span>
                        </ul>

                        <ul role="group" aria-labelledby="checkbox-group">
                            {`${values.setup[0].shiftDate}`}
                            <span>
                                <label>
                                    <Field
                                        type="checkbox"
                                        name="checked"
                                        value="One"
                                    />
                                    {`${values.setup[0].shiftTimeRange}`}
                                </label>
                            </span>
                            <span>
                                <label>
                                    <Field
                                        type="checkbox"
                                        name="checked"
                                        value="Two"
                                    />
                                    {`${values.setup[1].shiftTimeRange}`}
                                </label>
                            </span>
                            <span>
                                <label>
                                    <Field
                                        type="checkbox"
                                        name="checked"
                                        value="Three"
                                    />
                                    {`${values.setup[2].shiftTimeRange}`}
                                </label>
                            </span>
                            <span>
                                <label>
                                    <Field
                                        type="checkbox"
                                        name="checked"
                                        value="Four"
                                    />
                                    {`${values.setup[3].shiftTimeRange}`}
                                </label>
                            </span>
                        </ul>

                        <ul role="group" aria-labelledby="checkbox-group">
                            {`${values.setup[0].shiftDate}`}
                            <span>
                                <label>
                                    <Field
                                        type="checkbox"
                                        name="checked"
                                        value="One"
                                    />
                                    {`${values.setup[0].shiftTimeRange}`}
                                </label>
                            </span>
                            <span>
                                <label>
                                    <Field
                                        type="checkbox"
                                        name="checked"
                                        value="Two"
                                    />
                                    {`${values.setup[1].shiftTimeRange}`}
                                </label>
                            </span>
                            <span>
                                <label>
                                    <Field
                                        type="checkbox"
                                        name="checked"
                                        value="Three"
                                    />
                                    {`${values.setup[2].shiftTimeRange}`}
                                </label>
                            </span>
                            <span>
                                <label>
                                    <Field
                                        type="checkbox"
                                        name="checked"
                                        value="Four"
                                    />
                                    {`${values.setup[3].shiftTimeRange}`}
                                </label>
                            </span>
                        </ul>

                        <button type="submit">Submit</button>
                    </Form>
                )}
            </Formik>
        </div>
    );
};
export default Volunteers;
// const Volunteers = () => {
//   const [fname, setFname] = useState('')
//   const [lname, setLname] = useState('')
//   const [email, setEmail] = useState('')
//   const [phone, setPhone] = useState('')

//   const { allShifts } = useLoaderData()

//   const sendNewVolunteer = async () => {

//     let bodyObj = {
//       fname,
//       lname,
//       email,
//       phone
//     }

//     const {data} = await axios.post('/api/newVolunteer', bodyObj)
//     if(!data.error){}
//   }

//   const submit = (e) => {
//     e.preventDefault()
//     sendNewVolunteer()
//     setFname('')
//     setLname('')
//     setEmail('')
//     setPhone('')
//   }

//   return (
//     <>
//     <form onSubmit={submit}>
//       <div>
//         <input type="text" placeholder='First name' value={fname} onChange={(e) => setFname(e.target.value)}/>
//         <input type="text" placeholder='Last name' value={lname} onChange={(e) => setLname(e.target.value)}/>
//         <br />
//         <input type="text" placeholder='email' value={email} onChange={(e) => setEmail(e.target.value)}/>
//         <input type="tel" placeholder='phone number' value={phone} onChange={(e) => setPhone(e.target.value)}/>
//         <br />
//       </div>
//       <div>
//         <HostTimes/>
//         {/* <div>{console.log(allShifts)}</div> */}
//       </div>
//       <button type='submit'>Submit`</button>
//     </form>
//     </>
//   )
// }

// export default Volunteers
