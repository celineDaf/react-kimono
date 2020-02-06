import React, { useState, useEffect } from "react";
import "./admin-article.scss";
import TagsManagement from "../tags-management/tags-management";
import { IArticle, ArticleInit } from '../../../domain/article-type';
import { Category } from "../../../domain/category-types";
import AdminTextManagement from "../admin-text-management/admin-text-management";
import CategorySelector from "../../../shared/category-selector/category-selector";
import firebase from '../../../firebase';
import { History, Location } from 'history';
import { withRouter, match } from 'react-router-dom';
import { Link } from 'react-router-dom';
import AdminPhotosManager from "./admin-photos-manager";
import { Photos } from '../../../domain/photos-types'

interface Props {
  onChangeArticle: (article: IArticle) => void,
  article?: IArticle,
  history: History,
  location: Location;
  match: match;
}

const regexAddArticle = new RegExp('/^(?!\/admin\/add\-article)');
const regexArticles = new RegExp('/^(?!.*\/admin\/articles)');

const AdminArticleUpdate = (props: Props) => {
  const [article, setArticle] = useState<IArticle>(props.article || ArticleInit);
  let photoToSave: Boolean = false
  const params: {id?:string} = props.match.params;

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
  const onChangePhotos = (photos: Photos) => {
    photoToSave = true;
    setArticle({ ...article, photos: photos });
  };

  useEffect(() => {
    props.onChangeArticle(article);
  });

  const handleCreation = () => {
    firebase.firestore().collection('articles')
    .add(article);
    props.history.push('/home')
  };

  const handleUpdate = () => {
    if (params && params.id) {
      firebase.firestore().collection('articles').doc(params.id).update(article).catch((e) => console.log('ERROR ARTICLE UPDATE', 'params', params, e));
    props.history.push('/home')
    } else { console.log('ERROR NO ID FOR ARTICLE UPDATE'); }
  };

  if (!article) return null;
  return (
    <div className="admin-article">
      <div className="admin-button">
      <Link className="button-float-right" to="/">&lsaquo;</Link>
      {
       ( (regexAddArticle.test(props.location.pathname)
        || regexArticles.test(props.location.pathname) )
        && <Link className="header-icon-list button-float-right ajust-icon" to="/admin"></Link> )
      }
      </div>
      {
       ( params.hasOwnProperty('id') ? <div className="admin-title">Mise à jour de l'Article</div> : <div className="admin-title">Nouvel Article</div> )
      }
      <div className="full-width">
{
       ( params.hasOwnProperty('id') && <div className="indication float-left">{new Date(article.creationDate).toLocaleDateString()}</div> )
      }
       <div className="float-right">
              {
                !params || !params.id && <button
                type="button"
                className="button"
                onClick={() => handleCreation()}>
                Créer
              </button>  
              }

              { params && params.id && <button
                type="button"
                className="button"
                onClick={() => handleUpdate()}>
                Mette à jour
              </button>
              }
          </div>
      </div>
       
      <form className=" admin-article-update-form">
        <div className="row">
        <div className="column">
          <div className="section text-center">
            <div className="sub-section">
              <span className="input-yellow">
                <input
                  type="text"
                  name="title"
                  value={article.title}
                  onChange={event => onChangeTitle(event.target.value)}
                />
                <label className="label">Nom de l'article</label>
              </span>
            </div>

            <div className="sub-section">
              <CategorySelector onChangeCategory={onChangeCategory} category={article.category} />
            </div>

            <div className="sub-section">
              <TagsManagement onChangeTags={onChangeTags} tags={article.tags}/>
            </div>

          </div>
        </div>

        <div className="column">
          <section>
            <div className="sub-section">
            <AdminTextManagement onChangeText={onChangeText} text={article.text} />
            </div>
          </section>
        </div>
        </div>
        <div className="row">
          <div className="column">
              <div className="sub-title photos-title">{article.photos.length > 0 ? article.photos.length : 0}   Photos 
                {photoToSave && <span>  &nbsp;&nbsp;&nbsp;&nbsp;==> Penser à enregistrer !</span>}
              </div>
             <AdminPhotosManager photos={article.photos} onChangePhotos={onChangePhotos}/>
          </div>
          </div>
      </form>
    </div>
  );
};

export default withRouter(AdminArticleUpdate);
