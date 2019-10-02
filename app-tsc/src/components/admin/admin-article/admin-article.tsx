import React, { useState, SetStateAction } from "react";
import { CategoriesList, CategoriesEnum, Categories } from "../admin-categories/category-types";
import "./admin-article.scss"
interface PropsType {
  
}

const AdminArticle = (props: PropsType) => {
  const [tag, setTag] = useState<string>("");
  const [tags, setTags] = useState<string[]>([]);

  const categories: Categories[] = CategoriesList;
  let category: string = CategoriesEnum.BOOKS;

  const handleSelectChange = (event: React.ChangeEvent<HTMLSelectElement> ) => {
    category = event.currentTarget.value;
  };
  
    const handleChange = (event: React.ChangeEvent<HTMLFormElement> ): void => {
      
    };
  
    const handleAddTag = (): void => {
      if (!tag || tag.length == 0 ) {return;}
      setTags([...tags, tag]);
      setTag('');
    };
    const handleRemoveTag = (tagToRemove:string): void => {
      setTags(tags.filter((t) => t !== tagToRemove));
    };


  
  return (
    <div className="admin-article">
      <form>
        <div className="section">
          <label>
            Nom du nouvel article :
            <input type="text" name="name" />
          </label>
        </div>

        <div>
          <select value={category} onChange={handleSelectChange}>
            {categories.map(i => {
              return (
                <option value="{i}" key={i}>
                  {i}
                </option>
              );
            })}
          </select>
        </div>

        <div>
          <label>
            Tags
            <div>
            { tags && tags.length > 0 && (
            tags.map( (i: string) => {
              return (
                <div className="selected-tag">{i} 
                <div className="tag-to-remove" onClick={() => handleRemoveTag(i)}>x</div>
                </div>
              );
            })
            )}
            </div>
            <input type="text" name="tag" value={tag} onChange={event => setTag(event.target.value) }/>
            <button type="button" onClick={() => handleAddTag()}>Ajouter</button>
          </label>
        </div>

        <div>
          <button type="button" className="button">Créer</button>
        </div>
      </form>
    </div>
  );
};

export default AdminArticle;
