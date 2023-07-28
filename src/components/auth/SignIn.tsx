'use client';
import { createClientComponentClient } from '@supabase/auth-helpers-nextjs';
import cn from 'classnames';
import { Field, Form, Formik } from 'formik';
import { useRouter } from 'next/navigation';
import { Dispatch, SetStateAction, useState } from 'react';
import * as Yup from 'yup';
import { Database } from '~/types/database';

const SignInSchema = Yup.object().shape({
  email: Yup.string().email('Invalid email').required('Required'),
  password: Yup.string().required('Required'),
});

interface Props {
  setView: Dispatch<SetStateAction<AuthTypes>>;
}

export const SignIn = ({ setView }: Props) => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const router = useRouter();
  const supabase = createClientComponentClient<Database>();
  const [errorMsg, setErrorMsg] = useState('');

  // const handleSignUp = async () => {
  //   console.log('signUp');
  //   console.log(email, password);

  //   await supabase.auth.signUp({
  //     email,
  //     password,
  //     options: {
  //       emailRedirectTo: `${location.origin}/auth/callback`,
  //     },
  //   });
  //   router.refresh();
  // };

  // const handleSignIn = async () => {
  //   console.log('signIn');

  //   console.log(email, password);
  //   const { error } = await supabase.auth.signInWithPassword({
  //     email,
  //     password,
  //   });
  //   if (error) {
  //     console.log({ error });
  //   }
  // };

  // const handleSignOut = async () => {
  //   await supabase.auth.signOut();
  //   router.refresh();
  // };

  const handleSignIn = async (formData: formDataType) => {
    if (formData.password && formData.email) {
      const { error } = await supabase.auth.signInWithPassword({
        email: formData.email,
        password: formData.password,
      });
      error && setErrorMsg(error.message);
      router.refresh();
    } else setErrorMsg('Failed to signIn');
  };

  return (
    <div className='auth-card'>
      <h2 className='auth-title w-full text-center'>Sign In</h2>
      <Formik
        initialValues={{
          email: '',
          password: '',
        }}
        validationSchema={SignInSchema}
        onSubmit={handleSignIn}
      >
        {({ errors, touched }) => (
          <Form className='column w-full'>
            <label htmlFor='email'>Email</label>
            <Field
              className={cn(
                'input',
                errors.email && touched.email && 'bg-red-50'
              )}
              id='email'
              name='email'
              placeholder='jane@acme.com'
              type='email'
            />
            {errors.email && touched.email ? (
              <div className='text-red-600'>{errors.email}</div>
            ) : null}

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
              className='link btn w-full'
              type='button'
              onClick={() => setView('resetPassword')}
            >
              Forgot your password?
            </button>

            <button
              className='button-inverse btn btn-blue w-full '
              type='submit'
            >
              Submit
            </button>
          </Form>
        )}
      </Formik>
      {errorMsg && <div className='text-red-600'>{errorMsg}</div>}
      <button
        className='link w-full'
        type='button'
        onClick={() => setView('signUp')}
      >
        Don&apos;t have an account? Sign Up.
      </button>
    </div>
  );
  // return (
  //   <div className='auth-card'>
  //     <input
  //       name='email'
  //       onChange={(e) => setEmail(e.target.value)}
  //       value={email}
  //     />
  //     <input
  //       type='password'
  //       name='password'
  //       onChange={(e) => setPassword(e.target.value)}
  //       value={password}
  //     />
  //     <button onClick={handleSignUp}>Sign up</button>
  //     <button onClick={handleSignIn}>Sign in</button>
  //     <button onClick={handleSignOut}>Sign out</button>
  //   </div>
  // );
};
