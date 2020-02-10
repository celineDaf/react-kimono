import React from 'react';
import { IArticle } from '../../../../../domain/article-type';

interface Props {
   articles: IArticle[],
   backgroundColorClass: string
}



const ArticlesPreviewSlider = (props: Props) => {
    
    
        return (
            <div className={'articles-previews-slider ' + props.backgroundColorClass}>
                {props.articles.map((article, key) => (
                   <div key={key}>{article.title}</div>
                ))}
                
            </div>
        );
    

    
};

export default ArticlesPreviewSlider;
