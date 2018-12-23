import React from "react";
import { Field, getIn } from "formik";

const ErrorMessage = ({ name }) => (
  <Field
    name={name}
    render={({ form }) => {
      const error = getIn(form.errors, name);
      const touch = getIn(form.touched, name);
      return touch && error ? (
        <span className="text-error">{error}</span>
      ) : null;
    }}
  />
);

export default ErrorMessage;
