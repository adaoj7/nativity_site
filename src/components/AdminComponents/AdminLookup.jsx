﻿import React from 'react'
import { Formik, Field, Form } from 'formik'
import axios from 'axios'
import { useLoaderData } from 'react-router-dom'
import DateOptions from './DateOptions'
import Admin from '../../header-bar/Admin.jsx'
import ShiftOptions from './ShiftOptions'

const AdminLookup = () => {
    const volunteerYear = new Date
    const year = volunteerYear.getFullYear()
  
    const { dataAboutShifts } = useLoaderData();
    // console.log(dataAboutShifts)
  
    const years = dataAboutShifts.filter((ele) => ele.year === year)
  
    const daysOfShifts = years.map(({days}) => {
      let dates = days.map(({date,shifts}) => {
        return{
          date,shifts
        }
      })
      return {dates}
    })
    // console.log(daysOfShifts)

    return (
        <div>
        <Admin/>
          <h1>Search shifts</h1>
          <Formik
            initialValues={{
              shiftDate: '',
              shiftTime: '',
              date:'',
              time:'',
              checked: []
            }}
            onSubmit={async (values) => {
              // alert(JSON.stringify(values, null, 2));
              console.log(values)
      
              const sendAdminQuery = async () => {
                  let bodyObj = {
                      shiftDate: values.shiftDate,
                      shiftTime: values.shiftTime,
                      date: values.date,
                      time: values.time,
                      checked: values.checked
                  };
      
                  const { data } = await axios.post(
                      "/api/adminQuery",
                      bodyObj
                      );
                      console.log(data)
                      if (!data.error) {
                      } else {
                          console.log(data.error);
                      }
                      
              };
              sendAdminQuery()
            }}
          >
             {({ values }) => (
            <Form>
              
                
                <label>Shift Date</label>
                <DateOptions dates={daysOfShifts}/>

                <ShiftOptions shifts={values} />
                
                <div id="checkbox-group">Show:</div>
                  <div role="group" aria-labelledby="checkbox-group">
                    <label>
                      <Field type="checkbox" name="checked" value="Name" />
                      Name
                    </label>
                    <label>
                      <Field type="checkbox" name="checked" value="Email" />
                      Email
                    </label>
                    <label>
                      <Field type="checkbox" name="checked" value="Phone" />
                      Phone
                    </label>
                  </div>
      
              <button type="submit">Submit</button>
            </Form>
             )}
          </Formik>
        </div>
  )
}

export default AdminLookup