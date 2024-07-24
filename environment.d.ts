declare namespace NodeJS {
  export interface ProcessEnv {
    readonly API_SECRET_KEY: string;
    readonly NEXT_PUBLIC_BASE_URL_APP: string;
    readonly NEXT_PUBLIC_BASE_IMAGE_URL: string;
    readonly TMDB_API_READ_ACCESS_TOKEN_AUTH: string;
    readonly TMDB_API_READ_ACCESS_TOKEN: string;
    readonly NEXT_PUBLIC_BASE_URL: string;
    readonly PROJECT_NAME: string;
    readonly PROJECT_ID: string;
    readonly AUTH_GOOGLE_ID: string;
    readonly AUTH_GOOGLE_SECRET: string;
    readonly AUTH_SECRET: string;
    readonly MONGODB_URI: string;
  }
}
