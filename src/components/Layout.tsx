import Head from 'next/head';
import { FC } from 'react';
import { Navbar } from './Navbar';
import { Poppins } from 'next/font/google';

type Props = {
  children?: React.ReactNode;
  title?: string;
  className?: string;
};

const font = Poppins({
  subsets: ['latin'],
  weight: ['400', '700', '100', '300', '500', '900', '200', '600', '800'],
});

export const Layout: FC<Props> = ({
  children,
  title = 'Journeyscape',
  className,
}) => {
  return (
    <>
      <Head>
        <title>{title}</title>
        <meta
          name="description"
          content="Embark on Extraordinary Journeys with Journeyscape."
        />
      </Head>
      <main className={`${font.className} min-h-screen h-full ${className}`}>
        <Navbar />
        {children}
      </main>
    </>
  );
};
