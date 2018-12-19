import React from "react";
import { Field } from "formik";

const RadioButton = props => {
  const {
    field: { name, value, onChange, onBlur },
    id,
    label
  } = props;

  return (
    <>
      <label htmlFor={`${name}-${id}`}>{label} </label>
      <input
        name={name}
        id={`${name}-${id}`}
        type="radio"
        value={id} // could be something else for output?
        checked={id === value}
        onChange={onChange}
        onBlur={onBlur}
      />
    </>
  );
};

const RadioInput = props => {
  const { name, trueLabel, falseLabel } = props;

  return (
    <li className="half-col">
      <ul className="clearfix">
        <li className="half-col-custom">
          <Field
            component={RadioButton}
            name={name}
            id="true"
            label={trueLabel}
          />
        </li>
        <li className="half-col-custom">
          <Field
            component={RadioButton}
            name={name}
            id="false"
            label={falseLabel}
          />
        </li>
      </ul>
    </li>
  );
};

export default RadioInput;
