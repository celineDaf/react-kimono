import { Category, CategoriesEnum } from "./category-types";
import { IPrismicImage, IPrismicVideo } from './priscmic-types';

export interface IArticle {
  id: string,
  uid: string,
  type: string,
  href: string,
  tags: string[],
  first_publication_date: string,
  last_publication_date: string,
  slugs: string[],
  linked_documents?: [],
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
    contentVideos: IPrismicVideo[],
    contentImages: IPrismicImage[]
    thumbnail: IPrismicImage
  }
}








