import React, { useState, useEffect } from "react";
import "./sub-menu.scss";
import ArticlesPreviewSlider from "../articles-preview-slider/articles-preview-slider";
import { Category } from "../../../../../domain/category-types";
import ArticleService from "../../../../../services/article-service";
import { IArticle } from '../../../../../domain/article-type';

interface Props {
  category: Category;
  colorBgClass: string;
  titleSide: "left" | "right";
}

const SubMenu = (props: Props) => {
  const articles = GetArticlesPreviews(props);

  function GetArticlesPreviews(props: Props) {
    const [articles, setArticles] = useState<any>();

    useEffect(() => {
      const f = async () => {
        const response = await ArticleService.getArticlesByCategory(
          props.category, 5
        );
        const results = response.results;
        setArticles(results);
      };
      f();
    }, []);

    return articles;
  }

  if (!articles) return null;
  return (
    <div className="sub-menu">
      <ArticlesPreviewSlider
        articles={articles}
        backgroundColorClass={props.colorBgClass}
        category={props.category}
      />
    </div>
  );
};

export default SubMenu;
