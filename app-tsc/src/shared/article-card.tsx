import React from "react";
import { IArticle } from "../domain/article-type";
import TagsDisplayer from "./tags-displayer/tags-displayer";
import { History, Location } from "history";
import { withRouter, match } from "react-router";
import ImageDisplay from "./image-display/image-display";

interface PropsType {
  article: IArticle;
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
        props.article.photos &&
        props.article.photos.length > 0 && (
          <ImageDisplay
            imageName={props.article.photos[0]}
            title={props.article.title}
          />
        )}
      {props.article &&
        (!props.article.photos || props.article.photos.length === 0) && (
          <div className="title-container">
            <span className="title">{props.article.title}</span>
          </div>
        )}
    </div>
  );
};

export default withRouter(ArticleCard);
