import Image from 'next/image';
import accommodations from '@/lib/accommodation.json';
import { FC, useState } from 'react';
import { RiMoneyPoundCircleFill } from 'react-icons/ri';
import { FaWifi } from 'react-icons/fa';
import { MdBedroomChild } from 'react-icons/md';
import { RiComputerFill } from 'react-icons/ri';
import {
  AiTwotoneFire,
  AiFillHeart,
  AiOutlineHeart,
  AiFillStar,
} from 'react-icons/ai';

type Props = {
  accommodation: (typeof accommodations)[0];
};

export const AccommodationCard: FC<Props> = ({ accommodation }) => {
  const [isLiked, setIsLiked] = useState(true);

  return (
    <div className="relative flex w-full min-w-[25rem] max-w-[30rem] flex-col rounded-xl bg-white bg-clip-border text-gray-700 shadow-lg hover:scale-105 transition-transform mx-auto md:mx-0">
      <div className="relative mx-4 mt-4 overflow-hidden rounded-xl bg-blue-gray-500 bg-clip-border text-white shadow-lg shadow-blue-gray-500/40">
        <Image
          src="https://images.unsplash.com/photo-1499696010180-025ef6e1a8f9?ixlib=rb-4.0.3&amp;ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&amp;auto=format&amp;fit=crop&amp;w=1470&amp;q=80"
          alt="ui/ux review check"
          width={600}
          height={400}
          className="rounded-xl object-cover"
        />
        <div className="to-bg-black-10 absolute inset-0 h-full w-full bg-gradient-to-tr from-transparent via-transparent to-black/60"></div>
        <button
          className="!absolute top-4 right-4 h-8 max-h-[32px] w-8 max-w-[32px] select-none rounded-full text-center align-middle font-sans text-xs font-medium uppercase text-red-500 transition-all hover:bg-red-500/10 active:bg-red-500/30 disabled:pointer-events-none disabled:opacity-50 disabled:shadow-none"
          type="button"
          onClick={() => setIsLiked(!isLiked)}
        >
          <span className="absolute top-1/2 left-1/2 -translate-y-1/2 -translate-x-1/2 transform">
            {isLiked ? <AiFillHeart size={25} /> : <AiOutlineHeart size={25} />}
          </span>
        </button>
      </div>
      <div className="p-6">
        <div className="mb-3 flex items-center justify-between">
          <h5 className="block font-sans text-xl font-medium leading-snug tracking-normal text-blue-gray-900 antialiased">
            {accommodation.title}
          </h5>
          <p className="flex items-center gap-1.5 font-sans text-base font-normal leading-relaxed text-blue-gray-900 antialiased">
            <AiFillStar className="-mt-0.5 h-5 w-5 text-yellow-700" />
            5.0
          </p>
        </div>
        <p className="block font-sans text-base font-light leading-relaxed text-gray-700 antialiased">
          {accommodation.description}
        </p>
        <div className="mt-4 flex gap-3">
          <div className="relative group inline-flex">
            <span className="cursor-pointer rounded-full border border-pink-500/5 bg-pink-500/5 p-3 text-pink-500 transition-colors hover:border-pink-500/10 hover:bg-pink-500/10 hover:!opacity-100 group-hover:opacity-70">
              <RiMoneyPoundCircleFill />
            </span>
            <span className="hidden group-hover:block absolute z-50 whitespace-normal break-words rounded-lg bg-black py-1.5 px-3 font-sans text-sm font-normal text-white focus:outline-none top-[-60%] left-1/2 transform -translate-x-1/2 min-w-max">
              ${accommodation.price_per_night}/night
            </span>
          </div>
          <div className="relative group inline-flex">
            <span className="cursor-pointer rounded-full border border-pink-500/5 bg-pink-500/5 p-3 text-pink-500 transition-colors hover:border-pink-500/10 hover:bg-pink-500/10 hover:!opacity-100 group-hover:opacity-70">
              <FaWifi />
            </span>
            <span className="hidden group-hover:block absolute z-50 whitespace-normal break-words rounded-lg bg-black py-1.5 px-3 font-sans text-sm font-normal text-white focus:outline-none top-[-60%] left-1/2 transform -translate-x-1/2 min-w-max">
              Free Wifi
            </span>
          </div>
          <div className="relative group inline-flex">
            <span className="cursor-pointer rounded-full border border-pink-500/5 bg-pink-500/5 p-3 text-pink-500 transition-colors hover:border-pink-500/10 hover:bg-pink-500/10 hover:!opacity-100 group-hover:opacity-70">
              <MdBedroomChild />
            </span>
            <span className="hidden group-hover:block absolute z-50 whitespace-normal break-words rounded-lg bg-black py-1.5 px-3 font-sans text-sm font-normal text-white focus:outline-none top-[-60%] left-1/2 transform -translate-x-1/2 min-w-max">
              2 Bedrooms
            </span>
          </div>
          <div className="relative group inline-flex">
            <span className="cursor-pointer rounded-full border border-pink-500/5 bg-pink-500/5 p-3 text-pink-500 transition-colors hover:border-pink-500/10 hover:bg-pink-500/10 hover:!opacity-100 group-hover:opacity-70">
              <RiComputerFill />
            </span>
            <span className="hidden group-hover:block absolute z-50 whitespace-normal break-words rounded-lg bg-black py-1.5 px-3 font-sans text-sm font-normal text-white focus:outline-none top-[-60%] left-1/2 transform -translate-x-1/2 min-w-max">
              64`&apos;` HDTV
            </span>
          </div>

          <div className="relative group inline-flex">
            <span className="cursor-pointer rounded-full border border-pink-500/5 bg-pink-500/5 p-3 text-pink-500 transition-colors hover:border-pink-500/10 hover:bg-pink-500/10 hover:!opacity-100 group-hover:opacity-70">
              <AiTwotoneFire />
            </span>
            <span className="hidden group-hover:block absolute z-50 whitespace-normal break-words rounded-lg bg-black py-1.5 px-3 font-sans text-sm font-normal text-white focus:outline-none top-[-60%] left-1/2 transform -translate-x-1/2 min-w-max">
              Fire alert
            </span>
          </div>
        </div>
      </div>
      <div className="p-6 pt-3">
        <button
          className="block w-full select-none rounded-lg bg-orange-500 py-3.5 px-7 text-center align-middle font-sans text-sm font-bold uppercase text-white shadow-md shadow-pink-500/20 transition-all hover:shadow-lg hover:shadow-pink-500/40 focus:opacity-[0.85] focus:shadow-none active:opacity-[0.85] active:shadow-none disabled:pointer-events-none disabled:opacity-50 disabled:shadow-none"
          type="button"
        >
          Reserve
        </button>
      </div>
    </div>
  );
};
