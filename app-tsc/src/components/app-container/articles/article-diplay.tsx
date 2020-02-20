import React, { useState, useEffect } from "react";
import "./articles.scss";
import { match } from "react-router";
import { IArticle } from "../../../domain/article-type";
import { PhotosDisplayer } from "../../../shared/photos-displayer/photos-displayer";
import ArticleService from "../../../services/article-service";

interface Props {
  match: match;
}

function useArticle(params, setError) {
  const [article, setArticle] = useState();

  useEffect(() => {
    const f = async () => {
      const response = await ArticleService.getArticlesById(params.id);
      if (response.messageError) {
        setError(response.messageError);
        return;
      }
      setArticle(response.content);
    };
    f();
  }, [params]);

  return article;
}

const ArticlesDisplay = props => {
  const [error, setError] = useState();
  const article: IArticle = useArticle(props.match.params, setError);

  if (error) return <div>{error}</div>;
  if (!article) return null;
  const date: string = article.creationDate
    ? new Date(article.creationDate).toLocaleDateString()
    : "";
  return (
    <div className="article-display">
      <div className="title">{article.title}</div>
      {article.photos && article.photos.length > 0 && (
        <div className="photos">
          <PhotosDisplayer photos={article.photos} />
        </div>
      )}
      <div className="heading">
        <span className="category">{article.category}</span> - &nbsp;
        <span className="date">{date}</span>
        <div className="tags">
          {article.tags &&
            article.tags.map((tag: string, i: number) => {
              return (
                <span className="tag" key={i}>
                  {tag}
                </span>
              );
            })}
        </div>
      </div>

      <div className="article-body">{article.text}</div>
    </div>
  );
};

export default ArticlesDisplay;
