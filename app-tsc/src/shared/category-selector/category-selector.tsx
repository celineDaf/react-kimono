import React, { useState } from "react";
import { CategoriesList, Categories } from "../../domain/category-types";
import "./category-selector.scss";

interface Props {}

const CategorySelector = (props: Props) => {
  const categories: Categories[] = CategoriesList;
  const [category, setCategory] = useState<Categories>();

  const handleSelection = (selectedCategory: Categories): void => {
    setCategory(selectedCategory);
    console.log("selected category: " + selectedCategory + "  " + category);
  };

  return (
    <div>
      <div className="sub-title">Sélectionner une catégorie</div>
      <div className="flex-row-container">
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
