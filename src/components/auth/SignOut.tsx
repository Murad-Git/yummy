import { faArrowRightFromBracket } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { createClientComponentClient } from '@supabase/auth-helpers-nextjs';
import { useRouter } from 'next/navigation';

export const SignOut = () => {
  const router = useRouter();
  const supabase = createClientComponentClient();

  const handleSignOut = async () => {
    await supabase.auth.signOut();
    console.log('signed out successfully');
    router.refresh();
  };
  return (
    <button
      type='button'
      className='button-inverse flex h-10 w-10 flex-col items-center justify-center rounded-full transition-all  hover:text-white'
      onClick={handleSignOut}
    >
      <FontAwesomeIcon icon={faArrowRightFromBracket} className='rotate-180' />
    </button>
  );
};
