import Link from "next/link";

export default function Sidebar() {
  return (
    <div className="fixed top-20 h-screen z-10 left-0 bg-gray-800 py-8 text-white px-8">
      <ul className="flex flex-col gap-y-3 w-80">
        <Link href={"/"}>
          <li className="cursor-pointer">Home</li>
        </Link>
        <Link href={"/about"}>
          <li className="cursor-pointer">About</li>
        </Link>
        <Link href={"/about/profile"}>
          <li className="cursor-pointer">Profile</li>
        </Link>
      </ul>
    </div>
  );
}
