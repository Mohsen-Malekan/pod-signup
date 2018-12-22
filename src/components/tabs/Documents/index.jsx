import React, { Component } from "react";
import axios from "axios";
import { Formik, Form } from "formik";
import { Subscribe } from "unstated";
import FormContainer from "../../../FormContainer";
import Cover from "./Cover";
import Logo from "./Logo";
// import Document from "./Document";
import { FieldArray, Field, getIn } from "formik";
import { TextInput } from "../../FormInputs";
import validationSchema from "./validationSchema";

class Documents extends Component {
<<<<<<< HEAD
  submit = values => {
    this.formContainer.setData("tab4", values);
    //upload files

    this.props.submit({
=======
  submit = async values => {
    // console.log(values);
    await this.formContainer.setData("tab4", values);

    let promises = [];
    // upload images
    promises.push(this.uploadImage(values.logo, "logo"));
    promises.push(this.uploadImage(values.cover, "cover"));

    // upload files

    await Promise.all(promises);
    await this.submit2({
>>>>>>> 864c08d7cb1f4456998677fbc95f646c7f0af6d4
      ...this.formContainer.state.tab1,
      ...this.formContainer.state.tab2,
      ...this.formContainer.state.tab3,
      ...this.formContainer.state.tab4
    });
  };

  uploadImage = (file, name) => {
    if (file) {
      const formData = new FormData();
      formData.append("fileName", name);
      formData.append("image", file);

      return axios.post(`/api/upload/${name}`, formData).then(res =>
        this.formContainer.setData("tab4", {
          ...this.formContainer.state.tab4,
          [`${name}Image`]: res.data.url
        })
      );
    } else {
      return this.formContainer.setData("tab4", {
        ...this.formContainer.state.tab4,
        [`${name}Image`]: ""
      });
    }
  };

  submit2 = async values => {
    console.log(values);
    values.sheba = values.sheba.slice(2);
    const data = await axios.post("/api/signup", values).then(res => res.data);
    console.log(data);
  };

  moveBack = () => {
    this.props.setTab(3);
  };

  renderForm = props => {
    const { values, setFieldValue } = props;

    return (
      <>
        <h2>بارگزاری مستندات کسب و کار</h2>
        <Form>
          <h4>اطلاعات تصویری جهت شبکه آوند</h4>
          <div className="setup-header">
            <Cover cover={values.cover} setFieldValue={setFieldValue} />
            <Logo logo={values.logo} setFieldValue={setFieldValue} />
          </div>

          <h4>بارگزاری مستندات کسب و کار</h4>
          <ul className="clearfix">
            <FieldArray
              name="docs"
              render={arrayHelpers => (
                <>
                  {values.docs &&
                    values.docs.length > 0 &&
                    values.docs.map((doc, index) => (
                      <li className="upload-document" key={index}>
                        <ul className="clearfix">
                          <TextInput
                            name={`docs.${index}.name`}
                            placeholder="عنوان سند"
                            {...props}
                          />
                          <ErrorMessage name={`docs.${index}.name`} />
                          <li className="half-col">
                            <label>
                              فایل سند را انتخاب کنید.
                              <input type="file" name={doc.name} />
                            </label>
                            <div className="tools">
                              <button
                                type="button"
                                className="delete"
                                onClick={() => arrayHelpers.remove(index)}
                              >
                                <span />
                              </button>
                            </div>
                          </li>
                        </ul>
                      </li>
                    ))}
                  <li className="new-row">
                    <button type="button" onClick={() => arrayHelpers.push("")}>
                      ردیف جدید
                    </button>
                  </li>
                </>
              )}
            />
          </ul>

          <ul className="clearfix">
            <li>
              <input
                type="submit"
                value="تایید و ادامه تکمیل مراحل"
                className="btn_box"
              />
              <input
                type="button"
                className="back-btn"
                value="ویرایش اطلاعات تماس"
                onClick={this.moveBack}
              />
            </li>
          </ul>
        </Form>
      </>
    );
  };

  render() {
    return (
      <Subscribe to={[FormContainer]}>
        {form => {
          this.formContainer = form;
          return (
            <Formik
              initialValues={form.state.tab4}
              validationSchema={validationSchema}
              onSubmit={this.submit}
              render={this.renderForm}
            />
          );
        }}
      </Subscribe>
    );
  }
}

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

export default Documents;
