'use client';
import { createClientComponentClient } from '@supabase/auth-helpers-nextjs';
import cn from 'classnames';
import { Field, Form, Formik } from 'formik';
import { useState } from 'react';
import * as Yup from 'yup';
import { useAuth } from '~/components/auth/AuthProvider';
import { Database } from '~/types/database';

const UpdatePassSchema = Yup.object().shape({
  password: Yup.string().required('Required'),
});

export const UpdatePass = () => {
  const supabase = createClientComponentClient<Database>();
  const [errorMsg, setErrorMsg] = useState('');
  const [successMsg, setSuccessMsg] = useState('');
  console.log('supabase');
  console.log(supabase);
  const { setView } = useAuth();

  const handleUpdatePass = async (formData: formDataType) => {
    if (formData.password) {
      const { error } = await supabase.auth.updateUser({
        password: formData.password,
      });
      error
        ? setErrorMsg(error.message)
        : setSuccessMsg('Success! Please use your new password to login');
    } else setErrorMsg('Failed to update the password');
  };
  return (
    <div className='auth-card-rel w-[40%] border-none'>
      <h2 className='auth-title w-full text-center'>Change Password</h2>
      <Formik
        initialValues={{
          password: '',
        }}
        validationSchema={UpdatePassSchema}
        onSubmit={handleUpdatePass}
      >
        {({ errors, touched }) => (
          <Form className='column w-full'>
            <label htmlFor='email'>Password</label>
            <Field
              className={cn(
                'input',
                errors.password && touched.password && 'bg-red-50'
              )}
              id='password'
              name='password'
              type='password'
            />
            {errors.password && touched.password ? (
              <div className='text-red-600'>{errors.password}</div>
            ) : null}

            <button
              className='button-inverse btn btn-blue w-full'
              type='submit'
            >
              Submit
            </button>
          </Form>
        )}
      </Formik>
      {errorMsg && <p className='text-red-600'>{errorMsg}</p>}
      {successMsg && (
        <p className='break-normal text-center text-green-500'>{successMsg}</p>
      )}
      {/* <button
        className='link w-full'
        type='button'
        onClick={() => setView('signIn')}
      >
        Already have an account? Sign In.
      </button> */}
    </div>
  );
};
