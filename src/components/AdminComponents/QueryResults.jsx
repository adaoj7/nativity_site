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
    }

    return (
        <>
            <ul>{names}</ul>
            <ul>{emails}</ul>
            <ul>{phones}</ul>
            {emailList.length ? (
                <button
                    onClick={() =>
                        (window.location = `mailto:?cc=${emailString}`)
                    }
                >
                    Send to these emails
                </button>
            ) : null}
            {console.log(emailString)}
        </>
    );
};
export default QueryResults;
