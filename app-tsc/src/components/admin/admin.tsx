import React, { useState }  from 'react';
import "./admin.scss"
import AdminArticle from './admin-article/admin-article';
import { Link } from 'react-router-dom';

interface PropsType {
    
}

const Admin = (props: PropsType) => {
    const [values, setValues] = useState(null);

    return (
        <div className="admin">
            <Link className="button-float-right" to="/">&lsaquo;</Link>
            <div className="title">Gestion des contenus</div>
            
            <AdminArticle />
            
        </div>
    );
};

export default Admin;
