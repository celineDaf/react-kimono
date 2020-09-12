import { Category, CategoriesEnum } from "./category-types";

export interface IArticle {
  id: string,
  uid: string,
  type: string,
  href: string,
  tags: string[],
  first_publication_date: string,
  last_publication_date: string,
  slugs: string[],
  linked_documents: [],
  lang: string,
  alternate_languages: [],
  data: {
    title: [
      {
        type: string,
        text: string,
        spans: []
      }
    ],
    content: any[],
    contentVideos: PrismicVideo[],
    contentImages: PrismicImage[]
    thumbnail: PrismicImage
  }
}






export type PrismicImage = {
  dimensions: {
    width: number,
    height: number
  },
  url: string,
  alt: string,
  copyright: string,
};

export type PrismicVideo = {
  width: number,
  provider_name: string,
  html: string,
  thumbnail_width: number,
  title: string,
  version: string,
  author_name: string,
  height: number,
  type: string,
  provider_url: string,
  thumbnail_height: 360,
  thumbnail_url: string,
  embed_url: string
}

export type PrismicTitle = [
  {
    type: string,
    text: string,
    spans: []
  }
]

export type PrismicLink = {
  name: string,
  title: string
}

