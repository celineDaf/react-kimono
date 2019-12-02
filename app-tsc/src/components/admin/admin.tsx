import React, { useEffect, useState } from 'react';
import "./admin.scss"
import { Link } from 'react-router-dom';
import ArticlesList from '../app-container/articles/article-list';
import firebase from '../../firebase'
import CategorySelector from '../../shared/category-selector/category-selector'

const Admin = () => {

    const [articles, setArticles]  = useState();
    const [filtererdArticles, setFilteredArticles]  = useState();
    
    useEffect(() => {
        firebase.firestore().collection('articles')
        .onSnapshot((snapshot)=> {
            const articles = snapshot.docs.map((doc)=> ({
                id: doc.id,
                ...doc.data()
            }));
            setArticles(articles);
            setFilteredArticles(articles);
        })
    }, [])

    const onCategoryChoice = (category: string) => {
        if (category === "null") {
            setFilteredArticles(articles);
        } else {
            const filteredArticles = articles.filter((art) => art.category === category);
            setFilteredArticles(filteredArticles)
        }
       
    }
        
    return (
        <div className="admin">
            <div className="admin-button">
                <Link className="button-float-right" to="/">&lsaquo;</Link>
            <Link className="button-float-right" to="/admin/add-article">+</Link>
            </div>
            <div className="admin-title">Liste des articles</div>

            <CategorySelector onChangeCategory={onCategoryChoice} unselectAvailable={true} />

            <ArticlesList articles={filtererdArticles} />
            
        </div>
    );
};

export default Admin;
