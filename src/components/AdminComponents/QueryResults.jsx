import React from 'react'

const QueryResults = ({values}) => {
    console.log(values)
    let volunteers = []
    if (values.length > 0){
        
        volunteers = values.map((ele) => {
            console.log(ele.email)
            return (
                <ul>
                    <p>{`${ele.fname} ${!ele.name ? ele.lname: null} ${ele.email}`}</p>
                </ul>
        )
    }
    )}
    return(
        <>
        {volunteers}
        </>
    )
}
export default QueryResults