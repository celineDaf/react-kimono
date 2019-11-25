import React, {useEffect} from 'react';
import ArticlesList from './article-list';
import { useState } from 'react'
import firebase from './../../../firebase'
import './articles.scss'

function useArticles() {

    const [articles, setArticles]  = useState();
// FIXME: need to add an unsubcribe
    useEffect(() => { 
            firebase.firestore().collection('articles')
            .onSnapshot((snapshot)=> {
                const articles = snapshot.docs.map((doc)=> ({
                    id: doc.id,
                    ...doc.data()
                }));
                setArticles(articles);
            })
    }, []); 

    return articles
}

const ArticlesListContainer = () => {
    const articles = useArticles()
    
        return (
            <div className="articles-list-container">
    
                <ArticlesList articles={articles} />
                
            </div>
        );
    

    
};

export default ArticlesListContainer;
