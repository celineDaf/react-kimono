import React, { useState } from "react";
import "./admin-article.scss";
import CategorySelector from "../../../shared/category-selector/category-selector";
import TagsManagement from "../tags-management/tags-management";

interface PropsType {}

const AdminArticle = (props: PropsType) => {
  const handleChange = (event: React.ChangeEvent<HTMLFormElement>): void => {};

  return (
    <div className="admin-article container">
      <form className="row">
        <div className="column">
          <div className="section">
            <label>
              <input type="text" name="name" placeholder="Nom de l'article" />
            </label>
          </div>
          <CategorySelector />
          <TagsManagement />

          <div>Ajouter des photos</div>
        </div>

        <div className="column">
          <textarea
            name="text"
            rows={20}
            className="article-content-input"
          ></textarea>
          <button type="button" className="button">
            Créer
          </button>
        </div>
      </form>
    </div>
  );
};

export default AdminArticle;
