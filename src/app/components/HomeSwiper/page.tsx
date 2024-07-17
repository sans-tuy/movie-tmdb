"use client";

import { IMovie } from "@/app/api/movie/types/movie";
import { useEffect, useState } from "react";
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";
import { Autoplay, Navigation, Pagination } from "swiper/modules";
import { Swiper, SwiperSlide } from "swiper/react";
import "./styles.css";

export default function HomeSwiper() {
  const [slideData, setslideData] = useState<IMovie[]>([]);
  useEffect(() => {
    const slideScreenData = async () => {
      const res = await fetch(
        `${process.env.NEXT_PUBLIC_BASE_URL_APP}/api/movie/popular`
      );
      if (res.ok) {
        const response = await res.json();
        setslideData(response.results.slice(0, 3));
      } else {
        setslideData([]);
      }
    };
    slideScreenData();
  }, []);

  if (!slideData.length) {
    return (
      <div
        role="status"
        className="space-y-8 animate-pulse md:space-y-0 md:space-x-8 rtl:space-x-reverse md:flex md:items-center"
      >
        <div className="flex items-center justify-center w-full h-[50vh] bg-gray-300 rounded dark:bg-gray-700">
          <svg
            className="w-10 h-10 text-gray-200 dark:text-gray-600"
            aria-hidden="true"
            xmlns="http://www.w3.org/2000/svg"
            fill="currentColor"
            viewBox="0 0 20 18"
          >
            <path d="M18 0H2a2 2 0 0 0-2 2v14a2 2 0 0 0 2 2h16a2 2 0 0 0 2-2V2a2 2 0 0 0-2-2Zm-5.5 4a1.5 1.5 0 1 1 0 3 1.5 1.5 0 0 1 0-3Zm4.376 10.481A1 1 0 0 1 16 15H4a1 1 0 0 1-.895-1.447l3.5-7A1 1 0 0 1 7.468 6a.965.965 0 0 1 .9.5l2.775 4.757 1.546-1.887a1 1 0 0 1 1.618.1l2.541 4a1 1 0 0 1 .028 1.011Z" />
          </svg>
        </div>
      </div>
    );
  }

  return (
    <Swiper
      pagination={{ type: "bullets", clickable: true }}
      autoplay={true}
      loop={true}
      modules={[Autoplay, Navigation, Pagination]}
      className="home-swiper"
    >
      {slideData.map((movie) => (
        <SwiperSlide key={`list-of-slide-movies-${movie.id}`}>
          <div
            className="h-full w-full absolute left-0 top-0"
            style={{
              background: `url(${process.env.NEXT_PUBLIC_BASE_IMAGE_URL}${movie.backdrop_path}) center center / cover scroll no-repeat`,
            }}
          ></div>
          <div className="h-full w-full absolute left-0 top-0 bg-black opacity-20"></div>
          <div className="relative z-10 h-full flex flex-col p-28 gap-10">
            <p className="text-xl sm:text-5xl font-bold text-white">
              {movie.title}
            </p>
            <p className="text-cyan-400 text-md">
              {movie.vote_average} <span className="text-white">/10</span>
            </p>
            <p className="text-slate-300 truncate text-xl">{movie.overview}</p>
          </div>
        </SwiperSlide>
      ))}
    </Swiper>
  );
}
