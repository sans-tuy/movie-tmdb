"use client";

// import useIsLogin from "@/app/api/auth/authentication";
import Image from "next/image";
import Link from "next/link";
import { redirect, useRouter } from "next/navigation";
import { useState } from "react";

export default function Login() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("cityslicka");
  const router = useRouter();

  // const { data, isLoading, isError } = useIsLogin();
  const onLogin = async () => {
    // console.log(data, "data fetch", isLoading, isError);
    // const dataLogin = new FormData();
    // dataLogin.append("email", email);
    // dataLogin.append("password", password);
    // // console.log(dataLogin.get("email"), dataLogin.get("password"));
    // try {
    //   const response = await fetch("/api/auth", {
    //     method: "POST",
    //     body: dataLogin,
    //   });
    //   if (response.ok) {
    //     router.push("/about");
    //   } else {
    //     console.error("Login failed", response.statusText);
    //   }
    // } catch (error) {
    //   console.error("Error during login:", error);
    // }
  };

  // console.log(data, "data fetch");

  return (
    <div className="flex min-h-full flex-col justify-center px-6 py-12 lg:px-8">
      <div className="sm:mx-auto sm:w-full sm:max-w-sm">
        <Image
          className="mx-auto h-10 w-auto"
          src="https://tailwindui.com/img/logos/mark.svg"
          width={600}
          height={600}
          alt="Your Company"
        />
        <h2 className="mt-10 text-center text-2xl font-bold leading-9 tracking-tight text-gray-900">
          Sign in to your account
        </h2>
      </div>

      <div className="border-slate-200 border rounded-md p-16 mt-10 lg:max-w-[600px] sm:mx-auto sm:w-full">
        {/* <form className="space-y-6 " onSubmit={onLogin} method="POST"> */}
        <div>
          <label
            htmlFor="email"
            className="block text-sm font-medium leading-6 text-gray-900"
          >
            Email address
          </label>
          <div className="mt-2">
            <input
              id="email"
              name="email"
              type="email"
              autoComplete="email"
              required
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              className="block w-full rounded-md border-0 px-2 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
            />
          </div>
        </div>

        <div>
          <div className="flex items-center justify-between">
            <label
              htmlFor="password"
              className="block text-sm font-medium leading-6 text-gray-900"
            >
              Password
            </label>
          </div>
          <div className="mt-2">
            <input
              id="password"
              name="password"
              type="password"
              autoComplete="current-password"
              required
              className="block w-full rounded-md border-0 px-2 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
            />
          </div>
        </div>

        <div>
          <button
            // type="submit"
            onClick={onLogin}
            className="flex w-full justify-center rounded-md bg-indigo-600 px-3 py-1.5 text-sm font-semibold leading-6 text-white shadow-sm hover:bg-indigo-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600"
          >
            Sign in
          </button>
        </div>
        {/* </form> */}

        <p className="mt-10 text-center text-sm text-gray-500">
          don&apos;t have an account?
          <Link
            href={"/register"}
            className="font-semibold leading-6 text-indigo-600 hover:text-indigo-500"
          >
            Register here
          </Link>
        </p>
      </div>
    </div>
  );
}
