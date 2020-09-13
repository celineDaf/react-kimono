import React from "react";
// import { IArticle } from "../../../domain/article-type";
import ArticleCard from "../../../shared/article-card";
import "./articles.scss";
import { Category } from "../../../domain/category-types";
import { IArticle } from '../../../domain/article-type';
import { Document } from 'prismic-javascript/types/documents';

interface PropsType {
  articles: Document[];
  category?: Category;
}
const ArticlesList = (props: PropsType) => {
  return (
    <div className={"articles-list " + "articles-list-" + props.category}>
      {props.articles &&
        props.articles.length > 0 &&
        props.articles.map((article, index) => {
          return <ArticleCard article={article} key={index} />;
        })}
    </div>
  );

};

export default ArticlesList;
