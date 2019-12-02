import React, { useEffect, useState } from 'react';
import "./admin.scss"
import { Link } from 'react-router-dom';
import ArticlesList from '../app-container/articles/article-list';
import firebase from '../../firebase'
import CategorySelector from '../../shared/category-selector/category-selector'

const Admin = () => {

    const [articles, setArticles]  = useState();
    
    useEffect(() => {
        firebase.firestore().collection('articles')
        .onSnapshot((snapshot)=> {
            const articles = snapshot.docs.map((doc)=> ({
                id: doc.id,
                ...doc.data()
            }));
            console.log('admin articles', articles)
            setArticles(articles);
        })
    })
    
    const onCategoryChoice = (category: string) => {
        if (category === undefined) {
            setArticles(articles)
        } else {
            const filteredArticles = articles.filter((art) => art.category === category);
            setArticles(filteredArticles)
            console.log('filteredArticles', filteredArticles)
        }
       
    }
        
    return (
        <div className="admin">
            <Link className="button-float-right" to="/">&lsaquo;</Link>
            <Link className="button-float-right" to="/admin/add-article">+</Link>
            <div className="admin-title">Liste des articles</div>

            <CategorySelector onChangeCategory={onCategoryChoice} unselectAvailable={true} />

            <ArticlesList articles={articles} />
            
        </div>
    );
};

export default Admin;
