import React, { useState, useEffect } from "react";
import "./tags-management.scss";
import TagsDisplayer from "../../../shared/tags-displayer/tags-displayer";

interface Props {
  onChangeTags: (tags: string[]) => void
}

const TagsManagement = (props: Props) => {
  const [tag, setTag] = useState<string>("");
  const [tags, setTags] = useState<string[]>([]);

  const handleAddTag = (): void => {
    if (!tag || tag.length === 0) {
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
  };

  useEffect (() => {
    props.onChangeTags(tags);
  }, [tags]);

  return (
    <div className="tags-management">
      <div className="section">
      <div className='input-yellow'>
        <input
          type="text"
          name="tag"
          value={tag}
          maxLength={25}
          onKeyDown={event => {
            if (event.keyCode === 13) { // Enter key
              handleAddTag();
            }
          }}
          onChange={event => setTag(event.target.value)}
        />
        <label className="label">Ajouter des tags</label>
        </div>
      </div>

      <TagsDisplayer tags={tags} onRemove={removeTag} canRemove={true} />
    </div>
  );
};

export default TagsManagement;
