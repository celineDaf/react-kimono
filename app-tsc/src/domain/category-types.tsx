
export enum CategoriesEnum  {
    JAPAN = 'Japan', JOB ='Job', KIMONO = 'kimono', BOOKS = 'books'
};

export type Category = CategoriesEnum.BOOKS | CategoriesEnum.JAPAN |CategoriesEnum.JOB | CategoriesEnum.KIMONO;

export const CategoriesList: Category[] = [ 
    CategoriesEnum.BOOKS,
    CategoriesEnum.JAPAN,
    CategoriesEnum.JOB,
    CategoriesEnum.KIMONO
];

