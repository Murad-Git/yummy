'use client';
import { createClientComponentClient } from '@supabase/auth-helpers-nextjs';
import cn from 'classnames';
import { Field, Form, Formik } from 'formik';
import { useState } from 'react';
import * as Yup from 'yup';
import { useAuth } from '~/components/auth/AuthProvider';
import { Oauth } from '~/components/auth/Oauth';
import { Button } from '~/components/ui/Button';
import { Database } from '~/types/database';

const SignInSchema = Yup.object().shape({
  email: Yup.string().email(`Invalid email`).required(`Required`),
  password: Yup.string().required(`Required`),
});

export const SignIn = () => {
  const supabase = createClientComponentClient<Database>();
  const [errorMsg, setErrorMsg] = useState(``);
  const [successMsg, setSuccessMsg] = useState(``);
  const { setView } = useAuth();

  const handleSignIn = async (formData: formDataType) => {
    if (formData.password && formData.email) {
      const { error } = await supabase.auth.signInWithPassword({
        email: formData.email,
        password: formData.password,
      });
      error
        ? setErrorMsg(error.message)
        : setSuccessMsg(`Successfully logged in`);
      setTimeout(() => {
        setView(``);
        setSuccessMsg(``);
      }, 3000);
    } else setErrorMsg(`Failed to signIn`);
  };

  return (
    <div className='auth-card'>
      <h2 className='auth-title w-full text-center'>Sign In</h2>
      <Oauth setErrorMsg={setErrorMsg} />
      <Formik
        initialValues={{
          email: `test@test.com`,
          password: `123456789`,
        }}
        validationSchema={SignInSchema}
        onSubmit={handleSignIn}
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
      {errorMsg && <div className='text-red-600'>{errorMsg}</div>}
      {successMsg && (
        <p className='break-normal text-center text-green-500'>{successMsg}</p>
      )}
      <Button
        className='w-full text-base'
        bType='btn-outline'
        type='button'
        onClick={() => setView(`resetPassword`)}
      >
        Password recovery
      </Button>
      <Button
        className='w-full text-base'
        bType='btn-outline'
        type='button'
        onClick={() => setView(`signUp`)}
      >
        Sign Up
      </Button>
    </div>
  );
};
