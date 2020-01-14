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
    console.log('params', params);
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
            return (
                <div className="article-display">
                    <div>{article.title}</div>
                    <div>{article.category}</div>
                    <div>{article.creationDate}</div>
                    <div>
                        {
                            article.tags && article.tags.map((tag: string, i : number) => {
                                return (
                                <span  key={i}>{tag}</span>
                                );
                            })
                        }
                    </div>
                    <div>
                        {
                            article.photos && article.photos.map((photo: string, i : number) => {
                                return (
                                    <span  key={i}>{photo}</span>
                                );
                            })
                        }
                    </div>
                    <div>{article.text}</div>
                </div>
            );
};

export default ArticlesDisplay;
