import React from 'react';
import "./admin-categories.scss";
import { CategoryTypes, Categories } from './category-types';



const categories: Categories[]  = CategoryTypes;

interface Props {
    
}

const AdminCategories = (props: Props) => {
    return (
        <div className="admin-categories">
            <div className="sub-title">Catégories disponible</div>

            <div className="flex-container">
                {categories.map( i => {
                    return <div className="category-element" key={i}>{i}</div>
                })}
            </div>
         
            
        </div>
    );
};

export default AdminCategories;
