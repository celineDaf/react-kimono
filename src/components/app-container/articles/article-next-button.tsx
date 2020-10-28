import React from "react";
import "./article-next-button.scss";

const ArticlesNextButton = props => {

  return (
    <div className="next-button" onClick={() => props.nextArticle()}>
      <div className="container">
        <div className="content">
          <a href="#" className="button">
            NEXT
            <span>
              <Arrow />
            </span>
          </a>
        </div>
      </div>
    </div>
  )
};

export default ArticlesNextButton;

const Arrow = () => {

  return (
    <svg viewBox="200 0 300 600">
      <polyline strokeWidth="40" stroke="#ffffff"
        points="450 150 625 300 450 450"></polyline>
    </svg>
  )
}
