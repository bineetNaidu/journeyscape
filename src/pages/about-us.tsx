import { Button } from '@/components/Button';
import { Layout } from '@/components/Layout';
import { FaInstagram, FaTwitter, FaGithub, FaEnvelope } from 'react-icons/fa';
import Image from 'next/image';

const AboutUs = () => {
  return (
    <Layout title="About Us | Journeyscape">
      <section className="relative">
        <Image
          src="/about-us-banner.png"
          alt="About Us Banner"
          width={8000}
          height={8000}
          className="w-full h-[350px] md:h-[500px] lg:h-[600px] object-fill pointer-events-none bg-repeat bg-cover bg-top"
          priority
        />
      </section>
      <section className="w-11/12 md:w-6/12 mx-auto my-20 text-center">
        <h2 className="text-2xl md:text-3xl font-bold">About Us</h2>
        <i className="text-gray-500 mt-5 block text-sm">
          Unlock Extraordinary Journeys with Journeyscape
        </i>
        <p className="text-gray-500 mt-5 font-light">
          Welcome to Journeyscape, where we believe that every journey has the
          potential to be extraordinary. We are a passionate team of travel
          enthusiasts dedicated to transforming the way people plan, book, and
          experience their trips. Our mission is to empower travelers to embark
          on immersive and personalized journeys that create lifelong memories.
        </p>
      </section>

      <section className="bg-gray-100">
        <div className="w-11/12 md:w-6/12 mx-auto py-20 text-center">
          <h2 className="text-2xl md:text-3xl font-bold">Socials</h2>

          <div className="flex justify-center gap-6 mt-5">
            <a
              href="https://www.instagram.com/bineet_naidu/"
              target="_blank"
              rel="noreferrer"
            >
              <Button>
                <FaInstagram />
              </Button>
            </a>
            <a
              href="https://www.github.com/bineetNaidu/"
              target="_blank"
              rel="noreferrer"
            >
              <Button>
                <FaGithub />
              </Button>
            </a>
            <a
              href="https://www.twitter.com/bineet_naidu/"
              target="_blank"
              rel="noreferrer"
            >
              <Button>
                <FaTwitter />
              </Button>
            </a>
            <a
              href="mailto:bineetnaiduapps@gmail.com
							"
              target="_blank"
              rel="noreferrer"
            >
              <Button>
                <FaEnvelope />
              </Button>
            </a>
          </div>
        </div>
      </section>
    </Layout>
  );
};

export default AboutUs;
