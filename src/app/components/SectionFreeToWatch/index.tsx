"use client";

import { useGetFreeWatchMovie } from "@/app/hooks/movie";
import { useState } from "react";
import CardFilm from "../CardFilm";
import CardMoreFilm from "../CardMoreFilm";
import SkeletonCardFilm from "../SkeletonCardFilm";
import "./styles.css";
import { MediaType } from "@/app/api/movie/types/movie";

export default function SectionFreeToWatch() {
  const [mediaType, setMediaType] = useState<MediaType>("movie");
  const { movies, isLoading } = useGetFreeWatchMovie({
    page: 1,
    mediaType,
    language: "en-US",
  });

  return (
    <section className="flex flex-col mt-10">
      <div className="flex gap-x-5 text-lg px-10">
        <p className="font-semibold">Free To Watch</p>
        <div className="switch-filter">
          <label
            className="text-sm cursor-pointer pl-[10px]"
            htmlFor="filter-movie-free-to-watch"
          >
            Movie
          </label>
          <input
            id="filter-movie-free-to-watch"
            type="radio"
            name="radio-group-filter-free-to-watch"
            style={{ display: "none" }}
            defaultChecked
            onChange={(e) => setMediaType("movie")}
          />
          <label
            className="text-sm cursor-pointer mr-7"
            htmlFor="filter-tv-free-to-watch"
          >
            TV
          </label>
          <input
            id="filter-tv-free-to-watch"
            type="radio"
            name="radio-group-filter-free-to-watch"
            style={{ display: "none" }}
            onChange={(e) => setMediaType("tv")}
          />
          <div className="filter-free-to-watch-active" />
        </div>
      </div>
      <div className="flex overflow-x-scroll gap-10 px-10 mt-3">
        {(isLoading || !movies?.results?.length) &&
          Array(8)
            .fill(0)
            .map((idx: number) => (
              <SkeletonCardFilm key={`list-free-to-watch-movie-${idx}`} />
            ))}

        {!isLoading &&
          movies?.results &&
          movies?.results.length &&
          movies?.results?.map((movie) => (
            <CardFilm
              overview={movie.overview}
              poster_path={movie.poster_path}
              title={movie.title || movie.name}
              vote_average={movie.vote_average}
              id={movie.id}
              mediaType={mediaType}
              key={`list-free-to-watch-movie-${movie.id}`}
            />
          ))}

        <CardMoreFilm uri="/" />
      </div>
    </section>
  );
}
