import Prismic from 'prismic-javascript'
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

