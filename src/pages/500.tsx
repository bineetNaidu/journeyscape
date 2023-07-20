import { Layout } from '@/components/Layout';
import Link from 'next/link';

export default function ServerErr500Page() {
  return (
    <Layout>
      <div className="flex flex-col items-center justify-center mt-20">
        <h1 className="text-6xl font-bold">500</h1>
        <p className="text-2xl font-semibold my-2">Server Error</p>
        <Link href="/">
          <p className="text-orange-400 hover:text-orange-500 transition-all">
            Go back home
          </p>
        </Link>
      </div>
    </Layout>
  );
}
