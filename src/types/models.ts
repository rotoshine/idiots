export interface Live {
  id: string
  title: string
  description?: string
  posterUrl?: string
  posterUrls?: Array<Poster>
  place?: string
  teams?: string[]
  eventLink?: string
  date: string
  slug: string
  priceInfo?: string
}

export interface Poster {
  src: string
  alt: string
}

export interface Album {
  id: string
  title: string
  imageUrl: string
  releaseYear: string
}

export interface QueryNode<T> {
  node: T
}
