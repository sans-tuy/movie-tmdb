interface ICollection {
  id: number;
  name: string;
  poster_path: string;
  backdrop_path: string;
}

interface IGenre {
  id: number;
  name: string;
}

interface IProductionCompany {
  id: number;
  logo_path: string | null;
  name: string;
  origin_country: string;
}

interface IProductionCountry {
  iso_3166_1: string;
  name: string;
}

interface IVideoResult {
  iso_639_1: string;
  iso_3166_1: string;
  name: string;
  key: string;
  site: string;
  size: number;
  type: string;
  official?: boolean;
  published_at: string;
  id: string;
}

interface IVideos {
  results: VideoResult[];
}

interface ISpokenLanguage {
  english_name: string;
  iso_639_1: string;
  name: string;
}

interface IKeyword {
  id: number;
  name: string;
}

interface IKeywords {
  keywords: IKeyword[];
}

interface IRecommendedMovie {
  backdrop_path: string;
  id: number;
  title: string;
  original_title: string;
  overview: string;
  poster_path: string;
  media_type: string;
  adult: boolean;
  original_language: string;
  genre_ids: number[];
  popularity: number;
  release_date: string;
  video: boolean;
  vote_average: number;
  vote_count: number;
}

interface IRecommendations {
  page: number;
  results: RecommendedMovie[];
  total_pages: number;
  total_results: number;
}

interface IMovieList {
  description: string;
  favorite_count: number;
  id: number;
  item_count: number;
  iso_639_1: string;
  iso_3166_1: string;
  list_type: string;
  name: string;
  poster_path: string | null;
}

interface IListsResponse {
  page: number;
  results: MovieList[];
  total_pages: number;
  total_results: number;
}

interface IauthorDetails {
  name: string;
  username: string;
  avatar_path: string;
  rating: number;
}

interface IReview {
  author: string;
  content: string;
  created_at: string;
  id: string;
  url: string;
  updated_at: string;
  author_details: authorDetails;
}

interface IMovieReviews {
  page: number;
  results: MovieList[];
  total_pages: number;
  total_results: number;
}

interface ICastMovie {
  adult: boolean;
  gender: number;
  id: number;
  known_for_department: string;
  name: string;
  original_name: string;
  popularity: number;
  profile_path: string | null;
  cast_id: number;
  character: string;
  credit_id: string;
  order: number;
}

interface ICrewMovie {
  adult: boolean;
  gender: number;
  id: number;
  known_for_department: string;
  name: string;
  original_name: string;
  popularity: number;
  profile_path: string | null;
  credit_id: string;
  department: string;
  job: string;
}

interface IMovieDetails {
  adult: boolean;
  backdrop_path: string;
  belongs_to_collection: ICollection;
  budget: number;
  genres: IGenre[];
  homepage: string;
  id: number;
  imdb_id: string;
  origin_country: string[];
  original_language: string;
  original_title: string;
  overview: string;
  popularity: number;
  poster_path: string;
  production_companies: IProductionCompany[];
  production_countries: IProductionCountry[];
  release_date: string;
  revenue: number;
  runtime: number;
  spoken_languages: ISpokenLanguage[];
  status: string;
  tagline: string;
  title: string;
  video: boolean;
  vote_average: number;
  vote_count: number;
  videos: IVideos;
  keywords: IKeywords;
  reviews: IMovieReviews[];
  recommendations: IRecommendations;
  lists: IListsResponse;
  credits: {
    cast: ICastMovie[];
    crew: ICrewMovie[];
  };
  gradientStyle: string;
}

export {
  ICollection,
  IGenre,
  IProductionCompany,
  IProductionCountry,
  IVideoResult,
  IVideos,
  ISpokenLanguage,
  IKeyword,
  IKeywords,
  IRecommendedMovie,
  IRecommendations,
  IMovieList,
  IListsResponse,
  IauthorDetails,
  IReview,
  IMovieReviews,
  ICastMovie,
  ICrewMovie,
  IMovieDetails,
};
