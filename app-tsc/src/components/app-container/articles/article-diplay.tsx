import React from 'react';
import './articles.scss';
import { useState, useEffect } from 'react';
import firebase from './../../../firebase';
import { match } from 'react-router';
import { IArticle } from '../../../domain/article-type'

interface Props {
    match: match
}

function useArticle(params) {
    const [article, setArticle] = useState();
    useEffect(() => {
        const unsubscribe = firebase
            .firestore().collection('articles').doc(params.id)
            .onSnapshot((docSnapshot)=> {
                const article = {
                    id: docSnapshot.id,
                    ...docSnapshot.data()
                };
                setArticle(article);
            })
        return () => unsubscribe()
    }, [params]);

    return article;
}

const ArticlesDisplay = (props) => {

    const article: IArticle = useArticle(props.match.params);

    if (!article) return null;
    const date: string = article.creationDate ? new Date(article.creationDate).toLocaleDateString() : '';
            return (
                <div className="article-display">
                    <div className="heading">
                        <div className="title">{article.title}</div>
                        <div className="tags">
                        {
                            article.tags && article.tags.map((tag: string, i : number) => {
                                return (
                                <span className="tag"  key={i}>{tag}</span>
                                );
                            })
                        }
                        </div>
                        <div className="row">
                            <div className="date">{date}</div>
                            <div className="category">{article.category}</div>
                        </div>
                    </div>
                   
                    <div className="full-width">
                        {
                            article.photos && article.photos.map((photo: string, i : number) => {
                                return (
                                    <span  key={i}>{photo}</span>
                                );
                            })
                        }
                    </div>
                    <div className="body">{article.text}</div>
                </div>
            );
};

export default ArticlesDisplay;
