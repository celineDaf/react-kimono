import React, { useState, useEffect } from "react";
import "./articles.scss";
import { match } from "react-router";
import { PhotosDisplayer } from "../../../shared/photos-displayer/photos-displayer";
import ArticleService from "../../../services/article-service";
import { Date, Link, RichText } from 'prismic-reactjs';
import { Document } from 'prismic-javascript/types/documents';
import ImageDisplay from '../../../shared/image-display/image-display';
import { IArticle } from '../../../domain/article-type';

interface Props {
  match: match;
}

function useArticle(params) {
  const [article, setArticle] = useState<Document>();

  useEffect(() => {
    const getArticle = async () => {
      const response: Document = await ArticleService.getArticleById(params.id)
      if (response) {
        setArticle(response)
      }
    }

    getArticle()
  }, [params]);

  return article;
}

const ArticlesDisplay = props => {
  const article: Document | undefined = useArticle(props.match.params) as IArticle;

  if (!article) return null;
  const date = article && article.first_publication_date ? Date(article.first_publication_date).toLocaleDateString() : Date();

  return (
    <div className="article-display">
      <div className="title">{article.data.title[0].text}</div>

      <div className="article-top-image">
        <img src={article.data.thumbnail.url} />
      </div>

      <div className="heading">
        {/* <span className="category">{article.tags.map(t => CategoriesList.find((c) => { t === c; return c; }))}</span> - &nbsp; */}
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

      <div className="article-body">{RichText.render(article.data.content)}</div>

      {article.data.contentImages && (
        <div className="photos">
          <PhotosDisplayer photos={article.data.contentImages} />
        </div>
      )}
    </div>
  );
};

export default ArticlesDisplay;
