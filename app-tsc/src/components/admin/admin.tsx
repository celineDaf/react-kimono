import React from 'react';
import "./admin.scss"
import AdminCategories from './admin-categories/admin-categories';
import AdminArticle from './admin-article/admin-article';

interface Props {
}

const Admin = (props: Props) => {
    return (
        <div className="admin">
            <div className="title">Gestion des contenus</div>
            <AdminCategories></AdminCategories>

            <AdminArticle></AdminArticle>
            
        </div>
    );
};

export default Admin;
