"use client";

import { useGetPopularMovie } from "@/app/hooks/movie";
import CardFilm from "../CardFilm";
import CardMoreFilm from "../CardMoreFilm";
import SkeletonCardFilm from "../SkeletonCardFilm";
import "./styles.css";
import { useGetTrendingTvMovie } from "@/app/hooks/tv_movie";
import { useState } from "react";

export default function SectionTrending() {
  const [timeWindow, setTimeWindow] = useState<"day" | "week">("day");
  const { movies, isLoading } = useGetTrendingTvMovie({
    time_window: timeWindow,
    language: "en-US",
  });

  return (
    <section className="flex flex-col mt-10">
      <div className="flex gap-x-5 text-lg px-10">
        <p className="font-semibold">Trending</p>
        <div className="switch-filter">
          <label
            className="text-sm cursor-pointer pl-[10px]"
            htmlFor="today-filter-popular"
          >
            Today
          </label>
          <input
            id="today-filter-popular"
            type="radio"
            name="radio-group-filter-popular"
            style={{ display: "none" }}
            defaultChecked
            onChange={(e) => setTimeWindow("day")}
          />
          <label
            className="text-sm cursor-pointer"
            htmlFor="this-week-filter-popular"
          >
            This week
          </label>
          <input
            id="this-week-filter-popular"
            type="radio"
            name="radio-group-filter-popular"
            style={{ display: "none" }}
            onChange={(e) => setTimeWindow("week")}
          />
          <div className="filter-popular-active" />
        </div>
      </div>
      <div className="flex overflow-x-scroll gap-10 px-10 mt-3">
        {(isLoading || !movies?.results?.length) &&
          Array(8)
            .fill(0)
            .map((idx: number) => (
              <SkeletonCardFilm key={`list-popular-movie-${idx}`} />
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
              mediaType={movie.media_type}
              key={`list-popular-movie-${movie.id}`}
            />
          ))}

        <CardMoreFilm uri="/" />
      </div>
    </section>
  );
}
