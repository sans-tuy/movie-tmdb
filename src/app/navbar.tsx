import Image from "next/image";
import { IoIosArrowDown } from "react-icons/io";
import "./styles.css";
import { IListGenres } from "./api/movie/types/movie";

const getStaticProps = async () => {
  const res = await fetch(
    `${process.env.NEXT_PUBLIC_BASE_URL_APP}/api/movie/genres`
  );

  return res.json();
};
export default async function Navbar() {
  const genres: IListGenres = await getStaticProps();
  return (
    <>
      <nav className="relative top-0 left-0 right-0 bg-gray-800 py-8 px-4 lg:px-20 flex justify-between">
        <div className=" items-center gap-4 flex justify-between">
          {/* if screen is mobile then change image size */}
          <Image
            src={
              "https://www.themoviedb.org/assets/2/v4/logos/v2/blue_short-8e7b30f73a4020692ccca9c88bafe5dcb6f8a62a4c6bc55cd9ba82bb2cd95f6c.svg"
            }
            alt="logo"
            width={100}
            height={100}
          />
          <ul className="wrapper-nav">
            <li>
              <a href="">Home</a>
            </li>
            <li>
              <a href="">Movies </a>
              <IoIosArrowDown color="white" />

              <ul className={`drp-dwn-item`}>
                <li>
                  <a href="">Populer</a>
                </li>
                <li>
                  <a href="">Now Playing</a>
                </li>
                <li>
                  <a href="">Top Rated</a>
                </li>
                <li>
                  <a href="">Upcoming</a>
                </li>
              </ul>
            </li>
            <li>
              <a href="">TV Series </a>
              <IoIosArrowDown color="white" />
              <ul className={`drp-dwn-item`}>
                <li>
                  <a href="">Popular</a>
                </li>
                <li>
                  <a href="">Airing Today</a>
                </li>
                <li>
                  <a href="">On The Air</a>
                </li>
                <li>
                  <a href="">Top Trend</a>
                </li>
              </ul>
            </li>
            <li>
              <a href="">Genres</a>
              <IoIosArrowDown color="white" />
              <ul className={`drp-dwn-item`}>
                {genres.genres.map((genre) => (
                  <li key={`list-nav-genre-${genre.id}`}>
                    <a href="">{genre.name}</a>
                  </li>
                ))}
              </ul>
            </li>
          </ul>
        </div>
        <label className="input bg-white rounded-xl py-2 px-4 input-bordered hidden md:flex items-center gap-2">
          <input
            type="text"
            className="transition-all duration-300 grow w-24 focus:outline-none focus:w-48"
            placeholder="Search"
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
        </label>
        <label className="btn btn-circle swap-rotate">
          {/* this hidden checkbox controls the state */}
          <input type="checkbox" id="nav-mobile-btn" />

          {/* hamburger icon */}
          <svg
            className="swap-off fill-current"
            xmlns="http://www.w3.org/2000/svg"
            width="24px"
            height="24px"
            viewBox="0 0 512 512"
          >
            <path d="M64,384H448V341.33H64Zm0-106.67H448V234.67H64ZM64,128v42.67H448V128Z" />
          </svg>

          {/* close icon */}
          <svg
            className="swap-on fill-current"
            xmlns="http://www.w3.org/2000/svg"
            width="24px"
            height="24px"
            viewBox="0 0 512 512"
          >
            <polygon points="400 145.49 366.51 112 256 222.51 145.49 112 112 145.49 222.51 256 112 366.51 145.49 400 256 289.49 366.51 400 400 366.51 289.49 256 400 145.49" />
          </svg>
        </label>
      </nav>
      <nav className="mobile-nav">
        <label className="input bg-white rounded-xl py-2 px-4 input-bordered flex items-center gap-2">
          <input
            type="text"
            className="transition-all duration-300 grow w-1 focus:outline-none"
            placeholder="Search"
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
        </label>
        {/* <ul className="wrapper-mobile-nav">
          <li>
            <a href="">Home</a>
          </li>
          <li>
            Movies
            <IoIosArrowDown color="white" />
            <ul className={`drp-dwn-item`}>
              <li>
                <a href="">Populer</a>
              </li>
              <li>
                <a href="">Now Playing</a>
              </li>
              <li>
                <a href="">Top Rated</a>
              </li>
              <li>
                <a href="">Upcoming</a>
              </li>
            </ul>
          </li>
          <li>
            TV Series
            <IoIosArrowDown color="white" />
            <ul className={`drp-dwn-item`}>
              <li>
                <a href="">Popular</a>
              </li>
              <li>
                <a href="">Airing Today</a>
              </li>
              <li>
                <a href="">On The Air</a>
              </li>
              <li>
                <a href="">Top Trend</a>
              </li>
            </ul>
          </li>
          <li>
            Genres
            <IoIosArrowDown color="white" />
            <ul className={`drp-dwn-item`}>
              {genres.genres.map((genre) => (
                <li key={`list-nav-genre-${genre.id}`}>
                  <a href="">{genre.name}</a>
                </li>
              ))}
            </ul>
          </li>
        </ul> */}
      </nav>
    </>
  );
}
