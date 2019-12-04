import React, {useEffect} from 'react';
import ArticlesList from './article-list';
import { useState } from 'react'
import firebase from './../../../firebase'
import './articles.scss'
import { match } from 'react-router'

interface Props {
    match: match
}

function useArticles(params) {

   
    const [articles, setArticles]  = useState();

    useEffect(() => { 
        const unsubscribe = firebase
            .firestore().collection('articles')
            .where('category', '==', params.category)
            .onSnapshot((snapshot)=> {
                const articles = snapshot.docs.map((doc)=> ({
                    id: doc.id,
                    ...doc.data()
                }));
                setArticles(articles);
            })
            return () => unsubscribe()
    }, [params]); 

    return articles
}

const ArticlesListContainer = (props: Props) => {
    const articles = useArticles(props.match.params)
    
        return (
            <div className="articles-list-container">
    
                <ArticlesList articles={articles} />
                
            </div>
        );
    

    
};

export default ArticlesListContainer;
