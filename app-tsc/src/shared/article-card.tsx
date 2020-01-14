import React from 'react';
import { IArticle } from '../domain/article-type'
import TagsDisplayer from './tags-displayer/tags-displayer';
import { History, Location } from 'history';
import { withRouter, match } from 'react-router';

interface PropsType {
    article: IArticle,
    history: History,
  location: Location,
  match: match
  }

const ArticleCard = (props: PropsType) => {

    const handleclick = () => {
        props.history.push(`/articles/${props.article.id}`);
    }

    return (
        <div className="article-card" onClick={() => handleclick()}>
                    <div className="category">{props.article.category}</div>
                    <div className="title">{props.article.title}</div>
                    <TagsDisplayer tags={props.article.tags} canRemove={false} />
                    <div className="preview">{props.article.text}</div>
        </div>
    );
};

export default withRouter(ArticleCard);