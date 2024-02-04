'use client';

import { createClientComponentClient } from '@supabase/auth-helpers-nextjs';
import cn from 'classnames';
import { Field, Form, Formik } from 'formik';
import { Dispatch, SetStateAction, useState } from 'react';
import * as Yup from 'yup';
import { Button } from '~/components/ui/Button';

const ResetPasswordSchema = Yup.object().shape({
  email: Yup.string().email(`Invalid email`).required(`Required`),
});

interface Props {
  setView: Dispatch<SetStateAction<string>>;
}

export const ResetPass = ({ setView }: Props) => {
  const supabase = createClientComponentClient();
  const [errorMsg, setErrorMsg] = useState(``);
  const [successMsg, setSuccessMsg] = useState(``);

  const handleReset = async (formData: formDataType) => {
    if (formData.email) {
      const { error } = await supabase.auth.resetPasswordForEmail(
        formData?.email,
        { redirectTo: `http://localhost:3000/profile/update` },
      );
      if (error) return setErrorMsg(error.message);
      setSuccessMsg(`Instructions were sent. Check your spam folder`);
    } else setErrorMsg(`Please provide a password`);
  };
  return (
    <div className='auth-card'>
      <h2 className='auth-title w-full text-center'>Forgot Password</h2>
      <Formik
        initialValues={{
          email: ``,
        }}
        validationSchema={ResetPasswordSchema}
        onSubmit={handleReset}
      >
        {({ errors, touched }) => (
          <Form className='column w-full'>
            <label className='text-gray-800' htmlFor='email'>
              Email
            </label>
            <Field
              className={cn(`input`, errors.email && `border-red-50`)}
              id='email'
              name='email'
              placeholder='test@test.com'
              type='email'
            />
            {errors.email && touched.email ? (
              <div className='text-red-600'>{errors.email}</div>
            ) : null}
            <Button bType='btn-filled' className='w-full' type='submit'>
              Send Instructions
            </Button>
            {/* <button
              className='button-inverse btn btn-blue w-full'
              type='submit'
            >
              Send Instructions
            </button> */}
          </Form>
        )}
      </Formik>
      {errorMsg && <div className='text-center text-red-600'>{errorMsg}</div>}
      {successMsg && (
        <Button type='button' bType='btn-green-outline'>
          {successMsg}
        </Button>
        // <div className='w-fit text-center text-sm text-green-500'>
        //   {successMsg}
        // </div>
      )}
      <Button
        bType='btn-outline'
        className='w-full'
        type='submit'
        onClick={() => setView(`signIn`)}
      >
        Sign In
      </Button>
      {/* <button className='link' type='button' onClick={() => setView(`signIn`)}>
        Remember your password? Sign In.
      </button> */}
    </div>
  );
};
