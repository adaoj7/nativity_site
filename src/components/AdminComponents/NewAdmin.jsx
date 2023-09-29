import React from "react";
import Admin from "../../header-bar/Admin";
import { Formik, Field, Form } from "formik";
import { useState } from "react";
import axios from "axios";

const NewAdmin = () => {

    const [added,setAdded] = useState([])
    const [removed,setRemoved] = useState([])

    return (
        <>
            <Admin />
            <div>Add an Admin</div>
            <Formik
                initialValues={{
                    email: "",
                }}
                onSubmit={async (values,{resetForm}) => {
                    const sendNewAdmin = async () => {
                        let bodyObj = {
                            email: values.email,
                        };

                        const { data } = await axios.post(
                            "/api/newAdmin",
                            bodyObj
                        );
                        if (!data.error) {
                            setAdded(data)
                        } else {
                            console.log(data.error);
                        }
                    };
                    sendNewAdmin();
                    resetForm({
                        email: ''
                    })
                }}
            >
                {({ values, handleSubmit }) => (
                    <Form onSubmit={handleSubmit}>
                        <label htmlFor="newAdminEmail">Email</label>
                        <Field
                            id="newAdminEmail"
                            name="email"
                            placeholder="Email"
                        />
                        <button type="submit">Submit</button>
                    </Form>
                )}
            </Formik>


            {added.length === 0 ? <></> : <>{added.fname} {added.lname} was added as an Admin</>}
            <div>Remove an Admin</div>
            <Formik
                initialValues={{
                    email: "",
                }}
                onSubmit={async (values,{resetForm}) => {
                    const sendNewAdmin = async () => {
                        let bodyObj = {
                            email: values.email,
                        };

                        const { data } = await axios.post(
                            "/api/removeAdmin",
                            bodyObj
                        );
                        if (!data.error) {
                            setRemoved(data)
                        } else {
                            console.log(data.error);
                        }
                    };
                    sendNewAdmin();
                    resetForm({
                        email: ''
                    })
                }}
            >
                {({ values, handleSubmit }) => (
                    <Form onSubmit={handleSubmit}>
                        <label htmlFor="removeAdminEmail">Email</label>
                        <Field
                            id="removeAdminEmail"
                            name="email"
                            placeholder="Email"
                        />
                        <button type="submit">Submit</button>
                    </Form>
                )}
            </Formik>
            {removed.length === 0 ? <></> : <>{removed.fname} {removed.lname} was removed as an Admin</>}
        </>
    );
};

export default NewAdmin;
