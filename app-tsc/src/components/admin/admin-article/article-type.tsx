import { Categories } from '../../../domain/category-types'


export interface Article {
    id?: string,
    title: string, 
    tags: string[],
    photos: string[],
    creationDate: Date,
    category: Categories;
    text: string
}