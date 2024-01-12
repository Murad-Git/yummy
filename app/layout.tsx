import Head from '@/head';
import Providers from '@/providers';
import { Footer } from '~/components/footer/Footer';
import { Header } from '~/components/header/Header';
import '../src/styles/globals.scss';

export const revalidate = 0;

export default async function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html>
      <Head />
      <body>
        <div id='overlays' />
        <Providers>
          <Header />
          <>{children}</>
        </Providers>
        <Footer />
      </body>
    </html>
  );
}
