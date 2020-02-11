import React, {useState, useEffect} from 'react';
import './sub-menu.scss';
import ArticlesPreviewSlider from '../articles-preview-slider/articles-preview-slider'
import { Category } from '../../../../../domain/category-types'
import firebase from '../../../../../firebase';
import { IArticle } from '../../../../../domain/article-type'

interface Props {
    category: Category,
    colorBgClass: string,
    titleSide: 'left' | 'right'
}

function GetArticlesPreviews(props: Props) {

    const [articles, setArticles]  = useState();

    useEffect(() => { 
       const unsubscribe = firebase
           .firestore().collection('articles')
           .where('category', '==', props.category)
           .limit(5)
           .onSnapshot((snapshot)=> {
               const articles = snapshot.docs.map((doc)=> ({
                   id: doc.id,
                   ...doc.data()
               }));
               setArticles(articles as IArticle[]);
           })
          return () => unsubscribe();
    }, []); 

    return articles;
}

const SubMenu = (props: Props) => {

    const articles: IArticle[] = GetArticlesPreviews(props);

    if (!articles) return null;
    return (
        <div className="sub-menu">
            <ArticlesPreviewSlider articles={articles} backgroundColorClass={props.colorBgClass} category={props.category}/>
        </div>
    );
};

export default SubMenu;
