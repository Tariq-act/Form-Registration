import React from 'react';
import { PersonalDetails } from './PersonalDetails';
import { Formik, Form } from 'formik';
import { ContactDetails } from './ContactDetails';
import { AddressDetails } from './AddressDetails';

const initialValues = {
  name: '',
  date: '',
  sex: '',
  mobile: '',
  govId: {
    aadhaar: '',
    driving: '',
  },
};

const onSubmit = async (values, actions) => {
  console.log(values);
  await new Promise((resolve) => setTimeout(resolve, 1000));
  actions.resetForm();
};

export const FormComponent = () => {
  return (
    <>
      <Formik initialValues={initialValues} onSubmit={onSubmit}>
        <Form className='form'>
          <h2>Personal Details</h2>
          <PersonalDetails />
          <h2>Contact Details</h2>
          <ContactDetails />
          <h2>Address Details</h2>
          <AddressDetails />
          <button type='submit'>Submit</button>
        </Form>
      </Formik>
    </>
  );
};
