import React from 'react'

const QueryResults = ({values}) => {
    // console.log(values)
    const {volunteersAvail,name,email,phone} = values
    let names = []
    let emails = []
    let phones = []
    
        
        if(name)
        names = volunteersAvail.map((ele,i) => {
        // console.log(ele.email)
        return (
                <p key={i}>{`${ele.fname} ${ele.lname},`}</p>
        )})

        if(email)
        emails = volunteersAvail.map((ele,i) => {
        // console.log(ele.email)
        return (
                <p key={i}>{`${ele.email};`}</p>
        )})

        if(phone)
        phones = volunteersAvail.map((ele,i) => {
        // console.log(ele.email)
        return (
                <p key={i}>{`${ele.phone}`}</p>
        )})
    
    return(
        <>
        <ul>
            {names}
        </ul>
        <ul>
            {emails}
        </ul>
        <ul>
            {phones}
        </ul>
        </>

    )
}
export default QueryResults