'use client';
import { useSession } from 'next-auth/react';
import Image from 'next/image';
import { useState } from 'react';

import Container from '~/components/layout/Container';
import Recipes from '~/components/recipesComponents/Recipes';
import { NavLink } from '~/components/ui/NavLink';
import { profileLinks } from '~/constant/categories';

export default function Profile() {
  const { data: session } = useSession();
  const [curNav, setCurNav] = useState(`Personal Info`);
  // if (!session?.user?.name) {
  //   return notFound();
  // }
  return (
    <div>
      {/* <Image
        className='h-full w-full'
        src='/images/divider-img-1.jpg'
        width={500}
        height={500}
        alt='background'
      /> */}
      <Container className='grid grid-cols-5'>
        <section className='col-span-1 bg-white p-4'>
          <div className='flex items-center justify-start p-2'>
            <div className='mr-3'>
              <Image
                className='w-16'
                src={session?.user?.image || `/images/profile/no-profile.png`}
                width={500}
                height={500}
                alt='avatar'
              />
            </div>
            <div>
              <h1 className='text-xl font-bold'>
                Hi, {session?.user?.name || `user`}
              </h1>
            </div>
          </div>
          <nav className='px-2 py-3'>
            <ul className='space-y-4 text-lg font-semibold'>
              {profileLinks.map((link) => (
                <NavLink
                  size='lg'
                  key={link as string}
                  category={link as string}
                  isActive={curNav === link}
                  setCategories={setCurNav}
                />
              ))}
              {/* <li>Personal Info</li>
              <li>Your Favourite Recipes</li>
              <li>Meal Plan</li> */}
            </ul>
          </nav>
        </section>
        <section className='col-span-4 bg-white p-4'>
          <div>
            <div>
              <h1 className='text-2xl font-bold'>Personal Information</h1>
              <p>Some additional information</p>
            </div>
            <Recipes sectionTitle='Your Favourite Recipes' items='five' />
          </div>
        </section>
        {/* <h1>Profile</h1> */}
      </Container>
    </div>
  );
}
