export interface Live {
  liveId: number,
  title: string,
  posterUrl: string,
  place: string,
  teams: string[],
  eventLink: string,
}

export interface Album {
  albumId: number,
  title: string,
  imageUrl: string,
  releaseYear: string,
}

export interface QueryNode<T> {
  node: T,
}