import Image from "next/image";
import React from "react";
import BannerImage from "@/assets/banner.png";

const Banner = () => {
  return (
    <section className="container mx-auto px-4 py-6">
      <div className="relative overflow-hidden rounded-lg border border-white/10 bg-[#15171c]">
        <div className="grid min-h-56.25 grid-cols-1 items-center lg:grid-cols-[1.2fr_0.8fr]">
          
          {/* Content */}
          <div className="z-10 px-7 py-10 sm:px-10 lg:px-7 xl:px-10">
            <p className="mb-3 text-[8px] font-bold tracking-[0.15em] text-[#CCFF00] sm:text-[9px]">
              WORKOUT LIBRARY
            </p>

            <h1 className="max-w-125 text-4xl font-black uppercase leading-[0.9] tracking-tight text-white sm:text-5xl">
              TRAIN WITH INTENT. LOG EVERY SET.
            </h1>

            <p className="mt-4 max-w-107.5 text-[9px] leading-normal text-gray-400 sm:text-[10px]">
              FitLog is a dark, no-nonsense gym companion: pick a lift, lock it
              into today&apos;s plan, and watch the week&apos;s work add up.
            </p>

            <a
              href="#library"
              className="mt-4 inline-flex rounded-[3px] bg-[#CCFF00] px-3 py-1.5 text-[8px] font-bold uppercase text-black transition hover:bg-[#d9ff4d]"
            >
              Browse Workouts
            </a>
          </div>

          {/* Image */}
          <div className="relative flex h-full min-h-45 items-center justify-center lg:min-h-56.25 lg:justify-end">
            <Image
              src={BannerImage}
              alt="FitLog workout"
              width={500}
              height={500}
              priority
              className="h-47.5 w-auto object-contain sm:h-52.5 lg:mr-8 lg:h-53.75"
            />
          </div>
        </div>
      </div>
    </section>
  );
};

export default Banner;