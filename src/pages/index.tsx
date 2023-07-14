import Image from 'next/image';
import Link from 'next/link';
import { Poppins, Cookie } from 'next/font/google';
import Head from 'next/head';

const fonts = Poppins({
  subsets: ['latin'],
  weight: ['400', '700', '100', '300', '500', '900', '200', '600', '800'],
});

const brandFont = Cookie({
  subsets: ['latin'],
  weight: ['400'],
});

export default function Home() {
  return (
    <main
      className={`${fonts.className} bg-[#b0d8e4] relative min-h-screen h-full overflow-hidden`}
    >
      <Head>
        <title>Journeyscape</title>
        <meta
          name="description"
          content="Embark on Extraordinary Journeys with Journeyscape."
        />
      </Head>
      <nav className="flex justify-between items-center px-5 md:px-20 py-8">
        <Link href="/">
          <h1 className={`${brandFont.className} text-orange-500 text-4xl`}>
            Journeyscape
          </h1>
        </Link>
        <div className="hidden flex-1 md:flex justify-center gap-6">
          <Link href="/">
            <span className="font-bold hover:text-orange-500 transition-all">
              Home
            </span>
          </Link>
          <Link href="/about">
            <span className="hover:text-orange-500 transition-all">About</span>
          </Link>
          <Link href="/destinations">
            <span className="hover:text-orange-500 transition-all">
              Destinations
            </span>
          </Link>
          <Link href="/product">
            <span className="hover:text-orange-500 transition-all">
              Features
            </span>
          </Link>
        </div>
        <div>
          <Link href="/signup">
            <button className="border-2 border-gray-700 hover:border-orange-400 hover:text-orange-400 hover:shadow-2xl hover:scale-105 px-4 py-2 rounded-lg transition-all">
              Sign up
            </button>
          </Link>
        </div>
      </nav>

      <section className="flex flex-col items-center justify-center z-10 absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2">
        <h1 className="text-6xl font-bold text-center mt-20">
          Crafting Unforgettable Adventures
        </h1>
        <p className="text-center font-semibold text-gray-900 mt-5">
          Travel with us and get great experiences
        </p>

        <div className="flex justify-center gap-6 mt-10">
          <Link href="/explore">
            <button className="border-2 border-gray-700 hover:border-orange-400 hover:text-orange-400 hover:shadow-2xl hover:scale-105 px-4 py-2 rounded-lg transition-all">
              Explore Now
            </button>
          </Link>
        </div>
      </section>

      <Image
        src="/banner.jpeg"
        alt="Banner"
        className="absolute bottom-0 w-full h-[600px] object-fill pointer-events-none bg-repeat bg-cover bg-top opacity-60"
        width={100}
        height={100}
        priority
      />
    </main>
  );
}
