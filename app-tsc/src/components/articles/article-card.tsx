import React from 'react';
import { IArticle } from '../../domain/article-type'
import TagsDisplayer from '../admin/tags-management/tags-displayer/tags-displayer';

interface PropsType {
    article: IArticle;
  } 
const ArticleCard = (props: PropsType) => {
    return (
        <div className="article-card">
                    <p>{props.article.title}</p>
                    <p>{props.article.category} </p>
                    <TagsDisplayer tags={props.article.tags} canRemove={false} />
                    <div>{props.article.text}</div>
        </div>
    );
};

export default ArticleCard;