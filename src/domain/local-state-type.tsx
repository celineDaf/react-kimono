import { IArticle } from "../domain/article-type";
export type InitialLocalState = {
  articles_Books: {
    name: LocalStorageNames;
    last_update: string | null;
    articles: IArticle[] | null;
  };
  articles_Kimono: {
    name: LocalStorageNames;
    last_update: string | null;
    articles: IArticle[] | null;
  };
  articles_Job: {
    name: LocalStorageNames;
    last_update: string | null;
    articles: IArticle[] | null;
  };
  articles_Japan: {
    name: LocalStorageNames;
    last_update: string | null;
    articles: IArticle[] | null;
  };
};

type LocalStorageNames =
  | "articles_Books"
  | "articles_Kimono"
  | "articles_Job"
  | "articles_Japan";

export const initialLocalState: InitialLocalState = {
  articles_Books: {
    name: "articles_Books",
    last_update: null,
    articles: null
  },
  articles_Kimono: {
    name: "articles_Kimono",
    last_update: null,
    articles: null
  },
  articles_Job: {
    name: "articles_Job",
    last_update: null,
    articles: null
  },
  articles_Japan: {
    name: "articles_Japan",
    last_update: null,
    articles: null
  }
};
