import { Category, CategoriesEnum } from "./category-types";
export interface IArticle {
  id?: string;
  tags: string[];
  title: string;
  category: Category | CategoriesEnum.NULL;
  creationDate: string;
  text: string | undefined;
  photos: string[];
}

export let ArticleInit: IArticle = {
  tags: [],
  title: "",
  category: CategoriesEnum.NULL,
  creationDate: new Date().toDateString(),
  text: undefined,
  photos: []
};
