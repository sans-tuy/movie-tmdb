import Image from "next/image";
import { IoIosArrowDown } from "react-icons/io";
import "./styles.css";
import { IListGenres } from "./api/movie/types/movie";

async function getDataGenres() {
  const res = await fetch(
    `${process.env.NEXT_PUBLIC_BASE_URL_APP}/api/movie/genres`,
    {
      cache: "force-cache",
      next: { revalidate: 3600 * 24 },
    }
  );

  return res.json();
}

export default async function Sidebar({ isOpen }: { isOpen: boolean }) {
  const genres: IListGenres = await getDataGenres();
  // sidebar when screen is mobile
  return (
    <section className="relative flex md:hidden w-[330px] h-[calc(100vh-6.5rem)] bg-green-400 ">
      <div className="absolute z-40 top-0 left-0 bg-blue-400 w-[300px] h-full"></div>
    </section>
  );
}
