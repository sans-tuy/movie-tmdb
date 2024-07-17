"use client";

import useSWR, { SWRResponse } from "swr";
import { fetcher } from "../fetcher";
import { IListPopularTvMovie } from "@/app/api/movie/types/movie";

interface IGetPopularMovie {
  time_window?: "day" | "week";
  language?: string;
}

function useGetTrendingTvMovie(props: IGetPopularMovie) {
  const { language = "en-US", time_window = "day" } = props;
  const { data, error, isLoading } = useSWR(
    `api/all/trending?time_window=${time_window}&language=${language}`,
    fetcher
  ) as SWRResponse<IListPopularTvMovie, any>;

  return {
    movies: data,
    isLoading,
    isError: error,
  };
}

export { useGetTrendingTvMovie };
