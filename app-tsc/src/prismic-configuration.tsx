import Prismic from 'prismic-javascript'
import { Category } from './domain/category-types';
import { Document } from 'prismic-javascript/types/documents';
import ApiSearchResponse from 'prismic-javascript/types/ApiSearchResponse';
const accessToken = ''
const apiEndpoint = "https://react-kimono.cdn.prismic.io/api/v2";

export const client = Prismic.client(apiEndpoint, { accessToken })

export const linkResolver = (doc) => {
  if (doc.type === 'page') return `/page/${doc.uid}`
  return '/'
}



Prismic.getApi(apiEndpoint).then(function (api) {
  return api.query(""); // An empty query will return all the documents
}).then(function (response) {
}, function (err) {
  console.log("Something went wrong: ", err);
});

class Service {

  getArticleById(id: string): Promise<Document> {
    return client.getByID(id, {})
  }

  getArticlesByCategories(category: Category, limit?: number): Promise<ApiSearchResponse> {
    return client.query(
      Prismic.Predicates.at('document.tags', [category]),
      { orderings: '[my.document.date desc]', pageSize: limit || 20 }
    )
  }

}
const PrismicService = new Service();
export default PrismicService;