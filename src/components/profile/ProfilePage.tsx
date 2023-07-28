import {
  createServerComponentClient,
  Session,
} from '@supabase/auth-helpers-nextjs';
import axios from 'axios';
import { cookies } from 'next/headers';
import Image from 'next/image';
import ProfileInfo from '~/components/profile/ProfileInfo';
import ProfileLinks from '~/components/profile/ProfileLinks';
// import { authOptions } from '~/pages/api/auth/[...nextauth]';
import { Database } from '~/types/database';

interface Props {
  session: Session | null;
  children?: React.ReactNode;
}

export default async function ProfilePage({ session, children }: Props) {
  const usernameCook = cookies().get('username');
  const hashCook = cookies().get('hash');
  console.log(hashCook);
  console.log(usernameCook);
  const mealPlanW = await axios(
    `https://api.spoonacular.com/mealplanner/generate?timeFrame=week&apiKey=${process.env.API_KEY}`
  );
  console.log(mealPlanW);
  const supabase = createServerComponentClient<Database>({ cookies });
  console.log('supabase');
  console.log(supabase);
  // const myTemps = await axios(
  //   `https://api.spoonacular.com/mealplanner/${usernameCook?.value}/templates/?apiKey=${process.env.API_KEY}&hash=${hashCook?.value}`
  // );
  // const publicTemps = await axios(
  //   `https://api.spoonacular.com/mealplanner/public-templates/?apiKey=${process.env.API_KEY}&hash=${hashCook?.value}`
  // );
  // console.log(myTemps.data.templates);
  // console.log(publicTemps.data.templates);
  // console.log('initial username');
  // console.log(usernameCook);
  // console.log('initial hash');
  // console.log(hashCook);
  // const data = await getServerSession(authOptions);

  // const sendAuthRequest = async () => {
  //   'use server';
  //   if (data?.user && data?.user?.name) {
  //     if (usernameCook === undefined) {
  //       const { name, email } = data.user;
  //       const userData = await userAuth({
  //         username: name,
  //         firstName: name.split(' ')[0],
  //         lastName: name.split(' ')[1],
  //         email,
  //       });
  //       if (!userData) return console.error('Could not fetch userData');
  //       const { hash, username } = userData.data;
  //       cookies().set('username', username);
  //       cookies().set('hash', hash);
  //       console.log('cookies after getting data');
  //       console.log(usernameCook);
  //       console.log(hashCook);
  //     } else console.log(usernameCook, hashCook);
  //   } else return;
  // };

  // const cookieStore = cookies();
  // const usernameCook = cookieStore.get('username');
  // revalidatePath('/profile');
  // const hashCook = cookieStore.get('hash');
  // cookies().set('username', 'john-smith7');
  // cookies().set('hash', '39096f644f811bc2cdefc9864c81b0fb07aad305smith7');
  // console.log(usernameCook);
  // console.log(hashCook);
  // if (usernameCook === undefined || usernameCook.name.length < 0) {
  //   const { name, email } = data.user;
  //   const userData = await userAuth({
  //     username: name,
  //     firstName: name.split(' ')[0],
  //     lastName: name.split(' ')[1],
  //     email,
  //   });
  //   if (!userData) return console.error('Could not fetch userData');
  //   const { hash, username } = userData.data;
  //   cookies().set('username', username);
  //   cookies().set('hash', hash);
  //   console.log('cookies after getting data');
  //   console.log(cookies().get('username'));
  //   console.log(cookies().get('hash'));
  // }

  return (
    <div className='grid grid-cols-6'>
      {/* <form action={sendAuthRequest}>
        <button>Make Authorization</button>
      </form> */}
      <section className='col-span-1 bg-white p-4'>
        <div className='flex flex-col items-center justify-start p-2'>
          {/* <form action={checkCookiesWhenEnter}>
            <button>Cookies Button</button>
          </form> */}
          <div className='mr-3 mb-3'>
            <Image
              className='w-16'
              src={session?.user?.image || `/images/profile/no-person.png`}
              width={500}
              height={500}
              alt='avatar'
            />
          </div>
          <div>
            <h1 className='whitespace-nowrap text-xl font-bold'>
              Hi, {session?.user?.name || `user`}
            </h1>
          </div>
        </div>
        <nav className='px-2 py-3'>
          <ProfileLinks />
        </nav>
      </section>
      <section className='col-span-5 bg-white p-4'>
        <div>
          <div>
            <h1 className='text-2xl font-bold'>Personal Information</h1>
            <p>Some additional information</p>
          </div>
          <ProfileInfo mealPlan={mealPlanW.data} />
        </div>
      </section>
    </div>
  );
}
