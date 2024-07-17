"use client";

import { MediaType } from "@/app/api/movie/types/movie";
import { CircularProgress } from "@nextui-org/react";
import Image from "next/image";
import { IoPlayCircleOutline } from "react-icons/io5";
import "./styles.css";
import Link from "next/link";
import { colorCircle } from "@/app/helpers/ColorManagement";

interface Props {
  title: string;
  vote_average: number;
  overview: string;
  poster_path: string;
  id: number;
  mediaType: MediaType;
}

export default function CardFilm(props: Props) {
  const { overview, poster_path, title, vote_average, id, mediaType } = props;
  return (
    <Link href={`${mediaType}/${id}`}>
      <div className="image-preview relative min-w-[150px] h-[225px] rounded-md">
        <Image
          src={`${process.env.NEXT_PUBLIC_BASE_IMAGE_URL}${poster_path}`}
          alt={title}
          width={150}
          height={150}
          className="rounded-md"
          quality={10}
          loading="lazy"
        />
        <div className="hover:backdrop-blur-sm hover:bg-black shadow-lg hover:opacity-40 z-10 absolute w-full h-full top-0 rounded-md flex items-center justify-center" />
        <div className="desc-movie backdrop-blur-md bg-gray-700">
          <p className="text-white">{title}</p>
          <p className="text-amber-300">{vote_average?.toFixed(1)}/10</p>
          <p className="text-slate-300 text-sm ">{overview}</p>
        </div>
        <IoPlayCircleOutline
          size={80}
          color="white"
          className="icon absolute z-10 top-1/3 left-1/4"
        />
        <div className="absolute z-20 -bottom-5 left-2 bg-black rounded-[50%] text-white">
          <CircularProgress
            label=""
            size="md"
            value={vote_average}
            color={colorCircle(vote_average)}
            formatOptions={{
              style: "decimal",
              maximumSignificantDigits: 2,
            }}
            aria-label="rating"
            maxValue={10}
            showValueLabel={true}
          />
        </div>
      </div>
      <p className="font-bold mt-5">{title}</p>
    </Link>
  );
}
