import { Category } from './category-types'
export interface IArticle {
    id: string;
    tags: string[];
    title: string | null;
    category: Category | null;
    creationDate?: Date;
    text: string | null;
    photos: string[];
}

export let ArticleInit: IArticle = {id: '', tags: [], title: null, category: null, text: null, photos: []};