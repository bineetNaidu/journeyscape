import { Layout } from '@/components/Layout';
import { FaGoogle, FaPhone } from 'react-icons/fa';
import Image from 'next/image';
import { Button } from '@/components/Button';

const SignupPage = () => {
  return (
    <Layout title="Sign Up | Journeyscape">
      <section className="flex">
        <div className="hidden md:flex flex-col items-center justify-center w-full">
          <Image
            src="/signup-banner.svg"
            alt="Picture of the author"
            width={600}
            height={500}
          />
        </div>
        <div className="flex flex-col items-center w-full">
          <div className="py-20 px-20 md:px-28 border-4 border-dashed rounded-lg mt-20">
            <h1 className="text-3xl sm:text-4xl md:text-5xl font-bold text-center">
              Sign Up
            </h1>
            <p className="text-center text-gray-500 mt-5">
              Where Every Journey Begins
            </p>

            <div className="mt-10">
              <Button>
                <FaGoogle />
                <span>Sign Up with Google</span>
              </Button>

              <Button disabled className="mt-3">
                <FaPhone />
                <span>Sign Up with Phone</span>
              </Button>
            </div>
          </div>
        </div>
      </section>
    </Layout>
  );
};

export default SignupPage;
