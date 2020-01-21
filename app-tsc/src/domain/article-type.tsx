import { Category, CategoriesEnum } from './category-types'
export interface IArticle {
    id: string  | undefined;
    tags: string[];
    title: string | undefined;
    category: Category | CategoriesEnum.NULL;
    creationDate: string;
    text: string | undefined;
    photos: string[];
}

export let ArticleInit: IArticle = {id: undefined, tags: [], title: undefined, category: CategoriesEnum.NULL, creationDate: new Date().toDateString(), text: undefined, photos: []};