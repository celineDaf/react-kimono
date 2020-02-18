import React from "react";
import "./articles.scss";
import { useState, useEffect } from "react";
import firebase from "./../../../firebase";
import { match } from "react-router";
import { IArticle } from "../../../domain/article-type";
import { PhotosDisplayer } from "../../../shared/photos-displayer/photos-displayer";

interface Props {
  match: match;
}

function useArticle(params) {
  const [article, setArticle] = useState();
  useEffect(() => {
    const unsubscribe = firebase
      .firestore()
      .collection("articles")
      .doc(params.id)
      .onSnapshot(docSnapshot => {
        const article = {
          id: docSnapshot.id,
          ...docSnapshot.data()
        };
        setArticle(article);
      });
    return () => unsubscribe();
  }, [params]);

  return article;
}

const ArticlesDisplay = props => {
  const article: IArticle = useArticle(props.match.params);

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
