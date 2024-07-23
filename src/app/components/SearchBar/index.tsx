"use client";

import useDebounce from "@/app/hooks/debounce";
import { useSearchNavbar } from "@/app/hooks/tv_movie";
import Image from "next/image";
import Link from "next/link";
import { useRouter } from "next/navigation";
import { ChangeEvent, useState } from "react";
import "./styles.css";

export default function SearchBar() {
  const router = useRouter();
  const [searchValue, setsearchValue] = useState("");
  const debounceSearch = useDebounce(searchValue, 500);

  const handleChangeSearch = (e: ChangeEvent<HTMLInputElement>) => {
    setsearchValue(e.target.value);
  };

  const { results, isLoading } = useSearchNavbar({
    searchKeyword: debounceSearch,
  });

  const handleKeydown = (e: any) => {
    if (e.key === "Enter") {
      setsearchValue("");
      router.push(`/search?search=${searchValue}`);
    }
  };

  return (
    <label className="searchbar">
      <input
        value={searchValue}
        onChange={handleChangeSearch}
        type="text"
        className="transition-all duration-300 grow w-24 focus:outline-none focus:w-48"
        placeholder="Search"
        onKeyDown={handleKeydown}
      />
      <svg
        xmlns="http://www.w3.org/2000/svg"
        viewBox="0 0 16 16"
        fill="currentColor"
        className="h-4 w-4 opacity-70"
      >
        <path
          fillRule="evenodd"
          d="M9.965 11.026a5 5 0 1 1 1.06-1.06l2.755 2.754a.75.75 0 1 1-1.06 1.06l-2.755-2.754ZM10.5 7a3.5 3.5 0 1 1-7 0 3.5 3.5 0 0 1 7 0Z"
          clipRule="evenodd"
        />
      </svg>
      {!isLoading && results?.results && results?.results.length > 0 && (
        <div className="wrapper-searchbar-items">
          {results?.results?.slice(0, 3)?.map((result) => (
            <Link
              key={`list-searchnav-result-${result.id}`}
              className="searchbar-items"
              href={`/${result.media_type}/${result.id}`}
            >
              <Image
                src={`${process.env.NEXT_PUBLIC_BASE_IMAGE_URL}/${result?.backdrop_path}`}
                alt="img-search"
                width={50}
                height={50}
                quality={10}
                className="rounded-md"
              />
              <p className="text-xs line-clamp-2">
                {result.title || result.name} (
                {result.first_air_date || result.release_date})
              </p>
            </Link>
          ))}
        </div>
      )}
    </label>
  );
}
