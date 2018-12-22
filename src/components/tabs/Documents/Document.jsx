import React, { Component } from "react";

class Document extends Component {
  render() {
    const { index } = this.props;
    return (
      <li className="upload-document">
        <ul className="clearfix">
          <li className="half-col">
            <input type="text" name={doc.name} placeholder="عنوان سند" />
            <span className="text-error" />
          </li>
          <li className="half-col">
            <label>
              فایل سند را انتخاب کنید.
              <input type="file" name={doc.name} />
            </label>
            <div className="tools">
              <button
                type="button"
                className="delete"
                onClick={this.props.deleteDocument}
              >
                <span />
              </button>
            </div>
          </li>
        </ul>
      </li>
    );
  }
}

export default Document;
