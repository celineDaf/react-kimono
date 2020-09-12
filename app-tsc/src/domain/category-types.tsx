
export enum CategoriesEnum {
    JAPAN = 'japon', JOB = 'job', KIMONO = 'kimono', BOOKS = 'books', NULL = 'null'
};

export type Category = CategoriesEnum.BOOKS | CategoriesEnum.JAPAN | CategoriesEnum.JOB | CategoriesEnum.KIMONO | CategoriesEnum.NULL;

export const CategoriesList: Category[] = [
    CategoriesEnum.BOOKS,
    CategoriesEnum.JAPAN,
    CategoriesEnum.JOB,
    CategoriesEnum.KIMONO
];

