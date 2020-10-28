import { IArticle } from "../domain/article-type";
// import { Category } from "../domain/category-types";
// import { ResponseInit, ResponseType } from "../helpers/firebase-helpers";
// import {
//   initialLocalState,
//   InitialLocalState
// } from "../domain/local-state-type";

// const localStorageName: "ATAKIKOO_BLOG" = "ATAKIKOO_BLOG";
// let localStorageState: InitialLocalState = initialLocalState;

// class Service {
//   checkLocalStorage(category: Category): boolean {
//     return (
//       !!localStorageState["articles_" + category] &&
//       localStorageState["articles_" + category].articles
//     );
//   }

//   shouldUpdateCategoryArticlesList(category: Category): boolean {
//     const yesterday = new Date(new Date().setDate(new Date().getDate() - 1));
//     return (
//       !!localStorageState["articles_" + category] &&
//       localStorageState["articles_" + category].last_update !== null &&
//       new Date(localStorageState["articles_" + category].last_update) >
//         yesterday
//     );
//   }

//   save(category: Category, articles: IArticle[]) {
//     const state = localStorage.getItem(localStorageName);

//     if (typeof state === "string") {
//       const parseState = JSON.parse(state);
//       localStorageState = parseState;
//     }

//     const name: string = "articles_" + category;
//     localStorageState[name].articles = articles;
//     localStorageState[name].last_update = Date.now().toString();

//     localStorage.setItem(localStorageName, JSON.stringify(localStorageState));
//   }

//   getArticleByIdFromLocalstorage(
//     category: Category,
//     id: string
//   ): Promise<ResponseType<IArticle>> {
//     const state = localStorage.getItem(localStorageName);
//     let response: ResponseType<IArticle> = new ResponseInit();

//     const promise: Promise<ResponseType<IArticle>> = new Promise(
//       (resolve, reject) => {
//         if (typeof state === "string") {
//           const parseState = JSON.parse(state);
//           localStorageState = parseState;
//         }
//         const article = localStorageState["articles_" + category].articles.find(
//           art => art.id === id
//         );
//         article
//           ? (response.content = article)
//           : (response.messageError = `error: not in localStorage ${id} ${category}`);
//         resolve(response);
//       }
//     );
//     return promise;
//   }

//   getArticleConnexFromLocalstorage(
//     category: Category,
//     id: string,
//     action: "next" | "previous"
//   ): Promise<ResponseType<IArticle>> {
//     const state = localStorage.getItem(localStorageName);
//     let response: ResponseType<IArticle> = new ResponseInit();
//     const promise: Promise<ResponseType<IArticle>> = new Promise(
//       (resolve, reject) => {
//         if (typeof state === "string") {
//           const parseState = JSON.parse(state);
//           localStorageState = parseState;
//         }
//         const articles = localStorageState["articles_" + category].articles;
//         const length: number = articles.length;
//         const baseIndex: number = articles.findIndex(art => art.id === id);

//         const newIndex: number =
//           action === "next"
//             ? baseIndex + 1 <= length - 1
//               ? baseIndex + 1
//               : 0
//             : baseIndex - 1 >= 0
//             ? baseIndex - 1
//             : length - 1;
//         const article = articles[newIndex];
//         article
//           ? (response.content = article)
//           : (response.messageError = `error: couldn't findt ${action} article in localStorage in category ${category}`);

//         resolve(response);
//       }
//     );
//     return promise;
//   }

//   getArticlesListFromLocalStorage(
//     category: Category,
//     limit?: number
//   ): Promise<ResponseType<IArticle[]>> {
//     const state = localStorage.getItem(localStorageName);
//     let response: ResponseType<IArticle[]> = new ResponseInit();
//     const promise: Promise<ResponseType<IArticle[]>> = new Promise(
//       (resolve, reject) => {
//         if (typeof state === "string") {
//           const parseState = JSON.parse(state);
//           localStorageState = parseState;
//         }
//         let articles = localStorageState["articles_" + category].articles;
//         if (limit) articles = articles.slice(0, limit);

//         articles && articles.length > 0
//           ? (response.content = articles)
//           : (response.messageError = `error: ${category} articles is empty in localStorage`);
//         resolve(response);
//       }
//     );
//     return promise;
//   }
// }

// const LocalStorageService = new Service();
// export default LocalStorageService;
