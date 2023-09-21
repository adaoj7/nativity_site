import React from 'react'
import { Formik, Field, Form } from 'formik'
import axios from 'axios'

const AdminLookup = () => {
  
  return (
    <div>
    <h1>Search shifts</h1>
    <Formik
      initialValues={{
        shiftDate: '',
        shiftTime: '',
        checked: []
      }}
      onSubmit={async (values) => {
        // alert(JSON.stringify(values, null, 2));
        // console.log(values)

        const sendAdminQuery = async () => {
            let bodyObj = {
                shiftDate: values.shiftDate,
                shiftTime: values.shiftTime,
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
      <Form>
        <label htmlFor="shiftDate">Shift Date</label>
        <Field id="shiftDate" name="shiftDate" placeholder="11/27" />
        
        <label htmlFor="shiftTime">Shift Time</label>
        <Field id="shiftTime" name="shiftTime" placeholder="10 AM - 12 PM" />

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
    </Formik>
  </div>
  )
}

export default AdminLookup