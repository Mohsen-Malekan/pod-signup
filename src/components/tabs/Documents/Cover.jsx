import React from "react";
import Thumb from "./Thumb";

const Cover = props => {
  const { cover, setFieldValue } = props;
  return (
    <div>
      {!cover && (
        <input
          type="file"
          className="banner-input"
          id="select-banner"
          name="cover"
          onChange={e => setFieldValue("cover", e.currentTarget.files[0])}
        />
      )}
      {cover && <Thumb file={cover} />}
      <label htmlFor="select-banner" className="banner-label">
        {!cover && "جهت انتخاب تصویر بنر کلیک نماید."}
      </label>
      <div className="tools">
        {cover && (
          <button
            type="button"
            className="delete"
            onClick={e => setFieldValue("cover", undefined)}
          >
            <span />
            حذف
          </button>
        )}
      </div>
    </div>
  );
};

export default Cover;
