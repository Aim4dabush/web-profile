import { useState } from "react";

export const useValidation = (validation) => {
  const [value, setValue] = useState("");
  const [touched, setTouched] = useState(false);

  const isValid = validation(value);
  const error = !isValid && touched;

  const handleOnChange = (e) => {
    setValue(e.target.value);
  };

  const handleOnBlur = () => {
    setTouched(true);
  };

  const reset = () => {
    setValue("");
    setTouched(false);
  };

  return {
    value,
    isValid,
    error,
    handleOnChange,
    handleOnBlur,
    reset,
  };
};
