'use client';

import { createClientComponentClient } from '@supabase/auth-helpers-nextjs';
import cn from 'classnames';
import { Field, Form, Formik } from 'formik';
import { useRouter } from 'next/navigation';
import { Dispatch, SetStateAction, useState } from 'react';
import * as Yup from 'yup';

const ResetPasswordSchema = Yup.object().shape({
  email: Yup.string().email('Invalid email').required('Required'),
});

interface Props {
  setView: Dispatch<SetStateAction<AuthTypes>>;
}

export const ResetPass = ({ setView }: Props) => {
  const router = useRouter();
  const supabase = createClientComponentClient();
  const [errorMsg, setErrorMsg] = useState('');
  const [successMsg, setSuccessMsg] = useState('');

  const handleReset = async (formData: formDataType) => {
    const { error } = await supabase.auth.resetPasswordForEmail(
      formData?.email,
      { redirectTo: `${location.origin}/auth/callback` }
    );
    if (error) return setErrorMsg(error.message);
    return setSuccessMsg('Password reset instructions sent.');
  };
  return (
    <div className='auth-card'>
      <h2 className='auth-title w-full text-center'>Forgot Password</h2>
      <Formik
        initialValues={{
          email: '',
        }}
        validationSchema={ResetPasswordSchema}
        onSubmit={handleReset}
      >
        {({ errors, touched }) => (
          <Form className='column w-full'>
            <label htmlFor='email'>Email</label>
            <Field
              className={cn('input', errors.email && 'bg-red-50')}
              id='email'
              name='email'
              placeholder='jane@acme.com'
              type='email'
            />
            {errors.email && touched.email ? (
              <div className='text-red-600'>{errors.email}</div>
            ) : null}
            <button
              className='button-inverse btn btn-blue w-full'
              type='submit'
            >
              Send Instructions
            </button>
          </Form>
        )}
      </Formik>
      {errorMsg && <div className='text-center text-red-600'>{errorMsg}</div>}
      {successMsg && <div className='text-center text-black'>{successMsg}</div>}
      <button className='link' type='button' onClick={() => setView('signIn')}>
        Remember your password? Sign In.
      </button>
    </div>
  );
};
