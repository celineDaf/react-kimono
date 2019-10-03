import React, { useState } from "react";
import "./tags-management.scss";
import TagsDisplayer from "./tags-displayer/tags-displayer";

interface Props {}

const TagsManagement = (props: Props) => {
  const [tag, setTag] = useState<string>("");
  const [tags, setTags] = useState<string[]>([]);

  const handleAddTag = (): void => {
    if (!tag || tag.length == 0) {
      return;
    }
    if (checkIfTagDuplicate()) {
      setTag("");
      return;
    }
    setTags([...tags, tag]);
    setTag("");
  };

  const checkIfTagDuplicate = (): boolean => {
    return !!tags.find(t => t === tag);
  };

  const removeTag = (index: number) => {
    tags.splice(index, 1);
    setTags([...tags]);
  }

  return (
    <div className="tags-management">
      <div className="section">
        <input
          type="text"
          name="tag"
          value={tag}
          placeholder="Ajouter des tags en pressant entrer"
          onKeyDown={event => {
            if (event.keyCode === 13) { // Enter key
              handleAddTag();
            }
          }}
          onChange={event => setTag(event.target.value)}
        />
      </div>

      <TagsDisplayer tags={tags} onRemove={removeTag} />
    </div>
  );
};

export default TagsManagement;
