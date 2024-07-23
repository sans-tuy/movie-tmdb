import { signIn } from "next-auth/react";
import Image from "next/image";

interface Props {
  name: string;
  id: string;
}

export async function ButtonLoginGoogle({ id, name }: Props) {
  return (
    <form
      action={async () => {
        "use server";
        await signIn(id, { redirectTo: "/home" });
      }}
    >
      <button
        className="px-4 py-2 border flex gap-2 border-slate-200 dark:border-slate-700 rounded-lg text-slate-700 dark:text-slate-200 hover:border-slate-400 dark:hover:border-slate-500 hover:text-slate-900 dark:hover:text-slate-300 hover:shadow transition duration-150"
        type="submit"
      >
        <Image
          className="w-6 h-6"
          height={70}
          width={70}
          src="https://www.svgrepo.com/show/475656/google-color.svg"
          loading="lazy"
          alt="google logo"
        />
        <span>Login with {name}</span>
      </button>
    </form>
  );
}
