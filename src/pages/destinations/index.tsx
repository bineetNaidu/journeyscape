import { Layout } from '@/components/Layout';
import dynamic from 'next/dynamic';
import { Suspense } from 'react';

const Destinations = () => {
  const MapWithNoSSR = dynamic(() => import('../../components/Map'), {
    ssr: false,
  });
  return (
    <Layout>
      <Suspense fallback={<p>Loading...</p>}>
        <div id="map" className="w-full h-screen">
          <MapWithNoSSR />
        </div>
      </Suspense>
    </Layout>
  );
};

export default Destinations;
