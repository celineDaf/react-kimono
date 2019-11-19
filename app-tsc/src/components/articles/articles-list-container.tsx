import React from 'react';
import { IArticle } from './../../domain/article-type'
import ArticleCard from './article-card';

const ArticlesListContainer = () => {
   
    const articles: IArticle[]  = [];
    return (
        <div className="article">

            {articles && articles.length > 0 && articles.map(article => {
                return (
                    <ArticleCard article={article} />
                )
            })} 
            
        </div>
    );
};

export default ArticlesListContainer;
