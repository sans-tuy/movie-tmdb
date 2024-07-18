import Image from "next/image";

export default function Footer() {
  return (
    <footer className="bg-white  dark:bg-gray-900 m-4">
      <div className="w-full max-w-screen-xl mx-auto p-4 md:py-8">
        <div className="sm:flex sm:items-center sm:justify-between">
          <a
            href="https://www.themoviedb.org/"
            className="flex items-center mb-4 sm:mb-0 space-x-3 rtl:space-x-reverse"
          >
            <Image
              src="https://www.themoviedb.org/assets/2/v4/logos/v2/blue_square_2-d537fb228cf3ded904ef09b136fe3fec72548ebc1fea3fbbd1ad9e36364db38b.svg"
              className="h-8"
              height={200}
              width={200}
              alt="Tmdb Logo"
            />
            <span className="self-center text-2xl font-semibold whitespace-nowrap dark:text-white">
              TMDB
            </span>
          </a>
          <ul className="flex flex-wrap items-center mb-6 text-sm font-medium text-gray-500 sm:mb-0 dark:text-gray-400">
            <li>
              <a
                href="https://www.themoviedb.org/about"
                className="hover:underline me-4 md:me-6"
              >
                About
              </a>
            </li>
            <li>
              <a
                href="https://www.themoviedb.org/privacy-policy"
                className="hover:underline me-4 md:me-6"
              >
                Privacy Policy
              </a>
            </li>
            <li>
              <a
                href="https://www.themoviedb.org/talk"
                className="hover:underline me-4 md:me-6"
              >
                Support
              </a>
            </li>
            <li>
              <a
                href="https://www.themoviedb.org/about/staying-in-touch"
                className="hover:underline"
              >
                Contact
              </a>
            </li>
          </ul>
        </div>
        <hr className="my-6 border-gray-200 sm:mx-auto dark:border-gray-700 lg:my-8" />
        <span className="block text-sm text-gray-500 sm:text-center dark:text-gray-400">
          © 2024{" "}
          <a href="https://www.themoviedb.org/" className="hover:underline">
            TMDB™
          </a>
          . All Rights Reserved.
        </span>
      </div>
    </footer>
  );
}
