"use client";

import useSWR, { SWRResponse } from "swr";
import { fetcher } from "../fetcher";
import {
  IListPopularMovie,
  IListPopularTvMovie,
} from "@/app/api/movie/types/movie";

type WATCH_MONETIZATION_TYPES = "flatrate" | "free" | "ads" | "rent" | "buy";

interface IGetPopularMovie {
  page?: number;
  language?: string;
}

interface IGetFreeWatchMovie extends IGetPopularMovie {
  mediaType: "tv" | "movie";
}

function useGetPopularMovie(props: IGetPopularMovie) {
  const { language = "en-US", page = 1 } = props;
  const { data, error, isLoading } = useSWR(
    `api/movie/popular?page=${page}&language=${language}`,
    fetcher
  ) as SWRResponse<IListPopularMovie, any>;

  return {
    movies: data,
    isLoading,
    isError: error,
  };
}

function useGetFreeWatchMovie(props: IGetFreeWatchMovie) {
  const { language = "en-US", page = 1, mediaType = "movie" } = props;
  const { data, error, isLoading } = useSWR(
    `api/movie/discover?page=${page}&language=${language}&media_type=${mediaType}`,
    fetcher
  ) as SWRResponse<IListPopularTvMovie, any>;

  return {
    movies: data,
    isLoading,
    isError: error,
  };
}

export { useGetPopularMovie, useGetFreeWatchMovie };
