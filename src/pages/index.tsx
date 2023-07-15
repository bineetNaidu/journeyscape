import { Button } from '@/components/Button';
import { Layout } from '@/components/Layout';
import Image from 'next/image';
import Link from 'next/link';

export default function Home() {
  return (
    <Layout className={`bg-[#b0d8e4] relative overflow-hidden`}>
      <section className="flex flex-col items-center justify-center z-10 absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2">
        <h1 className="text-4xl sm:text-5xl md:text-6xl font-bold text-center mt-20">
          Crafting Unforgettable Adventures
        </h1>
        <p className="text-center font-semibold text-gray-900 mt-5">
          Travel with us and get great experiences
        </p>

        <div className="flex justify-center gap-6 mt-10">
          <Link href="/explore">
            <Button>Explore Now</Button>
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
    </Layout>
  );
}
