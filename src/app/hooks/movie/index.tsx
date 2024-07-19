"use client";

import useSWR, { SWRResponse } from "swr";
import { fetcher } from "../fetcher";
import {
  IListGenres,
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

interface IGetSearchMovie {
  query: string;
  page?: number;
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

function useGetGenres() {
  const { data, error, isLoading } = useSWR(
    `${process.env.NEXT_PUBLIC_BASE_URL_APP}/api/movie/genres`,
    fetcher
  ) as SWRResponse<IListGenres, any>;

  return {
    genres: data,
    isLoading,
    isError: error,
  };
}

function useGetSearchMovie(props: IGetSearchMovie) {
  const { query, page = 1 } = props;
  const { data, error, isLoading } = useSWR(
    `api/movie/search?query=${query}&page=${page}`,
    fetcher
  ) as SWRResponse<IListPopularMovie, any>;

  return {
    movies: data,
    isLoading,
    isError: error,
  };
}

export {
  useGetPopularMovie,
  useGetFreeWatchMovie,
  useGetGenres,
  useGetSearchMovie,
};
