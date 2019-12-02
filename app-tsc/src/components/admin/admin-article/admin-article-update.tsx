import React, { useState, useEffect } from "react";
import "./admin-article.scss";
import TagsManagement from "../tags-management/tags-management";
import { IArticle } from "../../../domain/article-type";
import { Category } from "../../../domain/category-types";
import AdminTextManagement from "../admin-text-management/admin-text-management";
import CategorySelector from "../../../shared/category-selector/category-selector";
import firebase from '../../../firebase'
import { History, Location } from 'history';
import { withRouter, match } from 'react-router';
import { Link } from 'react-router-dom'

interface Props {
  onChangeArticle: (article: IArticle) => void,
  article: IArticle,
  history: History,
  location: Location;
  match: match;
}

const AdminArticleUpdate = (props: Props) => {
  const [article, setArticle] = useState<IArticle>(props.article);

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
  });

  const handleCreation = () => {
    console.log(article);
    firebase.firestore().collection('articles')
    .add(article);
    props.history.push('/home')
  };

  return (
    <div className="admin-article">
      <div className="admin-button">
      <Link className="button-float-right" to="/">&lsaquo;</Link>
       <Link className="header-icon-list button-float-right ajust-icon" to="/admin"></Link>
      </div>
            <div className="admin-title">Nouvel Article</div>
      <form className="row violet-bc admin-article-update-form">
        <div className="column">
          <div className="section text-center">
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
              <div className="sub-title">Photos</div>
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

export default withRouter(AdminArticleUpdate);
