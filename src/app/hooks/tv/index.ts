import useSWR, { SWRResponse } from "swr";
import { fetcher } from "../fetcher";
import { IListTv } from "@/app/api/tv/types/tv";

interface IGetSearchTv {
  query: string;
  page?: number;
}

function useGetSearchTv(props: IGetSearchTv) {
  const { query, page = 1 } = props;
  const { data, error, isLoading } = useSWR(
    `api/tv/search?query=${query}&page=${page}`,
    fetcher
  ) as SWRResponse<IListTv, any>;

  return {
    tv: data,
    isLoading,
    isError: error,
  };
}

export { useGetSearchTv };
