export interface Live {
  id: string
  title: string
  posterUrl?: string
  place?: string
  teams?: string[]
  eventLink?: string
  date: string
  slug: string
}

export interface Album {
  id: string,
  title: string,
  imageUrl: string,
  releaseYear: string,
}

export interface QueryNode<T> {
  node: T,
}