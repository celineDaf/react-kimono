
export enum CategoriesEnum  {
    JAPAN = 'Japan', JOB ='Job', KIMONO = 'Kimono', BOOKS = 'Books', NULL= 'null'
};

export type Category = CategoriesEnum.BOOKS | CategoriesEnum.JAPAN |CategoriesEnum.JOB | CategoriesEnum.KIMONO | CategoriesEnum.NULL;

export const CategoriesList: Category[] = [ 
    CategoriesEnum.BOOKS,
    CategoriesEnum.JAPAN,
    CategoriesEnum.JOB,
    CategoriesEnum.KIMONO
];

