import React from "react";
import { IArticle } from "../../../../../domain/article-type";
import "./articles-preview-slider.scss";
import ImageDisplay from "../../../../../shared/image-display/image-display";
import { History, Location } from "history";
import { withRouter, match } from "react-router-dom";
import { Category } from "../../../../../domain/category-types";

interface Props {
  articles: IArticle[];
  backgroundColorClass: string;
  history: History;
  location: Location;
  match: match;
  category: Category;
}

const ArticlesPreviewSlider = (props: Props) => {
  const goToArticleList = () => {
    props.history.push("/articles/category/" + props.category);
  };

  const goToArticle = id => {
    props.history.push("/articles/" + id);
  };
  return (
    <div
      className={
        "articles-previews-slider scroll scroll-medium contain-scroll no-gap " +
        props.backgroundColorClass
      }
    >
      {props.articles.map((article, key) => (
        <div
          className="slide flex flex-column"
          key={key}
          onClick={() => goToArticle(article.id)}
        >
          {article.photos && article.photos[0] ? (
            <ImageDisplay imageName={article.photos[0]} title={article.title} />
          ) : (
            <div className="title-container">
              <div className="title-alone">{article.title}</div>
            </div>
          )}
        </div>
      ))}
      <div className="slide flex flex-column" onClick={goToArticleList}>
        <div className="icon-all-articles">
          <div className="icon icon-double-chevron"></div>
        </div>
      </div>
    </div>
  );
};

export default withRouter(ArticlesPreviewSlider);
