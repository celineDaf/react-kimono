// import { IArticle } from "../domain/article-type";
import { Category } from "../domain/category-types";
import PrismicService from '../prismic-configuration';
import { IArticle } from '../domain/article-type';
import { Document } from 'prismic-javascript/types/documents';
import ApiSearchResponse from 'prismic-javascript/types/ApiSearchResponse';

class Service {


  // Promise<ResponseType<IArticle>> 

  // const [article, setArticle] = useState();
  // const f = async () => {
  //  let response: Promise<ResponseType<IArticle>> = async new ResponseInit();

  // if
  //   LocalStorageService.checkLocalStorage(category) &&
  //   LocalStorageService.shouldUpdateCategoryArticlesList(category)
  // ) {
  //  response = await LocalStorageService.getArticleByIdFromLocalstorage(
  //   category,
  //   id
  //  );
  // if (response.messageError) console.log(response.messageError);
  // } else {
  // const response: any = await 


  // setArticle(response.results);
  // }
  // }
  // f();

  // return article;
  getArticleById(id: string): Promise<Document> {
    return PrismicService.getArticleById(id);
  }

  getArticlesByCategory(category: Category, limit?: number): Promise<ApiSearchResponse> {

    return PrismicService.getArticlesByCategories(
      category, limit || 10
    );
  }
  // const [articles, setArticles] = useState();
  // const f = async () => {
  //     // if (
  //     //   LocalStorageService.checkLocalStorage(category) &&
  //     //   LocalStorageService.shouldUpdateCategoryArticlesList(category)
  //     // ) {
  //     const response = await LocalStorageService.getArticlesListFromLocalStorage(
  //       category,
  //       5
  //     );
  //     setArticles(response);
  //     // } else {
  // const response: any = await 

  // setArticles(response.results);
  // console.log('getArticlesByCategoryLimit5', response.results)

  // };
  // f();

  // return articles;
  // }



  getArticles(): Promise<ApiSearchResponse> {

    return PrismicService.getArticles();
  }

  // getArticlesByCategory(
  //   category: Category
  // ): Promise < ResponseType < IArticle[] >> {}

  // getNextArticlesInCategory(
  //   category: Category,
  //   limit?: number
  // ): Promise<ResponseType<IArticle[]>> { }

  // getPreviousArticlesInCategory(
  //   category: Category,
  //   limit?: number
  // ): Promise<ResponseType<IArticle[]>> { }
}

const ArticleService = new Service();
export default ArticleService;
