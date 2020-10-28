// import { IArticle } from "../domain/article-type";
import { Category } from "../domain/category-types";
import { Document } from 'prismic-javascript/types/documents';
import ApiSearchResponse from 'prismic-javascript/types/ApiSearchResponse';
import PrismicService from './prismic-service';

class Service {

  getArticleById(id: string): Promise<Document> {
    return PrismicService.getArticleById(id);
  }

  getArticlesByCategory(category: Category, limit?: number): Promise<ApiSearchResponse> {
    return PrismicService.getArticlesByCategories(
      category, limit || 10
    );
  }

  getArticles(): Promise<ApiSearchResponse> {
    return PrismicService.getArticles();
  }


  async getNexArticle(category: Category | undefined, id: string) {
    if (!category) {
      Promise.resolve({ err: 'null' })
    } else {
      try {
        const response = await PrismicService.getNextArticle(category, id)
        if (!response) {
          throw new Error('no next article');
        }
        return response;
      } catch (err) {
        Promise.resolve({ err: 'null' })
      }
    }
  }

  async getFirstArticleCategory(category: Category | undefined) {
    if (!category) {
      Promise.resolve({ err: 'null' })
    } else {
      return PrismicService.getFirstArticleCategory(category);
    }
  }
}



const ArticleService = new Service();
export default ArticleService;
