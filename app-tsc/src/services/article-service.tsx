import { IArticle } from "../domain/article-type";
import { Category } from "../domain/category-types";
import firebase from "./../firebase";
import {
  FirebaseResponseType,
  FirebaseResponseInit
} from "../helpers/firebase-helpers";

const getOptions = {
  source: "cache"
};

class Service {
  
  getArticlesById(id: string): Promise<FirebaseResponseType<IArticle>> {
    let response = new FirebaseResponseInit() as FirebaseResponseType<IArticle>;
    const unsubscribe = firebase
      .firestore()
      .collection("articles")
      .doc(id)
      .get()
      .then(doc => {
        if (doc.exists) {
          response.content = { id: doc.id, ...doc.data() } as IArticle;
        } else {
          console.log("error article does not exists ", id);
          response.messageError = "error article " + id + " does not exists ";
        }
        return response;
      })
      .catch(err => {
        console.log("error fetch article by id", id, err);
        response.messageError = "error article " + id + " does not exists ";
        return response;
      });

    return unsubscribe;
  }

  getArticlesByCategoryLimit5(
    category: Category
  ): Promise<FirebaseResponseType<IArticle[]>> {
    let response = new FirebaseResponseInit() as FirebaseResponseType<
      IArticle[]
    >;
    const unsubscribe = firebase
      .firestore()
      .collection("articles")
      .where("category", "==", category)
      .limit(5)
      .get()
      .then(querySnapshot => {
        response.content = querySnapshot.docs.map(
          doc =>
            ({
              id: doc.id,
              ...doc.data()
            } as IArticle)
        );
        return response;
      })
      .catch(err => {
        response.messageError = "error fetch articles by category " + category;
        console.log("error fetch articles by category", category, err);
        return response;
      });
    return unsubscribe;
  }

  getArticlesByCategory(
    category: Category
  ): Promise<FirebaseResponseType<IArticle[]>> {
    let response = new FirebaseResponseInit() as FirebaseResponseType<
      IArticle[]
    >;
    const unsubscribe = firebase
      .firestore()
      .collection("articles")
      .where("category", "==", category)
      .get()
      .then(querySnapshot => {
        response.content = querySnapshot.docs.map(
          doc =>
            ({
              id: doc.id,
              ...doc.data()
            } as IArticle)
        );
        return response;
      })
      .catch(err => {
        response.messageError = "error fetch articles by category " + category;
        console.log("error fetch articles by category", category, err);
        return response;
      });
    return unsubscribe;
  }
}

const ArticleService = new Service();
export default ArticleService;
