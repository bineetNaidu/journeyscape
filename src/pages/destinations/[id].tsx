import { Layout } from '@/components/Layout';
import destinations from '@/lib/destinations.json';
import experiences from '@/lib/experiences.json';
import hosts from '@/lib/hosts.json';
import accommodations from '@/lib/accommodation.json';
import { GetStaticPaths, GetStaticProps, InferGetStaticPropsType } from 'next';
import Image from 'next/image';
import { AccommodationCard } from '@/components/AccommodationCard';
import { ExperienceCard } from '@/components/ExperienceCard';

type Props = {
  destination: (typeof destinations)[0];
  destination_experiences: typeof experiences;
  destination_accommodations: typeof accommodations;
};

export const getStaticPaths: GetStaticPaths = async () => {
  const paths = destinations.map((d) => ({ params: { id: d.id.toString() } }));
  return {
    paths,
    fallback: true,
  };
};

export const getStaticProps: GetStaticProps<Props> = async ({ params }) => {
  const destination = destinations.find(
    (d) => d.id === parseInt(params?.id as string)
  );
  if (!destination) {
    return {
      notFound: true,
    };
  }

  const destination_experiences = experiences.filter(
    (e) => e.destination_id === destination!.id
  );
  const destination_accommodations = accommodations.filter(
    (a) => a.destination_id === destination!.id
  );
  return {
    props: {
      destination,
      destination_experiences,
      destination_accommodations,
    },
  };
};

export default function Page({
  destination,
  destination_experiences,
  destination_accommodations,
}: InferGetStaticPropsType<typeof getStaticProps>) {
  return (
    <Layout
      title={`${destination.name} | Journeyscape`}
      className="overflow-x-hidden"
    >
      <section className="relative">
        <Image
          src={destination.image}
          alt={destination.name}
          width={8000}
          height={8000}
          className="w-full h-[350px] md:h-[400px] lg:h-[500px] object-fill pointer-events-none bg-repeat bg-cover bg-top"
          priority
        />
      </section>

      <section className="w-11/12 md:w-6/12 mx-auto my-20 text-center">
        <h2 className="text-2xl md:text-3xl font-bold">{destination.name}</h2>
        <q className="text-gray-500 mt-5 block text-sm italic">
          {destination.description}
        </q>
      </section>

      <section className="w-11/12 mx-auto my-20">
        <h2 className="text-2xl md:text-3xl font-bold">Top Experiences</h2>
        <div className="flex gap-5 mt-5 md:p-5 overflow-y-hidden overflow-x-auto">
          {destination_experiences.length > 0 ? (
            destination_experiences.map((experience) => (
              <ExperienceCard key={experience.id} experience={experience} />
            ))
          ) : (
            <p className="text-center text-gray-500 font-bold my-5 pl-10">
              No experiences found.
            </p>
          )}
        </div>
      </section>

      <section className="w-11/12 mx-auto my-20">
        <h2 className="text-2xl md:text-3xl font-bold">Top Accommodations</h2>
        <div className="flex gap-5 mt-5 md:p-5 overflow-y-hidden overflow-x-auto">
          {destination_accommodations.length > 0 ? (
            destination_accommodations.map((accommodation) => (
              <AccommodationCard
                key={accommodation.id}
                accommodation={accommodation}
              />
            ))
          ) : (
            <p className="text-center text-gray-500 font-bold my-5 pl-10">
              No accommodations found.
            </p>
          )}
        </div>
      </section>
    </Layout>
  );
}
