import React, { useEffect } from "react";
import { useState } from "react";

interface Props {
  onChangeText: (updatedText: string) => void;
}

const AdminTextManagement = (props: Props) => {
  const [text, setText] = useState<string>("");

  const onChangeText = (updatedText: string): void => {
    setText(updatedText);
  };

  useEffect(() => {
    props.onChangeText(text);
  }, [text]);

  return (
    <textarea
      name="text"
      rows={20}
      className="article-content-input"
      onChange={event => onChangeText(event.target.value)}
    ></textarea>
  );
};

export default AdminTextManagement;
