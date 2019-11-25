import React, { Fragment } from 'react';
import { IArticle } from '../../../domain/article-type'
import ArticleCard from '../../../shared/article-card';
import './articles.scss'

interface PropsType {
    articles: IArticle[];
  } 
const ArticlesList = (props: PropsType) => {
   
    return (
        <div className="articles-list">

            {props.articles && props.articles.length > 0 && props.articles.map(article => {
                return (
                    <ArticleCard article={article} key={article.id} />
                )
            })} 
            
        </div>
    );
};

export default ArticlesList;
