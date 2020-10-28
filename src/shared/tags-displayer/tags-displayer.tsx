import React from "react";
import './tags-displayer.scss'

interface Props {
  tags: string[];
  canRemove?: boolean | false;
  onRemove?: (i: number) => void;
}

const TagsDisplayer = (props: Props) => {
  return (
    <div className="flex-row-container tags-displayer">
      {props.tags.map((tag: string, i : number) => {
        return (
          <div className="tag" key={i}>
            {tag}
           {props.canRemove && 
            <div className="tag-to-remove" onClick={() => props.onRemove && props.onRemove(i)}>
            x
          </div>}
          </div>
        );
      })}
    </div>
  );
};

export default TagsDisplayer;
