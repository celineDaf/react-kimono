import { Category } from './category-types'
export interface IArticle {
    id?: string;
    tags: any[];
    title: string | null;
    category: Category | null;
    creationDate?: Date;
    text: string | null;
    photos: string[];
}

export let ArticleInit: IArticle = {tags: [], title: null, category: null, text: null, photos: []};