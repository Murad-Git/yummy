import '../src/styles/globals.scss';

import Providers from '@/providers';

import Footer from '~/components/footer/Footer';
import { Header } from '~/components/header/Header';

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html>
      <head />
      <body className='bg-gray-100'>
        <Providers>
          <Header />
          {children}
        </Providers>
        <Footer />
      </body>
    </html>
  );
}
