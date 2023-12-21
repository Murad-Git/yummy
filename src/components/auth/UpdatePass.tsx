'use client';
import { createClientComponentClient } from '@supabase/auth-helpers-nextjs';
import cn from 'classnames';
import { Field, Form, Formik } from 'formik';
import { useState } from 'react';
import * as Yup from 'yup';
import { useAuth } from '~/components/auth/AuthProvider';
import { Button } from '~/components/ui/Button';
import { Database } from '~/types/database';

const UpdatePassSchema = Yup.object().shape({
  password: Yup.string().required(`Required`),
});

export const UpdatePass = () => {
  const supabase = createClientComponentClient<Database>();
  // const supabase = createBrowserClient(
  //   process.env.NEXT_PUBLIC_SUPABASE_URL!,
  //   process.env.NEXT_PUBLIC_SUPABASE_ANON_KEY!,
  // );
  const [errorMsg, setErrorMsg] = useState(``);
  const [successMsg, setSuccessMsg] = useState(``);
  const { setView } = useAuth();

  const handleUpdatePass = async (formData: formDataType) => {
    if (formData.password) {
      const { error } = await supabase.auth.updateUser({
        email: formData.email,
        password: formData.password,
      });
      error
        ? setErrorMsg(error.message)
        : setSuccessMsg(`Success! Please use your new password to login`);
    } else setErrorMsg(`Failed to update the password`);
  };
  return (
    <div className='auth-card-rel w-[40%] border-none'>
      <h2 className='auth-title w-full text-center'>Update Password</h2>

      <Formik
        initialValues={{
          email: ``,
          password: ``,
        }}
        validationSchema={UpdatePassSchema}
        onSubmit={handleUpdatePass}
      >
        {({ errors, touched }) => (
          <Form className='column w-full'>
            <label className='text-gray-800' htmlFor='email'>
              Email
            </label>
            <Field
              className={cn(
                `input`,
                errors.email && touched.email && `bg-red-50`,
              )}
              id='email'
              name='email'
              placeholder='jane@acme.com'
              type='email'
            />
            {errors.email && touched.email ? (
              <div className='text-red-600'>{errors.email}</div>
            ) : null}

            <label className='text-gray-800' htmlFor='email'>
              New Password
            </label>
            <Field
              className={cn(
                `input`,
                errors.password && touched.password && `bg-red-50`,
              )}
              id='password'
              name='password'
              type='password'
            />
            {errors.password && touched.password ? (
              <div className='text-red-600'>{errors.password}</div>
            ) : null}

            <Button className='w-full' bType='btn-filled' type='submit'>
              Submit
            </Button>
            {/* <button
              className='button-inverse btn btn-blue w-full'
              type=''
            >
              Submit
            </button> */}
          </Form>
        )}
      </Formik>
      {errorMsg && <p className='text-red-600'>{errorMsg}</p>}
      {successMsg && (
        <p className='break-normal text-center text-green-500'>{successMsg}</p>
      )}
    </div>
  );
};
