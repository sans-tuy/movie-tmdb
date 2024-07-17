import HomeSwiper from "@/app/components/HomeSwiper/page";
import SectionFreeToWatch from "@/app/components/SectionFreeToWatch";
import SectionMovie from "@/app/components/SectionTrending";
import { SWRProvider } from "@/app/swr-provider";

export default function Home() {
  return (
    <SWRProvider>
      <main>
        <HomeSwiper />
        {/* <video
        poster="https://i0.wp.com/www.themoviedb.org/t/p/w780/xg27NrXi7VXCGUr7MG75UqLl6Vg.jpg"
        controls
        playsInline
      >
        <source src="https://raw.githubusercontent.com/bandriseman/myproject/main/d1sn3y.mp4" />
      </video> */}

        <SectionMovie />
        <SectionFreeToWatch />
      </main>
    </SWRProvider>
  );
}
