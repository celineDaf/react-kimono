import React from 'react';
import { IArticle } from '../domain/article-type'
import TagsDisplayer from './tags-displayer/tags-displayer';

interface PropsType {
    article: IArticle;
  } 
const ArticleCard = (props: PropsType) => {
    return (
        <div className="article-card">
                    <div className="category">{props.article.category}</div>
                    <div className="title">{props.article.title}</div>
                    <TagsDisplayer tags={props.article.tags} canRemove={false} />
                    <div className="preview">{props.article.text}</div>
        </div>
    );
};

export default ArticleCard;