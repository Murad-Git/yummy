import { createServerComponentClient } from '@supabase/auth-helpers-nextjs';
import { cookies } from 'next/headers';
import Link from 'next/link';
import { SearchField } from '~/components/header/SearchField';
import { UserLogin } from '~/components/header/UserLogin';
import { NavLinks } from '~/components/ui/NavLinks';
import { categories } from '~/constant/typesConts';
import { Database } from '~/types/database';

export const Header = async () => {
  const supabase = createServerComponentClient<Database>({ cookies });

  const {
    data: { session },
  } = await supabase.auth.getSession();

  return (
    <div className='h-40 md:h-40 lg:h-64'>
      <header className='sticky top-0 z-50 flex h-24 w-screen flex-col justify-center bg-slate-400 py-1 px-5 text-center'>
        <div className='container'>
          <div className='flex items-center justify-around pb-4'>
            <Link href='/' className='p-3 text-lg font-bold'>
              YUMMY
            </Link>
            <SearchField />
            <UserLogin session={session} />
          </div>
          <NavLinks categories={categories} shallow={true} type='category' />
        </div>
      </header>
      <div className='custom-shape-divider-top-1677837874'>
        <svg
          data-name='Layer 1'
          xmlns='http://www.w3.org/2000/svg'
          viewBox='0 0 1200 120'
          preserveAspectRatio='none'
        >
          <path
            d='M0,0V46.29c47.79,22.2,103.59,32.17,158,28,70.36-5.37,136.33-33.31,206.8-37.5C438.64,32.43,512.34,53.67,583,72.05c69.27,18,138.3,24.88,209.4,13.08,36.15-6,69.85-17.84,104.45-29.34C989.49,25,1113-14.29,1200,52.47V0Z'
            opacity='.25'
            fill='#12837c'
            className='shape-fill'
          ></path>
          <path
            d='M0,0V15.81C13,36.92,27.64,56.86,47.69,72.05,99.41,111.27,165,111,224.58,91.58c31.15-10.15,60.09-26.07,89.67-39.8,40.92-19,84.73-46,130.83-49.67,36.26-2.85,70.9,9.42,98.6,31.56,31.77,25.39,62.32,62,103.63,73,40.44,10.79,81.35-6.69,119.13-24.28s75.16-39,116.92-43.05c59.73-5.85,113.28,22.88,168.9,38.84,30.2,8.66,59,6.17,87.09-7.5,22.43-10.89,48-26.93,60.65-49.24V0Z'
            opacity='.5'
            fill='#12837c'
            className='shape-fill'
          ></path>
          <path
            d='M0,0V5.63C149.93,59,314.09,71.32,475.83,42.57c43-7.64,84.23-20.12,127.61-26.46,59-8.63,112.48,12.24,165.56,35.4C827.93,77.22,886,95.24,951.2,90c86.53-7,172.46-45.71,248.8-84.81V0Z'
            className='shape-fill'
            fill='#12837c'
          ></path>
        </svg>
      </div>
      {/* <svg
        className='absolute top-24 sm:top-16 md:top-8 2xl:-top-16'
        xmlns='http://www.w3.org/2000/svg'
        viewBox='0 0 1440 320'
      >
        <path
          fill='#F7A4A4'
          fillOpacity='1'
          d='M0,160L48,165.3C96,171,192,181,288,192C384,203,480,213,576,197.3C672,181,768,139,864,144C960,149,1056,203,1152,213.3C1248,224,1344,192,1392,176L1440,160L1440,0L1392,0C1344,0,1248,0,1152,0C1056,0,960,0,864,0C768,0,672,0,576,0C480,0,384,0,288,0C192,0,96,0,48,0L0,0Z'
        ></path>
      </svg> */}
      {/* <svg
        className='absolute top-24 md:top-20 lg:top-16'
        xmlns='http://www.w3.org/2000/svg'
        viewBox='0 0 1440 320'
      >
        <path
          fill='#F7A4A4'
          fillOpacity='1'
          d='M0,128L48,133.3C96,139,192,149,288,128C384,107,480,53,576,48C672,43,768,85,864,101.3C960,117,1056,107,1152,101.3C1248,96,1344,96,1392,96L1440,96L1440,0L1392,0C1344,0,1248,0,1152,0C1056,0,960,0,864,0C768,0,672,0,576,0C480,0,384,0,288,0C192,0,96,0,48,0L0,0Z'
        ></path>
      </svg> */}
    </div>
  );
};
