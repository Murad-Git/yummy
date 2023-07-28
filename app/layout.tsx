import '../src/styles/globals.scss';

import Providers from '@/providers';

import Footer from '~/components/footer/Footer';
import { Header } from '~/components/header/Header';
import Container from '~/components/layout/Container';

export default async function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html>
      <head />
      <body className='bg-gray-100'>
        <div id='overlays' />
        <Providers>
          <Header />
          <Container>{children}</Container>
        </Providers>
        <Footer />
      </body>
    </html>
  );
}
