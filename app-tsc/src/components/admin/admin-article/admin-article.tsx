import React, { useState, useEffect } from "react";
import "./admin-article.scss";
import CategorySelector from "../../../shared/category-selector/category-selector";
import TagsManagement from "../tags-management/tags-management";
import { IArticle, ArticleInit } from "../../../domain/article-type";
import { Category } from "../../../domain/category-types";
import AdminTextManagement from "../admin-text-management/admin-text-management";

interface Props {
  onChangeArticle: (article: IArticle) => void;
}

const AdminArticle = (props: Props) => {
  const [article, setArticle] = useState<IArticle>(ArticleInit);

  const onChangeCategory = (selectedCategory: Category) => {
    setArticle({ ...article, category: selectedCategory });
  };
  const onChangeTags = (updatedTags: string[]) => {
    setArticle({ ...article, tags: updatedTags });
  };
  const onChangeText = (updatedText: string) => {
    setArticle({ ...article, text: updatedText });
  };
  const onChangeTitle = (updatedTitle: string) => {
    setArticle({ ...article, title: updatedTitle });
  };

  useEffect(() => {
    props.onChangeArticle(article);
  }, [article]);

  const handleCreation = () => {
    console.log(article);
  };

  return (
    <div className="admin-article container">
      <form className="row violet-bc">
        <div className="column">
          <div className="section">
            <div className="sub-section">
              <span className="input-gradient">
                <input
                  type="text"
                  name="title"
                  className=""
                  placeholder="Nom de l'article"
                  onChange={event => onChangeTitle(event.target.value)}
                />
              </span>
            </div>

            <div className="sub-section">
              <CategorySelector onChangeCategory={onChangeCategory} />
            </div>

            <div className="sub-section">
              <TagsManagement onChangeTags={onChangeTags} />
            </div>

            <div className="sub-section">
              <div className="sub-title"> - Ajouter des photos</div>
            </div>
          </div>
        </div>

        <div className="column">
          <section>
            <div className="sub-section">
            <AdminTextManagement onChangeText={onChangeText} />
            </div>

            <div className="sub-section">
            <button
              type="button"
              className="button"
              onClick={() => handleCreation()}
            >
              Créer
            </button>
            </div>
          </section>
        </div>
      </form>
    </div>
  );
};

export default AdminArticle;
