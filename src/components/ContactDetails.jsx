import React from 'react';

import { Field } from 'formik';

import '../App.css';

export const ContactDetails = () => {
  return (
    <>
      <div className='field-container'>
        <div className='form-control'>
          <label htmlFor='guardian'>Guardian Details</label>
          <Field
            type='text'
            name='guardian'
            id='guardian'
            placeholder='Enter Guardian Name'
          />
        </div>

        <div className='form-control'>
          <label htmlFor='email'>Email</label>
          <Field
            type='email'
            name='email'
            id='email'
            placeholder='Enter Email'
          />
        </div>

        <div className='form-control'>
          <label htmlFor='emergency'>Emergency Contact Number</label>
          <Field type='number' name='emergency' id='emergency' />
        </div>
      </div>
    </>
  );
};
