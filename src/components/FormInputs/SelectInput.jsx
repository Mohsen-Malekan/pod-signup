import React from "react";

const TextInput = props => {
  const {
    name,
    options,
    values,
    errors,
    touched,
    handleChange,
    handleBlur,
    children
  } = props;

  return (
    <p className="half-col clearfix">
      <select
        className={touched[name] && errors[name] ? "error" : ""}
        name={name}
        defaultValue={values[name]}
        onChange={handleChange}
        onBlur={handleBlur}
      >
        {children}
        {options.map(option => (
          <option
            key={option.id}
            value={option.code || option.id || option.name}
          >
            {option.name}
          </option>
        ))}
      </select>
      {touched[name] &&
        !!errors[name] && <span className="text-error">{errors[name]}</span>}
    </p>
  );
};

export default TextInput;
