import React from "react";
import { IArticle } from "../domain/article-type";
import TagsDisplayer from "./tags-displayer/tags-displayer";
import { History, Location } from "history";
import { withRouter, match } from "react-router";
import ImageDisplay from "./image-display/image-display";
import { Document } from 'prismic-javascript/types/documents';

interface PropsType {
  article: Document;
  history: History;
  location: Location;
  match: match;
}

const ArticleCard = (props: PropsType) => {
  const handleclick = () => {
    if (/^\/admin/.test(props.location.pathname)) {
      props.history.push(`/admin/articles/${props.article.id}`);
    } else {
      props.history.push(`/articles/${props.article.id}`);
    }
  };

  return (
    <div className="article-card" onClick={() => handleclick()}>
      <TagsDisplayer tags={props.article.tags} canRemove={false} />
      {props.article &&
        props.article.data.thumbnail && (
          <ImageDisplay
            url={props.article.data.thumbnail.url}
            title={props.article.data.title[0].text}
          />
        )}
      {props.article &&
        (!props.article.data.thumbnail) && (
          <div className="title-container">
            <span className="title">{props.article.data.title[0].text}</span>
          </div>
        )}
    </div>
  );
};

export default withRouter(ArticleCard);
