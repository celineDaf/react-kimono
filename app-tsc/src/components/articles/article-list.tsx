import React from 'react';
import { IArticle } from '../../domain/article-type'
import ArticleCard from './article-card';

interface PropsType {
    articles: IArticle[];
  } 
const ArticlesList = (props: PropsType) => {
   
    return (
        <div className="article">

            {props.articles && props.articles.length > 0 && props.articles.map(article => {
                return (
                    <ArticleCard article={article} />
                )
            })} 
            
        </div>
    );
};

export default ArticlesList;
