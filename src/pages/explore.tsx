import DatePicker from 'react-datepicker';
import destinations from '@/lib/destinations.json';
import { Button } from '@/components/Button';
import { Layout } from '@/components/Layout';
import { useState } from 'react';

import 'react-datepicker/dist/react-datepicker.css';
import { DestinationCard } from '@/components/DestinationCard';

const Explore = () => {
  const [dateRange, setDateRange] = useState<[Date | null, Date | null]>([
    null,
    null,
  ]);
  const [startDate, endDate] = dateRange;

  return (
    <Layout className="overflow-hidden">
      <section className="bg-green-200">
        <div className="w-11/12 md:w-6/12 mx-auto py-20 place-content-center">
          <div className="flex flex-col">
            <h1 className="text-center text-2xl md:text-4xl font-bold text-gray-900">
              Explore your destinations
            </h1>
            <div className="flex flex-col sm:flex-row gap-2 mt-5 mx-auto">
              <input
                type="text"
                placeholder="destinations"
                className="border-2 border-gray-700 hover:border-orange-400 hover:text-gray-900 hover:shadow-2xl hover:scale-105 px-4 py-2 rounded-lg transition-all bg-transparent placeholder:text-gray-700 placeholder-opacity-50 focus:outline-none"
              />
              <DatePicker
                selectsRange
                startDate={startDate}
                endDate={endDate}
                onChange={(update) => {
                  setDateRange(update);
                }}
                withPortal
                isClearable
                placeholderText="Select Date"
                className="border-2 border-gray-700 hover:border-orange-400 hover:text-gray-900 hover:shadow-2xl hover:scale-105 px-4 py-2 rounded-lg transition-all bg-transparent placeholder:text-gray-700 placeholder-opacity-50 focus:outline-none w-full"
              />
              <Button className="mt-0">Search</Button>
            </div>
          </div>
        </div>
      </section>

      <section className="w-11/12 mx-auto py-10">
        <h1 className="font-bold text-xl mb-5">Top Destinations</h1>

        <div className="flex overflow-auto gap-3">
          {destinations.map((destination) => (
            <DestinationCard
              key={destination.id}
              image={destination.image}
              name={destination.name}
            />
          ))}
        </div>
      </section>
    </Layout>
  );
};

export default Explore;
