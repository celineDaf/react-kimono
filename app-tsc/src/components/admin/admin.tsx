import React, { useState }  from 'react';
import "./admin.scss"
import AdminArticle from './admin-article/admin-article';
import { Link } from 'react-router-dom';
import { IArticle } from '../../domain/article-type'

const Admin = () => {

    let article: IArticle;
    
    const onChangeArticle = (updatedArticle:IArticle) => article = updatedArticle;
    return (
        <div className="admin">
            <Link className="button-float-right" to="/">&lsaquo;</Link>
            <div className="title">Gestion des contenus</div>
            
            <AdminArticle onChangeArticle={onChangeArticle}/>
            
        </div>
    );
};

export default Admin;
