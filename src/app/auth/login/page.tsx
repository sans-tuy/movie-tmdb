import { signIn, providerMap } from "@/auth";
import Image from "next/image";
import { redirect } from "next/navigation";

export default async function SignInPage() {
  return (
    <div className="flex overflow-hidden relative w-full h-full">
      <Image
        src="/login_pattern.svg"
        alt="Pattern Background"
        className="object-cover fixed top-0 left-0 w-screen h-screen bg-white -z-10"
        height={150}
        width={150}
      />
      <div
        aria-label="Slate cover background"
        className="absolute left-0 top-0 z-10 flex h-[275%] w-[150%] translate-x-[-70%] translate-y-[-28%] rotate-[22deg] items-center bg-zinc-900 md:translate-y-[-15%] md:rotate-[11deg]"
      ></div>
      <div className="h-dvh z-20 flex w-full items-center justify-center md:ml-[15%] md:w-[22rem]">
        <div className="flex flex-col justify-center items-center w-80 text-xl">
          <h2 className="flex items-center mb-4 space-x-2 text-3xl font-light text-zinc-600">
            <Image
              src={
                "https://www.themoviedb.org/assets/2/v4/logos/v2/blue_square_1-5bdc75aaebeb75dc7ae79426ddd9be3b2be1e342510f8202baf6bffa71d7f5c4.svg"
              }
              alt="tmdb logo"
              height={70}
              width={70}
            />
            <span className="text-4xl font-medium text-white">Clone</span>
          </h2>
          <div className="flex flex-col gap-2 p-6 m-8 w-full bg-white rounded shadow-lg">
            {Object.values(providerMap).map((provider) => (
              <form
                className="[&>div]:last-of-type:hidden"
                key={provider.id}
                action={async (formData) => {
                  "use server";
                  if (provider.id === "credentials") {
                    try {
                      await signIn(provider.id, {
                        redirectTo: "/home",
                        password: formData.get("password"),
                      });
                    } catch (error) {
                      return null;
                    }
                  } else {
                    await signIn(provider.id, { redirectTo: "/home" });
                  }
                }}
              >
                {provider.id === "credentials" && (
                  <>
                    <label className="text-base font-light text-neutral-800">
                      Email
                      <input
                        className="block flex-1 p-3 w-full font-normal rounded-md border border-gray-200 transition sm:text-sm placeholder:font-light placeholder:text-zinc-400 focus:border-zinc-500 focus:ring-zinc-500"
                        required
                        data-1p-ignore
                        placeholder="email"
                        name="email"
                        type="email"
                      />
                    </label>
                    <label className="text-base font-light text-neutral-800">
                      Password
                      <input
                        className="block flex-1 p-3 w-full font-normal rounded-md border border-gray-200 transition sm:text-sm placeholder:font-light placeholder:text-zinc-400 focus:border-zinc-500 focus:ring-zinc-500"
                        required
                        data-1p-ignore
                        placeholder="password"
                        name="password"
                        type="password"
                      />
                    </label>
                  </>
                )}
                <button
                  type="submit"
                  className="flex justify-center items-center px-4 mt-2 space-x-2 w-full h-12 text-base font-light text-white rounded transition focus:ring-2 focus:ring-offset-2 focus:outline-none bg-zinc-800 hover:bg-zinc-900 focus:ring-zinc-800"
                >
                  <span>Sign in with {provider.name}</span>
                </button>
                <div className="flex gap-2 items-center my-4">
                  <div className="flex-1 bg-neutral-300 h-[1px]" />
                  <span className="text-xs leading-4 uppercase text-neutral-500">
                    or
                  </span>
                  <div className="flex-1 bg-neutral-300 h-[1px]" />
                </div>
              </form>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}
