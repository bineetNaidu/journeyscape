import { Layout } from '@/components/Layout';
import Link from 'next/link';

export default function NotFound404Page() {
  return (
    <Layout>
      <div className="flex flex-col items-center justify-center h-full mt-20">
        <h1 className="text-6xl font-bold">404</h1>
        <p className="text-2xl font-semibold my-2">Page Not Found</p>
        <Link href="/">
          <p className="text-orange-400 hover:text-orange-500 transition-all">
            Go back home
          </p>
        </Link>
      </div>
    </Layout>
  );
}
