import '../src/styles/globals.scss';

import Providers from '@/providers';

import { createServerComponentClient } from '@supabase/auth-helpers-nextjs';
import { cookies } from 'next/headers';
import { AuthProvider } from '~/components/auth/AuthProvider';
import { Footer2 } from '~/components/footer/Footer2';
import { Header } from '~/components/header/Header';

export const revalidate = 0;

export default async function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  const supabase = createServerComponentClient({ cookies });

  const {
    data: { session },
  } = await supabase.auth.getSession();

  const accessToken = session?.access_token || null;
  return (
    <html>
      <head />
      <body>
        <div id='overlays' />
        <AuthProvider accessToken={accessToken}>
          <Providers>
            <Header />
            <>{children}</>
          </Providers>
        </AuthProvider>
        <Footer2 />
      </body>
    </html>
  );
}
