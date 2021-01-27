export interface Live {
  title: string
  seoDescription?: string
  posters: Poster[]
  place: string
  bands: Band[]
  eventLink: string
  date: string
  slug: string
  priceInfo: string
  ticketLink: string
  content: string
}

export interface Poster {
  url: string
}

export interface Album {
  slug: string
  title: string
  imageUrl: string
  releaseDate: string
  streamingLinks: string
  content: string
  purchaseLink: string
  covers: [
    {
      url: string
    }
  ]
  songs: Song[]
}

export interface QueryNode<T> {
  node: T
}

export interface StreamingLink {
  name: string
  link: string
}

export interface Band {
  name: string
  instagramUrl: string
}

export interface Song {
  track: number
  name: string
}
