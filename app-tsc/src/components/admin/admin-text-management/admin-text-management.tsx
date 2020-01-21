import React, { useEffect, } from "react";
import { useState } from "react";

interface Props {
  text?: string,
  onChangeText: (updatedText: string) => void;
}

const AdminTextManagement = (props: Props) => {
  const [text, setText] = useState<string>(props.text || '');

  useEffect(() => {
    const fireParent = () => {
      props.onChangeText(text);
    }
    fireParent();
    console.log('render');
  }, [text]);

  return (
    <textarea
      name="text"
      rows={20}
      value={text}
      className="article-content-input"
      onChange={event => setText(event.target.value)}
    ></textarea>
  );
};

export default AdminTextManagement;
