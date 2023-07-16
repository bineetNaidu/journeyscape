import Image from 'next/image';
import { FC } from 'react';

type Props = {
  name: string;
  image: string;
};

export const DestinationCard: FC<Props> = ({ name, image }) => {
  return (
    <div className="relative min-w-[170px] h-[250px] group overflow-hidden rounded-lg duration-300">
      <Image
        src={image}
        alt={name}
        width={170}
        height={250}
        className="rounded-lg w-full h-full group-hover:scale-105 transition-all"
      />

      <div className="absolute bottom-0 w-full h-full bg-opacity-50 rounded-lg flex flex-col items-baseline justify-end bg-gradient-to-t from-gray-900 to-transparent">
        <h3 className="text-white text-lg font-semibold pl-4 pb-2">{name}</h3>
      </div>
    </div>
  );
};
