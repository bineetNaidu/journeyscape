import { Layout } from '@/components/Layout';
import Image from 'next/image';
import { SignIn } from '@clerk/nextjs';

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
          <SignIn />
        </div>
      </section>
    </Layout>
  );
};

export default SignupPage;
