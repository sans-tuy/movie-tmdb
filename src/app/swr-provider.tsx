"use client";

import { SWRConfig } from "swr";

export const SWRProvider = ({ children }: { children: React.ReactNode }) => {
  // global config for swr
  // const swrConfig = {
  //   revalidateOnFocus: true,
  //   revalidateOnReconnect: false,
  //   shouldRetryOnError: false,
  // };

  return <SWRConfig>{children}</SWRConfig>;
};
