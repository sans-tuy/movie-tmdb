"use client";

import { MediaType } from "@/app/api/movie/types/movie";
import { CircularProgress } from "@nextui-org/react";
import Image from "next/image";
import { IoPlayCircleOutline } from "react-icons/io5";
import "./styles.css";
import Link from "next/link";
import { colorCircle } from "@/app/helpers/ColorManagement";

interface Props {
  name: string;
  popularity: number;
  overview: string;
  poster_path: string;
  id: number;
}

export default function CardPerson(props: Props) {
  const { overview, poster_path, name, popularity, id } = props;

  const uri = `${process.env.NEXT_PUBLIC_BASE_IMAGE_URL}${poster_path}`;
  const fallback =
    "https://www.themoviedb.org/assets/2/v4/glyphicons/basic/glyphicons-basic-4-user-grey-d8fe957375e70239d6abdd549fd7568c89281b2179b5f4470e2e12895792dfa5.svg";
  return (
    <Link href={`person/${id}`}>
      <div className="image-preview relative min-w-[150px] h-[225px] rounded-md">
        <Image
          src={poster_path ? uri : fallback}
          alt={name}
          width={150}
          height={150}
          className="rounded-md"
          quality={10}
          loading="lazy"
        />
        <div className="hover:backdrop-blur-sm hover:bg-black shadow-lg hover:opacity-40 z-10 absolute w-full h-full top-0 rounded-md flex items-center justify-center" />
        <div className="desc-movie backdrop-blur-md bg-gray-700">
          <p className="text-white">{name}</p>
          <p className="text-amber-300">{popularity?.toFixed(1)}/200</p>
          <p className="text-slate-300 text-sm ">{overview}</p>
        </div>
        <div className="absolute z-20 -bottom-5 left-2 bg-black rounded-[50%] text-white">
          <CircularProgress
            label=""
            size="md"
            value={popularity}
            formatOptions={{
              style: "decimal",
              maximumFractionDigits: 1,
            }}
            aria-label="rating"
            maxValue={200}
            showValueLabel={true}
          />
        </div>
      </div>
      <p className="font-bold mt-5">{name}</p>
    </Link>
  );
}
