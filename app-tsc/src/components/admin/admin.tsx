import React from 'react';
import "./admin.scss"
import { Link } from 'react-router-dom';
import { IArticle } from '../../domain/article-type'
import ArticlesList from '../app-container/articles/article-list';

const Admin = () => {

    let articles: IArticle[] = [];
        
    return (
        <div className="admin">
            <Link className="button-float-right" to="/">&lsaquo;</Link>
            <Link className="button-float-right" to="/admin/add-article">+</Link>
            <div className="title">Liste des articles</div>

            <ArticlesList articles={articles} />
            
        </div>
    );
};

export default Admin;
