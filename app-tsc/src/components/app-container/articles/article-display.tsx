import React, { useState, useEffect } from "react";
import "./article-display.scss";
import { match } from "react-router";
import { PhotosDisplayer } from "../../../shared/photos-displayer/photos-displayer";
import ArticleService from "../../../services/article-service";
import { Date, RichText } from 'prismic-reactjs';
import { Document } from 'prismic-javascript/types/documents';
import { IArticle } from '../../../domain/article-type';
import { CategoriesEnum, CategoriesList, Category } from '../../../domain/category-types';
import { useHistory } from "react-router-dom";
import ArticlesNextButton from './article-next-button';

interface Props {
  match: match;
}

function useArticle(params) {
  const [article, setArticle] = useState<Document>();

  useEffect(() => {
    const getArticle = async () => {
      const response: Document = await ArticleService.getArticleById(params.id)
      if (response) {
        setArticle(response)
        console.log(response)
      }
    }

    getArticle()
  }, [params]);

  return article;
}

const ArticlesDisplay = props => {
  const history = useHistory();
  const article: Document | undefined = useArticle(props.match.params) as IArticle;
  if (!article) return null;
  const category: Category = article.tags.map((t) => CategoriesList.find(c => { return c === t }))[0] || CategoriesEnum.BOOKS;
  const date = article && article.first_publication_date ? Date(article.first_publication_date).toLocaleDateString() : Date();

  const nextArticle = () => {
    ArticleService.getNexArticle(category, article.id).then((r) => {
      if (!r || (r && r.results && r.results.length === 0)) {
        ArticleService.getFirstArticleCategory(category).then((b) => {
          history.push(`${b?.results[0].id}`)
        })
      } else {
        history.push(`${r?.results[0].id}`)
      }
    })
  }

  return (
    <div className="article-display">
      <div className="title">{article.data.title[0].text}</div>



      {article.data.contentimages && article.data.contentimages.length > 0 ? (
        <div className="photos p-relative">
          {/* <button typeof="button" className='next-button' onClick={(() => nextArticle())}>(✪‿✪)ノ ==&gt; </button> */}
          <span className=' p-absolute p-right'><ArticlesNextButton nextArticle={nextArticle} /></span>
          <PhotosDisplayer photos={article.data.contentimages} />
        </div>
      ) : (
          <div className="article-top-image p-relative">
            <span className=' p-absolute p-right'><ArticlesNextButton nextArticle={nextArticle} /></span>
            <img src={article.data.thumbnail.url} />
          </div>
        )
      }


      <div className="heading">
        {<span className="category">{category}</span>} - &nbsp;
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

      <div className="article-body">
        {RichText.render(article.data.content)}
        <ArticlesNextButton nextArticle={nextArticle} />
      </div>

    </div >
  );
};

export default ArticlesDisplay;

