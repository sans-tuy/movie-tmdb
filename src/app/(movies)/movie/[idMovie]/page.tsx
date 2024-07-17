import { IMovieDetails } from "@/app/api/movie/types/detail-movie";
import { FaRegCirclePlay } from "react-icons/fa6";
import { ITvMovie } from "@/app/api/movie/types/movie";
import "./styles.css";
import Image from "next/image";
import { Chip, CircularProgress, Divider } from "@nextui-org/react";
import { colorCircle } from "@/app/helpers/ColorManagement";
import CardPerson from "@/app/components/CardPerson";
import Link from "next/link";
import CardMoreFilm from "@/app/components/CardMoreFilm";
import VideoElement from "@/app/components/VideoElement";

async function getDetailMovie(idMovie: string) {
  const res = await fetch(
    `${process.env.NEXT_PUBLIC_BASE_URL_APP}/api/movie/details?idMovie=${idMovie}`,
    { cache: "no-store" }
  );

  if (!res.ok) {
    // This will activate the closest `error.js` Error Boundary
    throw new Error("Failed to fetch data");
  }

  return res.json();
}

export default async function MovieDetail({
  params,
}: {
  params: { idMovie: string };
}) {
  const detailMovie: IMovieDetails = await getDetailMovie(params.idMovie);
  const genres = detailMovie.keywords?.keywords
    ?.map((genre) => genre.name)
    .join(", ");
  const countries = detailMovie.origin_country?.join(", ");
  const year = detailMovie?.release_date?.slice(0, 4) || "-";
  const vote = `(${detailMovie.vote_average.toFixed(1)} from
  ${detailMovie.vote_count})`;
  const runTime = `${Math.floor(detailMovie.runtime / 60)}h ${
    detailMovie.runtime % 60
  }m`;

  return (
    <div className="flex flex-col gap-y-10">
      <div
        style={{
          backgroundImage: `url(${process.env.NEXT_PUBLIC_BASE_IMAGE_URL}/${detailMovie?.backdrop_path})`,
        }}
        className="w-full large-first"
      >
        <div
          style={{
            background: detailMovie.gradientStyle,
            minHeight: "500px",
          }}
          className="grid grid-cols-1 md:grid-cols-4 py-10"
        >
          <div className="md:col-span-1 md:flex hidden flex-col items-center">
            <Image
              src={`${process.env.NEXT_PUBLIC_BASE_IMAGE_URL}/${detailMovie.poster_path}`}
              quality={10}
              alt="poster-movie"
              height={100}
              width={100}
              className="rounded-md w-[200px] h-[280px] object-cover hover:scale-105 transition-all duration-300"
            />
            <button className="bg-slate-800 w-[200px] py-2 mt-3 rounded-md flex justify-center items-center gap-3">
              <FaRegCirclePlay color="white" size={20} />
              <div className=" flex flex-col justify-start items-start">
                <p className="text-slate-400 text-xs text-start">
                  Now Streaming
                </p>
                <p className="text-white text-xs font-semibold">Watch Now</p>
              </div>
            </button>
          </div>
          <div className="md:col-span-3 flex flex-col gap-y-3">
            <h1 className="text-slate-50 text-3xl font-bold">
              {detailMovie.title}
            </h1>
            <div className="flex items-center gap-x-3">
              <CircularProgress
                label=""
                size="lg"
                value={detailMovie.vote_average}
                color={colorCircle(detailMovie.vote_average)}
                formatOptions={{
                  style: "decimal",
                  maximumSignificantDigits: 2,
                }}
                style={{ color: "white" }}
                aria-label="rating"
                maxValue={10}
                showValueLabel={true}
              />
              <div className="flex flex-col justify-center gap-y-1 items-center">
                <div className="flex items-center">
                  <svg
                    className="w-4 h-4 text-yellow-300 ms-1"
                    aria-hidden="true"
                    xmlns="http://www.w3.org/2000/svg"
                    fill="currentColor"
                    viewBox="0 0 22 20"
                  >
                    <path d="M20.924 7.625a1.523 1.523 0 0 0-1.238-1.044l-5.051-.734-2.259-4.577a1.534 1.534 0 0 0-2.752 0L7.365 5.847l-5.051.734A1.535 1.535 0 0 0 1.463 9.2l3.656 3.563-.863 5.031a1.532 1.532 0 0 0 2.226 1.616L11 17.033l4.518 2.375a1.534 1.534 0 0 0 2.226-1.617l-.863-5.03L20.537 9.2a1.523 1.523 0 0 0 .387-1.575Z" />
                  </svg>
                  <svg
                    className="w-4 h-4 text-yellow-300 ms-1"
                    aria-hidden="true"
                    xmlns="http://www.w3.org/2000/svg"
                    fill="currentColor"
                    viewBox="0 0 22 20"
                  >
                    <path d="M20.924 7.625a1.523 1.523 0 0 0-1.238-1.044l-5.051-.734-2.259-4.577a1.534 1.534 0 0 0-2.752 0L7.365 5.847l-5.051.734A1.535 1.535 0 0 0 1.463 9.2l3.656 3.563-.863 5.031a1.532 1.532 0 0 0 2.226 1.616L11 17.033l4.518 2.375a1.534 1.534 0 0 0 2.226-1.617l-.863-5.03L20.537 9.2a1.523 1.523 0 0 0 .387-1.575Z" />
                  </svg>
                  <svg
                    className="w-4 h-4 text-yellow-300 ms-1"
                    aria-hidden="true"
                    xmlns="http://www.w3.org/2000/svg"
                    fill="currentColor"
                    viewBox="0 0 22 20"
                  >
                    <path d="M20.924 7.625a1.523 1.523 0 0 0-1.238-1.044l-5.051-.734-2.259-4.577a1.534 1.534 0 0 0-2.752 0L7.365 5.847l-5.051.734A1.535 1.535 0 0 0 1.463 9.2l3.656 3.563-.863 5.031a1.532 1.532 0 0 0 2.226 1.616L11 17.033l4.518 2.375a1.534 1.534 0 0 0 2.226-1.617l-.863-5.03L20.537 9.2a1.523 1.523 0 0 0 .387-1.575Z" />
                  </svg>
                  <svg
                    className="w-4 h-4 text-yellow-300 ms-1"
                    aria-hidden="true"
                    xmlns="http://www.w3.org/2000/svg"
                    fill="currentColor"
                    viewBox="0 0 22 20"
                  >
                    <path d="M20.924 7.625a1.523 1.523 0 0 0-1.238-1.044l-5.051-.734-2.259-4.577a1.534 1.534 0 0 0-2.752 0L7.365 5.847l-5.051.734A1.535 1.535 0 0 0 1.463 9.2l3.656 3.563-.863 5.031a1.532 1.532 0 0 0 2.226 1.616L11 17.033l4.518 2.375a1.534 1.534 0 0 0 2.226-1.617l-.863-5.03L20.537 9.2a1.523 1.523 0 0 0 .387-1.575Z" />
                  </svg>
                  <svg
                    className="w-4 h-4 ms-1 text-gray-300 dark:text-gray-500"
                    aria-hidden="true"
                    xmlns="http://www.w3.org/2000/svg"
                    fill="currentColor"
                    viewBox="0 0 22 20"
                  >
                    <path d="M20.924 7.625a1.523 1.523 0 0 0-1.238-1.044l-5.051-.734-2.259-4.577a1.534 1.534 0 0 0-2.752 0L7.365 5.847l-5.051.734A1.535 1.535 0 0 0 1.463 9.2l3.656 3.563-.863 5.031a1.532 1.532 0 0 0 2.226 1.616L11 17.033l4.518 2.375a1.534 1.534 0 0 0 2.226-1.617l-.863-5.03L20.537 9.2a1.523 1.523 0 0 0 .387-1.575Z" />
                  </svg>
                </div>
                <p className="text-white text-sm mix-blend-difference">
                  {vote}
                </p>
              </div>
              <Divider orientation="vertical" className="mx-3" />
              <p className="text-white text-sm mix-blend-difference">{year}</p>
              <p className="text-white text-sm mix-blend-difference">
                {runTime}
              </p>
              <Chip variant="solid" color="warning">
                HD
              </Chip>
            </div>

            <div className="text-slate-50 text-base flex flex-col gap-y-4">
              <p>
                <strong>
                  {detailMovie.original_title}
                  {". "}
                </strong>
                <em>{detailMovie.overview}</em>
              </p>
              <div>
                <p>
                  <strong>Genres: </strong>
                  {detailMovie.genres?.map((genre, idx) => (
                    <Link
                      key={`list-of-detail-genre-${genre.id}`}
                      href={`/genre/${genre.id}`}
                    >
                      {idx === 0 ? "" : ", "}
                      <em className="hover:text-blue-500">{genre.name}</em>
                    </Link>
                  ))}
                </p>
                <p>
                  <strong>Country: </strong>
                  <em>{countries}</em>
                </p>
                <p>
                  <strong>Cast: </strong>
                  {detailMovie.credits.cast?.map((cast, idx) => (
                    <Link
                      key={`list-of-detail-person-${cast.id}`}
                      href={`/person/${cast.id}`}
                    >
                      {idx === 0 ? "" : ", "}
                      <em className="hover:text-blue-500">{cast.name}</em>
                    </Link>
                  ))}
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="flex flex-col mx-24">
        <h2 className="font-semibold text-2xl">Actors/Actres</h2>
        <div className="flex overflow-x-scroll gap-x-4">
          {detailMovie.credits.cast?.slice(0, 10).map((cast) => (
            <CardPerson
              key={`list-etail-movie-cast-${cast.id}`}
              id={cast.id}
              poster_path={cast.profile_path || ""}
              overview={cast.character || ""}
              name={cast.name}
              popularity={cast.popularity}
            />
          ))}
          <CardMoreFilm uri="/" />
        </div>
      </div>
      <div className="flex flex-col mx-24">
        <h2 className="font-semibold text-2xl">Crews</h2>
        <div className="flex overflow-x-scroll gap-x-4">
          {detailMovie.credits.crew?.slice(0, 10).map((crew) => (
            <CardPerson
              key={`list-etail-movie-cast-${crew.id}`}
              id={crew.id}
              poster_path={crew.profile_path || ""}
              overview={crew.department || ""}
              name={crew.name}
              popularity={crew.popularity}
            />
          ))}
          <CardMoreFilm uri="/" />
        </div>
      </div>
      {/* https://streamku.xyz/v/WX1b20kla15yJB1 */}
      <VideoElement
        srcVideo="https://data04.streamku.xyz/mv/han/64b-Bisikan-Setan-2024.mp4"
        posterPath={detailMovie.backdrop_path || ""}
      />
    </div>
  );
}
