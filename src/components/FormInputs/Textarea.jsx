import React from "react";

const Textarea = props => {
  const {
    name,
    placeholder,
    rows,
    values,
    errors,
    touched,
    handleChange,
    handleBlur
  } = props;

  return (
    <li>
      <textarea
        className={touched[name] && !!errors[name] ? "error" : ""}
        name={name}
        value={values[name]}
        placeholder={placeholder}
        rows={rows}
        onChange={handleChange}
        onBlur={handleBlur}
      />
      {touched[name] &&
        !!errors[name] && <span className="text-error">{errors[name]}</span>}
    </li>
  );
};

export default Textarea;
