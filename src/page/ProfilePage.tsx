import { Session, User } from '@supabase/auth-helpers-nextjs';
import Image from 'next/image';
import ProfileLinks from '~/components/profile/ProfileLinks';
import ProfileNav from '~/components/profile/ProfileNav';
// import { authOptions } from '~/pages/api/auth/[...nextauth]';

interface Props {
  user: User | null;
  session: Session;
}

export const ProfilePage = ({ user, session }: Props) => {
  const loginDate = new Date(user?.last_sign_in_at || ``).toUTCString();
  if (!user) return <p>No user</p>;
  return (
    <div className='grid grid-cols-1 md:grid-cols-6'>
      {/* left side */}
      <section className='col-span-1 bg-white p-4'>
        <div className='flex md:flex-col items-center justify-start p-2'>
          <div className='mr-3 mb-3'>
            <Image
              className='w-20'
              src={
                session?.user.user_metadata.picture ||
                `/images/profile/no-person.png`
              }
              width={500}
              height={500}
              alt='avatar'
            />
          </div>
          <div>
            <h1 className='break-normal text-xl font-bold'>
              Hi, {session?.user?.user_metadata.name || `user`}
            </h1>
          </div>
        </div>
        <nav className='px-2 py-3'>
          <ProfileLinks />
        </nav>
      </section>
      {/* right side */}
      <section className='md:col-span-5 bg-white p-4'>
        <div>
          <div>
            <h1 className='text-2xl font-bold'>Personal Information</h1>
            <p>
              Your email:{` `}
              <span className='font-semibold'>
                {session?.user?.email || 'no email'}
              </span>
            </p>
            <p>
              Last signed in: <span className='font-semibold'>{loginDate}</span>
            </p>
          </div>
          <ProfileNav />
        </div>
      </section>
    </div>
  );
};
