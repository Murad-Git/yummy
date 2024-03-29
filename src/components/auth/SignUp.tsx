'use client';

import { createClientComponentClient } from '@supabase/auth-helpers-nextjs';
import cn from 'classnames';
import { Field, Form, Formik } from 'formik';
import { Dispatch, SetStateAction, useState } from 'react';
import * as Yup from 'yup';
import { Button } from '~/components/ui/Button';
import { Database } from '~/types/database';

const SignUpSchema = Yup.object().shape({
  email: Yup.string().email(`Invalid email`).required(`Required`),
  password: Yup.string().required(`Required`),
});

interface Props {
  setView: Dispatch<SetStateAction<string>>;
}

export const SignUp = ({ setView }: Props) => {
  const [errorMsg, setErrorMsg] = useState(``);
  const [successMsg, setSuccessMsg] = useState(``);
  const supabase = createClientComponentClient<Database>();

  const handleSignUp = async (formData: formDataType) => {
    if (formData.password && formData.email) {
      const { error } = await supabase.auth.signUp({
        email: formData.email,
        password: formData.password,
        // options: {
        //   emailRedirectTo: `${location.origin}/auth/callback`,
        // },
      });
      error
        ? setErrorMsg(error.message)
        : setSuccessMsg(
            `Success! Please check your email inbox or spam folder.`,
          );
    } else setErrorMsg(`Failed to signUp`);
  };

  return (
    <div className='auth-card'>
      <h2 className='auth-title w-full text-center'>Create Account</h2>
      <Formik
        initialValues={{
          email: ``,
          password: ``,
        }}
        validationSchema={SignUpSchema}
        onSubmit={handleSignUp}
      >
        {({ errors, touched }) => (
          <Form className='column w-full'>
            <label className='text-gray-800' htmlFor='email'>
              Email
            </label>
            <Field
              className={cn(`input`, errors.email && `bg-red-50`)}
              id='email'
              name='email'
              placeholder='test@test.com'
              type='email'
            />
            {errors.email && touched.email ? (
              <div className='text-red-600'>{errors.email}</div>
            ) : null}

            <label className='text-gray-800' htmlFor='email'>
              Password
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
          </Form>
        )}
      </Formik>
      {errorMsg && <p className='text-red-600'>{errorMsg}</p>}
      {successMsg && (
        <p className='break-normal w-fit text-center text-green-500'>
          {successMsg}
        </p>
      )}
      <Button
        className='w-full text-base'
        bType='btn-outline'
        type='button'
        onClick={() => setView(`signIn`)}
      >
        Already have an account? Sign In.
      </Button>
    </div>
  );
};
