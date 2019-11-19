import React, { useState }  from 'react';
import "./../admin.scss"
import AdminArticle from './admin-article-update';
import { IArticle, ArticleInit } from '../../../domain/article-type'

interface PropsType {
    article?: IArticle;
  }

const AdminArticleUpdateContainer = (props: PropsType) => {

    const [article, setArticle] = useState(props.article || ArticleInit);
        
    const onChangeArticle = (updatedArticle:IArticle) => setArticle(updatedArticle);

    return (
        <div className="admin">
    
            <AdminArticle article={article} onChangeArticle={onChangeArticle}/>
            
        </div>
    );
};

export default AdminArticleUpdateContainer;