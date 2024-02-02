import { faArrowRightFromBracket } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { createClientComponentClient } from '@supabase/auth-helpers-nextjs';
import { useRouter } from 'next/navigation';

export const SignOut = () => {
  const router = useRouter();
  const supabase = createClientComponentClient();

  const handleSignOut = async () => {
    await supabase.auth.signOut();
    console.log(`signed out successfully`);
    router.refresh();
  };
  return (
    <button
      type='button'
      className='flex items-center rounded-full transition-all  hover:text-white'
      onClick={handleSignOut}
    >
      <p className='inline-block mr-3'>Sign Out</p>
      <FontAwesomeIcon
        className='text-green-500 rotate-180'
        icon={faArrowRightFromBracket}
      />
    </button>
  );
};
