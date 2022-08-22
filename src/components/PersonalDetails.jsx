import React from 'react';
import { CustomInput } from './CustomInput';
import { Field } from 'formik';

import '../App.css';

export const PersonalDetails = () => {
  return (
    <>
      <div className='field-container'>
        <div className='form-control'>
          <label htmlFor='name'>Name</label>
          <Field type='text' name='name' id='name' placeholder='Enter Name' />
        </div>

        <div className='form-control'>
          <label htmlFor='date'>Date</label>
          <Field
            type='text'
            name='date'
            id='date'
            placeholder='DD/MM/YYYY'
            onFocus={(e) => (e.target.type = 'date')}
            onBlur={(e) => (e.target.type = 'text')}
          />
        </div>

        <div className='form-control'>
          <label htmlFor='sex'>Sex</label>
          <Field as='select' name='sex' id='sex'>
            <option value=''>select Gender</option>
            <option value='male'>Male</option>
            <option value='female'>Female</option>
            <option value='other'>Other</option>
          </Field>
        </div>

        <div className='form-control'>
          <label htmlFor='mobile'>Mobile</label>
          <Field type='number' name='mobile' id='mobile' />
        </div>

        <div className='form-control'>
          <label htmlFor='govId'>Govt Issued ID</label>
          <Field as='select' id='govId' name='govId'>
            <option value='selectId'>Select ID</option>
            <option value='aadhaar'>Aadhaar Card</option>
            <option value='driving'>Driving</option>
          </Field>
          <Field type='number' name='govId.value' />
        </div>
      </div>
    </>
  );
};
