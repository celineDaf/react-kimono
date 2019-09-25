
export enum CategoriesEnum  {
    JAPAN = 'Japan', JOB ='Job', KIMONO = 'kimono', BOOKS = 'books'
};

export type Categories = CategoriesEnum.BOOKS | CategoriesEnum.JAPAN |CategoriesEnum.JOB | CategoriesEnum.KIMONO;

export const CategoriesList: Categories[] = [ 
    CategoriesEnum.BOOKS,
    CategoriesEnum.JAPAN,
    CategoriesEnum.JOB,
    CategoriesEnum.KIMONO
];

