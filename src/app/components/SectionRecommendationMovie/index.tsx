import { IRecommendations } from "@/app/api/movie/types/detail-movie";
import CardFilm from "../CardFilm";
import CardMoreFilm from "../CardMoreFilm";
import "./styles.css";

interface Props {
  movies: IRecommendations;
}
export default function SectionRecommendationMovie(props: Props) {
  const { movies } = props;

  return (
    <section className="flex flex-col mt-10">
      <div className="flex gap-x-5 text-lg px-10">
        <p className="font-semibold">Recommendation Movie</p>
      </div>
      <div className="flex overflow-x-scroll gap-10 px-10 mt-3">
        {movies?.results &&
          movies?.results.length &&
          movies?.results?.map((movie) => (
            <CardFilm
              overview={movie.overview}
              poster_path={movie.poster_path}
              title={movie.title || movie.name}
              vote_average={movie.vote_average}
              id={movie.id}
              mediaType={movie.media_type}
              key={`list-popular-movie-${movie.id}`}
            />
          ))}

        <CardMoreFilm uri="/" />
      </div>
    </section>
  );
}
