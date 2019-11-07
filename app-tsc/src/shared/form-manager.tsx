import { useState } from "react";

interface PropsType {
  callback: () => void;
  initialState: any;
}

const FormManager = (props: PropsType) => {
  const [values, setValues] = useState(props.initialState);

  const handleSubmit = (event: React.ChangeEvent<HTMLFormElement>) => {
    if (event) event.preventDefault();
    props.callback();
  };

  const handleChange = (event: React.ChangeEvent<HTMLFormElement>) => {
    event.persist();
    setValues((values: any) => ({
      ...values,
      [event.target.name]: getValue(event)
    }));
  };


  const getValue = (event: React.ChangeEvent<HTMLFormElement>) => {
    switch (event.type) {
        case "select":
            return event.currentTarget.value;
      case "checkbox":
        return event.currentTarget.checked;
      case "radio":
        if (event.currentTarget.value === "true") return true;
        if (event.currentTarget.value === "false") return false;
        return event.currentTarget.value;
      case "date":
        return new Date(event.currentTarget.value);
      case "number":
        return Number(event.currentTarget.value);
      default:
        return event.currentTarget.value;
    }
  };

  return {
    handleChange,
    handleSubmit,
    values
  };
};

export default FormManager;