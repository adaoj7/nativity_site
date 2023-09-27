import React from "react";
import { useState } from "react";
import { Formik, Field, Form } from "formik";
import axios from "axios";
import Signup from './Signup'
import { NavLink } from "react-router-dom";
import App from "../App";
import { useDispatch } from "react-redux";


const Login = () => {
    // const [email, setEmail] = useState("");
    // const [password, setPassword] = useState("");
    const [showPassword, setShowPassword] = useState(false);
    const dispatch = useDispatch()

    const togglePassword = (e) => {
        e.preventDefault();
        setShowPassword(!showPassword);
    };


    return (
      <>
      <Formik
            initialValues={{
                email: "",
                password: "",
            }}
            onSubmit={async (values, { setSubmitting, resetForm }) => {
                // console.log(setupTimes);
                console.log(values);
                // await sleep(500);
                // alert(JSON.stringify(values, null, 2));
                const sendNewVolunteer = async () => {
                    let bodyObj = {
                        email: values.email,
                        password: values.password,
                    };

                    const { data } = await axios.post(
                        "/api/login",
                        bodyObj
                    );
                    console.log(data)
                    dispatch({type: 'LOGIN', payload: data})
                    if (!data.error) {
                    } else {
                        console.log(data.error);
                    }
                };
                
                setSubmitting(false);
                resetForm({
                    email: "",
                    phone: "",
                });
                sendNewVolunteer();
                // location.replace('/home')
            }}
        >
            {({
                values, handleChange,handleBlur
            }) => (
                <Form>
                    <Field
                        type="text"
                        name='email'
                        onChange={handleChange}
                        onBlur={handleBlur}
                        required={true}
                        placeholder="Email"
                        value={values.email}
                    />
                    <Field
                        type={showPassword ? "text" : "password"}
                        name='password'
                        onChange={handleChange}
                        onBlur={handleBlur}
                        required={true}
                        placeholder="Password"
                        value={values.password}
                    />
                    <button type='button'onClick={togglePassword}>Show Password</button>
                    <button type='submit'>Submit</button>
                </Form>
            )}
        </Formik>
        <NavLink to='/signup'>Signup</NavLink>
        </>
    );
  }
export default Login;
