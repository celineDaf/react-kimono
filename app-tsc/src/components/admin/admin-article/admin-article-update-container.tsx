import React, { useState, useEffect } from "react";
import "./../admin.scss";
import AdminArticle from "./admin-article-update";
import { IArticle, ArticleInit } from "../../../domain/article-type";
import { History, Location } from "history";
import firebase from "./../../../firebase";
import { match } from "react-router-dom";
import ArticleService from "../../../services/article-service";

interface PropsType {
  article?: IArticle;
  history: History;
  location: Location;
  match: match;
}

function useArticle(params, props) {
  const [article, setArticle] = useState();

  useEffect(() => {
    if (/^\/admin/.test(props.location.pathname) && params.id) {
      const f = async () => {
        const response = await ArticleService.getArticlesById(params.id);
        setArticle(response.content);
      };
      f();
    } else {
      setArticle(ArticleInit);
    }
  }, [params]);

  return article;
}

const AdminArticleUpdateContainer = (props: PropsType) => {
  let article: IArticle = useArticle(props.match.params, props);

  const onChangeArticle = (updatedArticle: IArticle) =>
    (article = updatedArticle);

  if (!article) return null;
  return (
    <div className="admin">
      <AdminArticle article={article} onChangeArticle={onChangeArticle} />
    </div>
  );
};

export default AdminArticleUpdateContainer;
