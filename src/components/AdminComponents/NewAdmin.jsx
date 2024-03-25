import React from "react";
import Admin from "../../header-bar/Admin";
import { Formik, Field, Form } from "formik";
import { useState } from "react";
import axios from "axios";

const NewAdmin = () => {
    const [added, setAdded] = useState([]);
    const [removed, setRemoved] = useState([]);

    return (
        <>
            <div className="mt-32 min-h-[75vh] desktop:hidden phone:flex flex-col">
                <Admin />
                <div className="flex flex-col items-center p-8">
                    <div className="flex flex-col justify-center w-full rounded-md p-6 bg-beigeGreen-200">
                        <div className="flex justify-center text-xl font-semibold">
                            Add an Admin
                        </div>
                        <Formik
                            initialValues={{
                                email: "",
                            }}
                            onSubmit={async (values, { resetForm }) => {
                                const sendNewAdmin = async () => {
                                    let bodyObj = {
                                        email: values.email,
                                    };

                                    const { data } = await axios.post(
                                        "/api/newAdmin",
                                        bodyObj
                                    );
                                    if (!data.error) {
                                        setAdded(data);
                                    } else {
                                        console.log(data.error);
                                    }
                                };
                                sendNewAdmin();
                                resetForm({
                                    email: "",
                                });
                            }}
                        >
                            {({ values, handleSubmit }) => (
                                <Form
                                    onSubmit={handleSubmit}
                                    className="flex justify-center flex-row p-4"
                                >
                                    <Field
                                        id="newAdminEmail"
                                        name="email"
                                        placeholder="Email"
                                        className="border-gray-300 border-y-2 border-l-2 hover:border-2 hover:border-black rounded-l-lg pl-4 focus:border-2 focus:border-black w-48"
                                    />
                                    <button
                                        type="submit"
                                        className="btn bg-gray-300 border-gray-300 border-y-2 border-r-2  hover:border-y-2 hover:border-gray-400 hover:bg-gray-400 rounded-l-none rounded-r-lg"
                                    >
                                        Submit
                                    </button>
                                </Form>
                            )}
                        </Formik>

                        {added.length === 0 ? (
                            <></>
                        ) : (
                            <div className="flex justify-center text-third">
                                {added.fname} {added.lname} was added as an
                                Admin
                            </div>
                        )}
                        <div className="flex justify-center py-2 text-xl font-semibold">
                            Remove an Admin
                        </div>
                        <Formik
                            initialValues={{
                                email: "",
                            }}
                            onSubmit={async (values, { resetForm }) => {
                                const sendNewAdmin = async () => {
                                    let bodyObj = {
                                        email: values.email,
                                    };

                                    const { data } = await axios.post(
                                        "/api/removeAdmin",
                                        bodyObj
                                    );
                                    if (!data.error) {
                                        setRemoved(data);
                                    } else {
                                        console.log(data.error);
                                    }
                                };
                                sendNewAdmin();
                                resetForm({
                                    email: "",
                                });
                            }}
                        >
                            {({ values, handleSubmit }) => (
                                <Form
                                    onSubmit={handleSubmit}
                                    className="flex justify-center flex-row p-4  "
                                >
                                    <Field
                                        id="removeAdminEmail"
                                        name="email"
                                        placeholder="Email"
                                        className="border-gray-300 border-y-2 border-l-2 hover:border-2 hover:border-black rounded-l-lg pl-4 focus:border-2 focus:border-black w-48"
                                    />
                                    <button
                                        type="submit"
                                        className="btn border-y-2 border-r-2 border-gray-300 bg-gray-300 hover:border-y-2 hover:border-gray-400 hover:bg-gray-400 rounded-l-none rounded-r-lg"
                                    >
                                        Submit
                                    </button>
                                </Form>
                            )}
                        </Formik>
                        {removed.length === 0 ? (
                            <></>
                        ) : (
                            <div className="flex justify-center text-third">
                                {removed.fname} {removed.lname} was removed as
                                an Admin
                            </div>
                        )}
                    </div>
                </div>
            </div>
            <div className="mt-32 min-h-[75vh] phone:hidden desktop:flex flex-row">
                <Admin />
                <div className="flex flex-col items-center ml-[400px] w-[400px]">
                    <div className="flex flex-col justify-center rounded-md pt-2 pb-6 border-2 border-black">
                        <div className="flex justify-center py-2 text-xl">
                            Add an Admin
                        </div>
                        <Formik
                            initialValues={{
                                email: "",
                            }}
                            onSubmit={async (values, { resetForm }) => {
                                const sendNewAdmin = async () => {
                                    let bodyObj = {
                                        email: values.email,
                                    };

                                    const { data } = await axios.post(
                                        "/api/newAdmin",
                                        bodyObj
                                    );
                                    if (!data.error) {
                                        setAdded(data);
                                    } else {
                                        console.log(data.error);
                                    }
                                };
                                sendNewAdmin();
                                resetForm({
                                    email: "",
                                });
                            }}
                        >
                            {({ values, handleSubmit }) => (
                                <Form
                                    onSubmit={handleSubmit}
                                    className="flex justify-center flex-row p-4"
                                >
                                    <Field
                                        id="newAdminEmail"
                                        name="email"
                                        placeholder="Email"
                                        className="border-gray-300 border-y-2 border-l-2 hover:border-2 hover:border-black rounded-l-lg pl-4 focus:border-2 focus:border-black w-48"
                                    />
                                    <button
                                        type="submit"
                                        className="btn bg-gray-300 border-gray-300 border-y-2 border-r-2  hover:border-y-2 hover:border-gray-400 hover:bg-gray-400 rounded-l-none rounded-r-lg"
                                    >
                                        Submit
                                    </button>
                                </Form>
                            )}
                        </Formik>

                        {added.length === 0 ? (
                            <></>
                        ) : (
                            <div className="flex justify-center text-third">
                                {added.fname} {added.lname} was added as an
                                Admin
                            </div>
                        )}
                        <div className="flex justify-center py-2 text-xl">
                            Remove an Admin
                        </div>
                        <Formik
                            initialValues={{
                                email: "",
                            }}
                            onSubmit={async (values, { resetForm }) => {
                                const sendNewAdmin = async () => {
                                    let bodyObj = {
                                        email: values.email,
                                    };

                                    const { data } = await axios.post(
                                        "/api/removeAdmin",
                                        bodyObj
                                    );
                                    if (!data.error) {
                                        setRemoved(data);
                                    } else {
                                        console.log(data.error);
                                    }
                                };
                                sendNewAdmin();
                                resetForm({
                                    email: "",
                                });
                            }}
                        >
                            {({ values, handleSubmit }) => (
                                <Form
                                    onSubmit={handleSubmit}
                                    className="flex justify-center flex-row p-4  "
                                >
                                    <Field
                                        id="removeAdminEmail"
                                        name="email"
                                        placeholder="Email"
                                        className="border-gray-300 border-y-2 border-l-2 hover:border-2 hover:border-black rounded-l-lg pl-4 focus:border-2 focus:border-black w-48"
                                    />
                                    <button
                                        type="submit"
                                        className="btn border-y-2 border-r-2 border-gray-300 bg-gray-300 hover:border-y-2 hover:border-gray-400 hover:bg-gray-400 rounded-l-none rounded-r-lg"
                                    >
                                        Submit
                                    </button>
                                </Form>
                            )}
                        </Formik>
                        {removed.length === 0 ? (
                            <></>
                        ) : (
                            <div className="flex justify-center text-third">
                                {removed.fname} {removed.lname} was removed as
                                an Admin
                            </div>
                        )}
                    </div>
                </div>
            </div>
        </>
    );
};

export default NewAdmin;
