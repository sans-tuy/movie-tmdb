"use client";

import { useSearchNavbar } from "@/app/hooks/tv_movie";
import { Chip, Pagination, Tab, Tabs } from "@nextui-org/react";
import { useSearchParams } from "next/navigation";
import { MdMovieFilter } from "react-icons/md";
import { HiMiniTv } from "react-icons/hi2";
import CardFilm from "@/app/components/CardFilm";
import { useGetSearchMovie } from "@/app/hooks/movie";
import { useMemo, useState } from "react";
import { useGetSearchTv } from "@/app/hooks/tv";
import { MediaType } from "@/app/api/movie/types/movie";

export default function SearchPage() {
  const [currPage, setCurrPage] = useState(1);
  const [currTab, setCurrTab] = useState<MediaType>("movie");
  const searchParams = useSearchParams();
  const search = searchParams.get("search");
  const { movies, isLoading } = useGetSearchMovie({
    query: search || "",
    page: currPage,
  });
  const { tv, isLoading: isLoadingTv } = useGetSearchTv({
    query: search || "",
    page: currPage,
  });

  const dataToRender = useMemo(() => {
    if (currTab === "movie") {
      return movies;
    } else {
      return tv;
    }
  }, [currTab, movies, tv]);

  const handleChangetab = (key: any) => {
    setCurrPage(1);
    setCurrTab(key);
  };

  return (
    <div className="px-2 md:px-32 md:py-10 md:min-h-[67vh] md:gap-y-10 flex flex-col justify-between">
      <div className="flex w-full flex-col gap-y-4">
        <p className="uppercase">SEARCH RESULT : {search}</p>
        <Tabs
          aria-label="Options"
          color="primary"
          size="lg"
          variant="underlined"
          selectedKey={currTab}
          onSelectionChange={handleChangetab}
          classNames={{
            tabList:
              "gap-6 w-full relative rounded-none p-0 border-b border-divider",
            cursor: "w-full bg-[#22d3ee]",
            tab: "max-w-fit px-0 h-12",
            tabContent: "group-data-[selected=true]:text-[#06b6d4]",
          }}
        >
          <Tab
            key={"movie"}
            title={
              <div className="flex items-center space-x-2">
                <MdMovieFilter />
                <span>Movies</span>
                <Chip size="sm" variant="faded">
                  {movies?.total_results || 0}
                </Chip>
              </div>
            }
          />
          <Tab
            key={"tv"}
            title={
              <div className="flex items-center space-x-2">
                <HiMiniTv />
                <span>Tv Series</span>
                <Chip size="sm" variant="faded">
                  {tv?.total_results || 0}
                </Chip>
              </div>
            }
          />
        </Tabs>
        <div className="flex md:gap-8 px-4 md:px-0 flex-wrap justify-between md:justify-start">
          {dataToRender?.results &&
            dataToRender.results.map((movie) => (
              <CardFilm
                key={`list-popular-${currTab}-${movie.id}`}
                id={movie.id}
                mediaType={currTab}
                overview={movie.overview}
                poster_path={movie.poster_path}
                title={movie.title}
                vote_average={movie.vote_average}
              />
            ))}
          {(isLoading || isLoadingTv) && <p>Loading...</p>}
        </div>
      </div>
      <p>Page : {currPage}</p>
      <div className="flex flex-col items-center">
        {dataToRender?.total_pages && (
          <Pagination
            size="lg"
            showControls
            total={dataToRender?.total_pages || 0}
            onChange={setCurrPage}
            page={currPage}
          />
        )}
      </div>
    </div>
  );
}
