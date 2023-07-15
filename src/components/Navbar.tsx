import { Cookie } from 'next/font/google';
import Link from 'next/link';
import { useRouter } from 'next/router';
import { FC } from 'react';
import { Button } from './Button';

const brandFont = Cookie({
  subsets: ['latin'],
  weight: ['400'],
});

export const Navbar: FC = () => {
  const router = useRouter();

  return (
    <nav className="flex justify-between items-center px-5 md:px-20 py-8">
      <Link href="/">
        <h1
          className={`${brandFont.className} text-orange-500 text-4xl font-bold`}
        >
          Journeyscape
        </h1>
      </Link>
      <div className="hidden flex-1 md:flex justify-center gap-6">
        <Link href="/">
          <span
            className={`hover:text-orange-500 transition-all ${
              router.pathname === '/' && 'font-bold'
            }`}
          >
            Home
          </span>
        </Link>
        <Link href="/about">
          <span
            className={`hover:text-orange-500 transition-all ${
              router.pathname === '/about' && 'font-bold'
            }`}
          >
            About
          </span>
        </Link>
        <Link href="/destinations">
          <span
            className={`hover:text-orange-500 transition-all ${
              router.pathname === '/destinations' && 'font-bold'
            }`}
          >
            Destinations
          </span>
        </Link>
        <Link href="/product">
          <span
            className={`hover:text-orange-500 transition-all ${
              router.pathname === '/product' && 'font-bold'
            }`}
          >
            Features
          </span>
        </Link>
      </div>
      <div>
        <Link href="/signup">
          <Button>Sign up</Button>
        </Link>
      </div>
    </nav>
  );
};
