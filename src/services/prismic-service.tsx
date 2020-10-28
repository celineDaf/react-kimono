import { client } from '../prismic-configuration';
import Prismic from 'prismic-javascript'
import { Category } from '../domain/category-types';
import ApiSearchResponse from 'prismic-javascript/types/ApiSearchResponse';
import { Document } from 'prismic-javascript/types/documents';

class Service {

    getArticleById(id: string): Promise<Document> {
        return client.getByID(id, {})
    }

    getArticlesByCategories(category: Category, limit?: number): Promise<ApiSearchResponse> {
        return client.query(
            Prismic.Predicates.at('document.tags', [category]),
            { orderings: '[document.first_publication_date desc]', pageSize: limit || 10 }
        )
    }

    getArticles(): Promise<ApiSearchResponse> {
        return client.query(
            Prismic.Predicates.at('document.type', 'article'),
            { orderings: '[document.first_publication_date desc]', pageSize: 20 }
        )
    }

    getNextArticle(category: Category, id: string): Promise<ApiSearchResponse> {
        return client.query(
            Prismic.Predicates.at('document.tags', [category]),
            { orderings: '[document.first_publication_date desc]', after: id, pageSize: 1 }

        )

    }
    getFirstArticleCategory(category: Category): Promise<ApiSearchResponse> {
        return client.query(
            Prismic.Predicates.at('document.tags', [category]),
            { orderings: '[document.first_publication_date desc]', pageSize: 1 }

        )

    }

}

const PrismicService = new Service();
export default PrismicService;