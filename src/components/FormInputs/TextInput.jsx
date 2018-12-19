import React from "react";

const TextInput = props => {
  const {
    name,
    placeholder,
    values,
    errors,
    touched,
    handleChange,
    handleBlur
  } = props;

  return (
    <li className="half-col">
      <input
        className={touched[name] && !!errors[name] ? "error" : ""}
        type="text"
        name={name}
        value={values[name]}
        placeholder={placeholder}
        onChange={handleChange}
        onBlur={handleBlur}
      />
      {touched[name] &&
        !!errors[name] && <span className="text-error">{errors[name]}</span>}
    </li>
  );
};

export default TextInput;
