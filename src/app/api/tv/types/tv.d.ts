interface IListTvGenres {
  genres: ITvGenres[];
}

interface ITvGenres {
  id: number;
  name: string;
}

export { IListTvGenres, ITvGenres };
