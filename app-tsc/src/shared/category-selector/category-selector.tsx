import React, { useState, useEffect } from "react";
import "./category-selector.scss";
import { CategoriesList, Category } from '../../domain/category-types'

interface Props {
  onChangeCategory: (selectedCategory: Category) => void
}

const CategorySelector = (props: Props) => {
  const categories: Category[] = CategoriesList;
  const [category, setCategory] = useState<Category>();

  const handleSelection = (selectedCategory: Category): void => {
    setCategory(selectedCategory);
  };

  useEffect((): void => {
    if (category) {props.onChangeCategory(category);}
  }, [category]);

  return (
    <div>
      <div className="sub-title">Sélectionner une catégorie</div>
      <div className="flex-row-container center">
        {categories.map(i => {
          return (
            <div
              className={`category-element ${category === i && 'is-selected'}`}
              key={i}
              onClick={() => handleSelection(i)}>
              {i}
            </div>
          );
        })}
      </div>
    </div>
  );
};

export default CategorySelector;
