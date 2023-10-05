import React from 'react'
import { useState } from 'react';
import { Formik,Form,Field, } from 'formik';
import axios from 'axios';
import { useDispatch } from 'react-redux';
import NativityLogo from '../components/Elements/NativityLogo';

const Signup = () => {
    const [showPassword, setShowPassword] = useState(false);
    const dispatch = useDispatch()

    const togglePassword = (e) => {
        e.preventDefault();
        setShowPassword(!showPassword);
    };
  
    return (
    <div className='mt-24'>
    <img src=''/>
      <Formik
            initialValues={{
                fname: '',
                lname: '',
                phone: '',
                church: '',
                email: '',
                password: '',
            }}
            onSubmit={async (values, { setSubmitting, resetForm }) => {
                // console.log(setupTimes);
                console.log(values);
                // await sleep(500);
                // alert(JSON.stringify(values, null, 2));
                const sendNewVolunteer = async () => {
                    let bodyObj = {
                        fname: values.fname,
                        lname: values.lname,
                        phone: values.phone,
                        church: values.church,
                        email: values.email,
                        password: values.password,
                    };

                    const { data } = await axios.post(
                        "/api/register",
                        bodyObj
                    );
                    dispatch({type: 'LOGIN', payload: data})
                    if (!data.error) {
                    } else {
                        console.log(data.error);
                    }
                };
                console.log(values.fname)
                console.log('User created')
                setSubmitting(false);
                resetForm({
                    email: "",
                    phone: "",
                });

                sendNewVolunteer();
                location.replace('/home')
            }}
        >
            {({
                values, handleChange,handleBlur
            }) => (
                <Form>
                    <Field type='text' name='fname' onChange={handleChange} onBlur={handleBlur} required={true} placeholder='First Name' value={values.fname}/>
                    <Field type='text' name='lname' onChange={handleChange} onBlur={handleBlur} required={true} placeholder='Last Name' value={values.lname}/>
                    <Field type='text' name='phone' onChange={handleChange} onBlur={handleBlur} required={true} placeholder='Phone' value={values.phone}/>
                    <Field type='text' name='church' onChange={handleChange} onBlur={handleBlur} required={true} placeholder='Church' value={values.church}/>
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
                    <button type='button' onClick={togglePassword}>Show Password</button>
                    <button type='submit'>Submit</button>
                </Form>
            )}
        </Formik>
    </div>
  )
}

export default Signup