import { createClientComponentClient } from '@supabase/auth-helpers-nextjs';
import Image from 'next/image';
import { Database } from '~/types/database';

interface Props {
  setErrorMsg: (msg: string) => void;
}
export const Oauth = ({ setErrorMsg }: Props) => {
  const supabase = createClientComponentClient<Database>();

  const getURL = () => {
    let url =
      process?.env?.NEXT_PUBLIC_SITE_URL ?? // Set this to your site URL in production env.
      process?.env?.NEXT_PUBLIC_VERCEL_URL ?? // Automatically set by Vercel.
      `http://localhost:3000/`;
    // Make sure to include `https://` when not localhost.
    url = url.includes(`http`) ? url : `https://${url}`;
    // Make sure to include a trailing `/`.
    url = url.charAt(url.length - 1) === `/` ? url : `${url}/`;
    return url;
  };

  const handleGoogle = async () => {
    const { data, error } = await supabase.auth.signInWithOAuth({
      provider: `google`,
      options: {
        // redirectTo: getURL(),
        queryParams: {
          access_type: `offline`,
          prompt: `consent`,
        },
      },
    });
    error && setErrorMsg(error.message);
    console.log(data, error);
  };
  const handleFB = async () => {
    const { data, error } = await supabase.auth.signInWithOAuth({
      provider: `facebook`,
      options: {
        // redirectTo: getURL(),
        queryParams: {
          access_type: `offline`,
          prompt: `consent`,
        },
      },
    });
    error && setErrorMsg(error.message);
    console.log(data, error);
  };
  const handleGH = async () => {
    const { data, error } = await supabase.auth.signInWithOAuth({
      provider: `github`,
      options: {
        // redirectTo: getURL(),
        queryParams: {
          access_type: `offline`,
          prompt: `consent`,
        },
      },
    });
    error && setErrorMsg(error.message);
    console.log(data, error);
  };
  return (
    <div className='space-x-2'>
      <button className='rounded bg-slate-100' onClick={handleGoogle}>
        <Image
          className='w-8'
          src='/logo/google-svg.svg'
          height={500}
          width={500}
          alt='google logo'
        />
      </button>
      <button className='' onClick={handleFB}>
        <Image
          className='w-8'
          src='/logo/fb-svg.svg'
          height={500}
          width={500}
          alt='facebook logo'
        />
      </button>
      <button className='' onClick={handleGH}>
        <Image
          className='w-8'
          src='/logo/gh-svg.svg'
          height={500}
          width={500}
          alt='github logo'
        />
      </button>
    </div>
  );
};
