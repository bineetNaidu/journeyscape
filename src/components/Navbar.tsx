import { Cookie } from 'next/font/google';
import Link from 'next/link';
import { useRouter } from 'next/router';
import { FC } from 'react';
import { Button } from './Button';
import {
  Sheet,
  SheetContent,
  SheetDescription,
  SheetHeader,
  SheetTitle,
  SheetTrigger,
} from '@/components/ui/sheet';
import { Separator } from '@/components/ui/separator';
import { useUser, UserButton } from '@clerk/nextjs';
import { BiLoaderCircle } from 'react-icons/bi';

const brandFont = Cookie({
  subsets: ['latin'],
  weight: ['400'],
});

const links = [
  {
    name: 'Home',
    href: '/',
  },
  {
    name: 'About us',
    href: '/about-us',
  },
  {
    name: 'Destinations',
    href: '/destinations',
  },
  {
    name: 'Features',
    href: '/product',
  },
];

export const Navbar: FC = () => {
  const router = useRouter();
  const { isLoaded, isSignedIn } = useUser();

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
        {links.map((link) => (
          <Link href={link.href} key={link.name}>
            <span
              className={`hover:text-orange-500 transition-all ${
                router.pathname === link.href && 'font-bold'
              }`}
            >
              {link.name}
            </span>
          </Link>
        ))}
      </div>
      <div>
        <Sheet>
          <SheetTrigger asChild>
            {!isLoaded ? (
              <span>
                <BiLoaderCircle className="animate-spin text-2xl text-orange-500" />
              </span>
            ) : (
              <div className="group md:hidden flex h-12 w-12 cursor-pointer items-center justify-center rounded-3xl bg-transparent p-2 hover:bg-slate-200">
                <div className="space-y-2">
                  <span className="block h-1 w-8 origin-center rounded-full bg-slate-500 transition-transform ease-in-out group-hover:translate-y-1.5 group-hover:rotate-45"></span>
                  <span className="block h-1 w-6 origin-center rounded-full bg-orange-500 transition-transform ease-in-out group-hover:w-8 group-hover:-translate-y-1.5 group-hover:-rotate-45"></span>
                </div>
              </div>
            )}
          </SheetTrigger>
          <SheetContent>
            <SheetHeader>
              <SheetTitle>
                <Link href="/">
                  <h1
                    className={`${brandFont.className} text-orange-500 text-4xl font-bold`}
                  >
                    Journeyscape
                  </h1>
                </Link>
              </SheetTitle>
              <SheetDescription>
                <p>~ Ignite Your Wanderlust with Journeyscape.</p>
              </SheetDescription>
            </SheetHeader>
            <Separator className="my-5" />
            <div className="flex flex-col gap-4 my-4">
              {links.map((link) => (
                <Link href={link.href} key={link.name}>
                  <span
                    className={`hover:text-orange-500 transition-all ${
                      router.pathname === link.href && 'font-bold'
                    } text-slate-5`}
                  >
                    {link.name}
                  </span>
                </Link>
              ))}
              <Link href={'/explore'}>
                <span
                  className={`hover:text-orange-500 transition-all ${
                    router.pathname === '/explore' && 'font-bold'
                  } text-slate-5`}
                >
                  Explore
                </span>
              </Link>
              <Separator />
              {!isLoaded ? (
                <span>
                  <BiLoaderCircle className="animate-spin text-2xl text-orange-500" />
                </span>
              ) : isSignedIn ? (
                <UserButton />
              ) : (
                <Link href="/signup">
                  <Button>Sign up</Button>
                </Link>
              )}
            </div>
          </SheetContent>
        </Sheet>

        {!isLoaded ? (
          <span className="hidden md:block">
            <BiLoaderCircle className="animate-spin text-2xl text-orange-500" />
          </span>
        ) : isSignedIn ? (
          <div className="hidden md:block">
            <UserButton showName />
          </div>
        ) : (
          <Link href="/signup" className="hidden md:block">
            <Button>Sign up</Button>
          </Link>
        )}
      </div>
    </nav>
  );
};
