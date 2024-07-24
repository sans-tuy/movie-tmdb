/** @type {import('next').NextConfig} */

const nextConfig = {
  images: {
    remotePatterns: [
      {
        protocol: "https",
        hostname: "tailwindui.com",
        port: "",
        pathname: "/img/**",
      },
      {
        protocol: "https",
        hostname: "static.nike.com",
        pathname: "/a/images/**",
      },
      {
        protocol: "https",
        hostname: "www.themoviedb.org",
        pathname: "/assets/2/v4/logos/v2/**",
      },
      {
        protocol: "https",
        hostname: "img.daisyui.com",
        pathname: "/images/**",
      },
      {
        protocol: "https",
        hostname: "image.tmdb.org",
        pathname: "/t/p/**",
      },
    ],
  },
  experimental: {
    esmExternals: "loose", // <-- add this
    serverComponentsExternalPackages: ["mongoose", "bcrypt"], // <-- and this
  },
  webpack: (config) => {
    config.externals = [...config.externals, "bcrypt", "mongoose"];
    return config;
  },
  // used for redirect to login page when user access to url '/'
  async redirects() {
    return [
      {
        source: "/",
        destination: "/home",
        permanent: false,
      },
    ];
  },
};

export default nextConfig;
