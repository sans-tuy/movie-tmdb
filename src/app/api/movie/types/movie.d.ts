type MediaType = "movie" | "tv";

interface IListPopularMovie {
  page: number;
  results: IMovie[];
  total_pages: number;
  total_results: number;
}

interface IListPopularTvMovie {
  page: number;
  results: ITvMovie[];
  total_pages: number;
  total_results: number;
}

interface IMovie {
  adult: boolean;
  backdrop_path: string;
  genre_ids: number[];
  id: number;
  original_language: string;
  original_title: string;
  overview: string;
  popularity: number;
  poster_path: string;
  release_date: string;
  title: string;
  video: boolean;
  vote_average: number;
  vote_count: number;
}

interface ITvMovie extends IMovie {
  media_type: MediaType;
  name: string;
  original_name: string;
  origin_country: string[];
  first_air_date: string;
}

interface IListGenres {
  genres: IGenres[];
}

interface IGenres {
  id: number;
  name: string;
}

export {
  IListPopularMovie,
  IGenres,
  IListGenres,
  IMovie,
  ITvMovie,
  MediaType,
  IListPopularTvMovie,
};
