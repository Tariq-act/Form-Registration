import React from 'react';
import { useField } from 'formik';

export const CustomInput = ({ label, ...props }) => {
  const [field, meta] = useField(props);
  console.log('field', field);
  console.log('meta', meta);

  return (
    <div className='form-control'>
      <label>{label} </label>
      <input
        {...field}
        {...props}
        className={meta.touched && meta.error ? 'input-error' : ''}
      />
      {meta.touched && meta.error && <div className='error'>{meta.error}</div>}
    </div>
  );
};
