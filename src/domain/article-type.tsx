import { IPrismicImage, IPrismicVideo } from './prismic-types';

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
    contentvideos: IPrismicVideo[],
    contentimages: Array<{ image: IPrismicImage, text: any[] }>
    thumbnail: IPrismicImage
  }
}








