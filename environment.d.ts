declare namespace NodeJS {
  export interface ProcessEnv {
    readonly API_SECRET_KEY: string;
    readonly NEXT_PUBLIC_BASE_URL_APP: string;
    readonly NEXT_PUBLIC_BASE_IMAGE_URL: string;
    readonly TMDB_API_READ_ACCESS_TOKEN_AUTH: string;
    readonly TMDB_API_READ_ACCESS_TOKEN: string;
    readonly NEXT_PUBLIC_BASE_URL: string;
  }
}
