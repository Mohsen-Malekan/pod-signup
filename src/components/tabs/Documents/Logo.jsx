import React from "react";
import Thumb from "./Thumb";

const Logo = props => {
  const { logo, setFieldValue } = props;
  return (
    <div className="select-logo">
      {!logo && (
        <input
          type="file"
          className="logo-input"
          id="select-logo"
          name="logo"
          accept="image/*"
          onChange={e => setFieldValue("logo", e.currentTarget.files[0])}
        />
      )}
      {logo && <Thumb file={logo} />}
      <label htmlFor="select-logo" className="logo-label">
        {!logo && "لوگو کسب و کار خود را انتخاب کنید."}
      </label>
      <div className="tools">
        {logo && (
          <button
            type="button"
            className="delete"
            onClick={() => setFieldValue("logo", undefined)}
          >
            <span />
            حذف
          </button>
        )}
      </div>
    </div>
  );
};

export default Logo;
