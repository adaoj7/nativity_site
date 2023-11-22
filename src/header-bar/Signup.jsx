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
    <div className='flex flex-col mt-24'>
        <p className='flex justify-center'>Signing up will allow you to sign up and view volunteer shifts and to register nativities.</p>
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
                location.replace('/')
            }}
        >
            {({
                values, handleChange,handleBlur
            }) => (
                <div className='flex justify-center'>

                <Form className='flex justify-center flex-col border-2 rounded-md m-4 p-4 py-8 border-black w-[350px] h-[460px]'>
                    <Field className='border-2 border-black rounded-md p-2 m-2' type='text' name='fname' onChange={handleChange} onBlur={handleBlur} required={true} placeholder='First Name' value={values.fname}/>
                    <Field className='border-2 border-black rounded-md p-2 m-2' type='text' name='lname' onChange={handleChange} onBlur={handleBlur} required={true} placeholder='Last Name' value={values.lname}/>
                    <Field className='border-2 border-black rounded-md p-2 m-2' type='text' name='phone' onChange={handleChange} onBlur={handleBlur} required={true} placeholder='Phone' value={values.phone}/>
                    <Field className='border-2 border-black rounded-md p-2 m-2' type='text' name='church' onChange={handleChange} onBlur={handleBlur} required={true} placeholder='Church Affiliation' value={values.church}/>
                    <Field
                        className='border-2 border-black rounded-md p-2 m-2'
                        type="text"
                        name='email'
                        onChange={handleChange}
                        onBlur={handleBlur}
                        required={true}
                        placeholder="Email"
                        value={values.email}
                        />
                    <Field
                        className='border-2 border-black rounded-md p-2 m-2'
                        type={showPassword ? "text" : "password"}
                        name='password'
                        onChange={handleChange}
                        onBlur={handleBlur}
                        required={true}
                        placeholder="Password"
                        value={values.password}
                        />
                    <button type='button' onClick={togglePassword} className='hover:underline'>Show Password</button>
                    <div className='flex justify-center'>

                    <button type='submit' className='hover:underline font-semibold flex bg-second hover:bg-white justify-center mx-20 my-2 rounded-full p-2 border-[1px] border-black w-[190px]'>Submit</button>
                    </div>
                </Form>
            </div>
            )}
        </Formik>
    </div>
  )
}

export default Signup