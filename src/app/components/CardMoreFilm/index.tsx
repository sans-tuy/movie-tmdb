import Link from "next/link";
import { MdOutlineSlowMotionVideo } from "react-icons/md";

export default function CardMoreFilm({ uri }: { uri: string }) {
  return (
    <Link href={uri}>
      <div className="image-preview relative min-w-[150px] h-[225px] rounded-md bg-slate-400 flex items-center flex-col justify-center text-white">
        <MdOutlineSlowMotionVideo size={60} color="white" />
        More
      </div>
    </Link>
  );
}
