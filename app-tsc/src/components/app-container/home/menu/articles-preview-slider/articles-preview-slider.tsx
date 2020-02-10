import React from 'react';
import { IArticle } from '../../../../../domain/article-type';
import './articles-preview-slider.scss'
import ImageDisplay from '../../../../../shared/image-display/image-display'

interface Props {
   articles: IArticle[],
   backgroundColorClass: string
}



const ArticlesPreviewSlider = (props: Props) => {
    
    
        return (
            <div className={'articles-previews-slider ' + props.backgroundColorClass}>
                {props.articles.map((article, key) => (
                    <div className='slide' key={key}>
                        { article.photos && article.photos[0] ? 
                        <ImageDisplay imageName={article.photos[0]}/> :
                        <div>{article.title}</div>}
                    </div>
                 
                ))}
                
            </div>
        );
    

    
};

export default ArticlesPreviewSlider;
