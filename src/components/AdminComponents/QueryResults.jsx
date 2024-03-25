import React from "react";

const QueryResults = ({ values }) => {
    // console.log(values)
    const { volunteersAvail, name, email, phone } = values;
    let names = [];
    let emails = [];
    let phones = [];
    let emailString = "";
    let emailList = [];

    if (name)
        names = volunteersAvail.map((ele, i) => {
            // console.log(ele.email)
            return <p key={i}>{`${ele.fname} ${ele.lname},`}</p>;
        });

    if (email) {
        emails = volunteersAvail.map((ele, i) => {
            // console.log(ele.email)
            return <p key={i}>{`${ele.email};`}</p>;
        });
    }

    if (phone) {
        phones = volunteersAvail.map((ele, i) => {
            // console.log(ele.email)
            return <p key={i}>{`${ele.phone}`}</p>;
        });
    }

    if (email) {
        emailList = volunteersAvail.map((ele, i) => {
            return (emailString += `${ele.email},`);
        });
        emailString = emailString.slice(0, -1);
    }
    return (
        <>
            {/* Mobile version */}
            <div className="desktop:hidden phone:flex flex-col px-8 my-4 text-sm">
                <div className="flex flex-row justify-between">
                    <div className="">
                        {emailList.length ? (
                            <div className="text-xl font-semibold">Names:</div>
                        ) : null}
                        <ul className="mb-4">{names}</ul>
                    </div>
                    <div className="mr-10">
                        {emailList.length ? (
                            <div className="text-xl font-semibold">Phone:</div>
                        ) : null}
                        <ul className="mb-4">{phones}</ul>
                    </div>
                </div>
                <div className="">
                    {emailList.length ? (
                        <div className="text-xl font-semibold">Emails:</div>
                    ) : null}
                    <ul className="mb-4">{emails}</ul>
                </div>
                <div>
                    {emailList.length ? (
                        <div className="flex justify-center my-8">
                            <button
                                className="btn bg-gray-300 hover:bg-gray-400"
                                onClick={() =>
                                    (window.location = `mailto:?cc=${emailString}`)
                                }
                            >
                                Send to these emails
                            </button>
                        </div>
                    ) : null}
                    {/* {emailList.length ? (div) : null} */}
                </div>
            </div>
            {/* Desktop version */}
            <div className="phone:hidden desktop:grid grid-cols-3 gap-4 ml-10 mt-10">
                <div>
                    {emailList.length ? (
                        <div className="text-xl font-semibold">Names:</div>
                    ) : null}
                    <ul>{names}</ul>
                </div>
                <div className="flex-col mr-4">
                    {emailList.length ? (
                        <div className="text-xl font-semibold">Emails:</div>
                    ) : null}
                    <ul className="mb-4">{emails}</ul>
                    {emailList.length ? (
                        <button
                            className="btn btn-sm bg-gray-300 hover:bg-gray-400"
                            onClick={() =>
                                (window.location = `mailto:?cc=${emailString}`)
                            }
                        >
                            Send to these emails
                        </button>
                    ) : null}
                </div>
                <div>
                    {emailList.length ? (
                        <div className="text-xl font-semibold">Phone:</div>
                    ) : null}
                    <ul>{phones}</ul>
                </div>
            </div>
        </>
    );
};
export default QueryResults;
