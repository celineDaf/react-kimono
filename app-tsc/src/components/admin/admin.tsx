import React from 'react';
import "./admin.scss"
import AdminCategories from './admin-categories/admin-categories';

interface Props {
}

const Admin = (props: Props) => {
    return (
        <div className="admin">
            <div className="title">Gestion des contenus</div>
            <AdminCategories></AdminCategories>
            
        </div>
    );
};

export default Admin;
