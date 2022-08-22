import React from 'react';
import { Field } from 'formik';

import '../App.css';

export const AddressDetails = () => {
  return (
    <>
      <div className='field-container'>
        <div className='form-control'>
          <label htmlFor='address'>Address</label>
          <Field
            type='address'
            name='address'
            id='address'
            placeholder='Enter address'
          />
        </div>

        <div className='form-control'>
          <label htmlFor='state'>State</label>
          <Field as='select' name='state' id='state' placeholder='Enter State'>
            <option value='' disabled selected hidden>
              Enter State
            </option>
            <option value='maharashtra'>Maharashtra</option>
            <option value='karnataka'>Uttarakhand</option>
            <option value='karnataka'>Karnataka</option>
          </Field>
        </div>

        <div className='form-control'>
          <label htmlFor='city'>City</label>
          <Field
            as='select'
            name='city'
            id='city'
            placeholder='Enter city/town/village'
          >
            <option value='' disabled selected hidden>
              Enter city/town/village
            </option>
            <option value='male'>Mumbai</option>
            <option value='female'>Dehradun</option>
            <option value='other'>Bangalore</option>
          </Field>
        </div>

        <div className='form-control'>
          <label htmlFor='country'>Country</label>
          <Field as='select' id='country' name='country'>
            <option value='---' disabled selected hidden>
              --country--
            </option>
            <option value='india'>India</option>
          </Field>
        </div>

        <div className='form-control'>
          <label htmlFor='pincode'>Pincode</label>
          <Field
            type='number'
            name='pincode'
            id='pincode'
            placeholder='Enter Pincode'
          />
        </div>
      </div>
    </>
  );
};
