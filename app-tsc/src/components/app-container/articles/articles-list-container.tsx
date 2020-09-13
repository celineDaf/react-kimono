import React, { useEffect } from "react";
import ArticlesList from "./article-list";
import { useState } from "react";
import "./articles.scss";
import { match } from "react-router";
import { Category } from "../../../domain/category-types";
import ArticleService from "../../../services/article-service";
import { Document } from 'prismic-javascript/types/documents';

interface Props {
  match: match;
}

function useArticles(params) {
  const [articles, setArticles] = useState<Document[]>();

  useEffect(() => {
    console.log('cat ', params[0].category)
    const f = async () => {
      const response = await ArticleService.getArticlesByCategory(
        params[0].category
      );
      if (response) {
        setArticles(response.results);
      }
    };
    f();
  }, [params]);

  return articles;
}

const ArticlesListContainer = (props: Props) => {
  const articles = useArticles([props.match.params]);
  const params: { category?: Category } = props.match.params;

  if (!articles) { return null; }
  return (
    <div className="articles-list-container">
      { <ArticlesList articles={articles} category={params.category} />}
    </div>
  );
};

export default ArticlesListContainer;
