import React, { Component } from "react";
import axios from "axios";
import { Formik, Form } from "formik";
import { Subscribe } from "unstated";
import FormContainer from "../../../FormContainer";
import Cover from "./Cover";
import Logo from "./Logo";
import ErrorMessage from "./ErrorMessage";
import { FieldArray } from "formik";
import { TextInput } from "../../FormInputs";
import validationSchema from "./validationSchema";
import Alert from "react-s-alert";

class Documents extends Component {
  state = {
    loading: false
  };

  submit = async values => {
    this.setState({ loading: true });
    await this.formContainer.setData("tab4", values);

    // upload images
    const promises = [
      this.uploadImage(values.logo, "logo"),
      this.uploadImage(values.cover, "cover")
    ];
    await Promise.all(promises);

    // upload files
    const docs = values.docs.filter(doc => !!doc.name && !!doc.file);
    const files = await Promise.all(this.uploadDocuments(docs));
    await this.formContainer.setData("tab4", {
      ...this.formContainer.state.tab4,
      meta: files
    });

    // signup
    const result = await this.formContainer.signup();
    if (!result.hasError) {
      this.setState({ loading: false });
      Alert.info("ثبت نام شما با موفقیت انجام شد");
      window.location.href = `https://accounts.pod.land:443/oauth2/authorize/?client_id=${
        process.env.REACT_APP_CLIENT_ID
      }&response_type=code&scope=profile:write%20phone:write%20email:write%20legal:write%20address:write%20client:write%20&state=eyJvdHQiOm51bGwsImV4cGlyZVRpbWUiOjAsInVyaSI6Imh0dHBzOi8vcGFuZWwucG9kLmxhbmQ6NDQzL0F1dGgvTG9naW5DYWxsYmFjay8iLCJ0b2tlbiI6bnVsbCwibWVzc2FnZUlkIjozMTYxLCJzZXJ2ZXJLZXkiOjAsInBhcmFtZXRlcnMiOm51bGx9&redirect_uri=https://panel.pod.land:443/Auth/LoginCallback/`;
      await this.formContainer.reset();
      this.props.setTab(1);
    } else {
      this.setState({ loading: false });
      Alert.error(result.message);
    }
  };

  uploadImage = (file, name) => {
    if (file) {
      const formData = new FormData();
      formData.append("fileName", name);
      formData.append("image", file);

      return axios.post(`/api/upload/image/${name}`, formData).then(res =>
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

  uploadDocuments = documents => {
    return documents.map(doc => {
      const formData = new FormData();
      formData.append("fileName", doc.name);
      formData.append("file", doc.file);

      return axios
        .post(`/api/upload/file/${doc.name}`, formData)
        .then(res => ({ name: doc.name, file: res.data.url }));
    });
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
                              {values.docs[index].file
                                ? values.docs[index].file.name
                                : "فایل سند را انتخاب کنید."}
                              <input
                                type="file"
                                name={`docs.${index}.file`}
                                disabled={!!values.docs[index].file}
                                onChange={e =>
                                  setFieldValue(
                                    `docs.${index}.file`,
                                    e.currentTarget.files[0]
                                  )
                                }
                              />
                              <ErrorMessage name={`docs.${index}.file`} />
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
                    <button
                      type="button"
                      onClick={() =>
                        arrayHelpers.push({
                          name: "",
                          file: undefined
                        })
                      }
                    >
                      ردیف جدید
                    </button>
                  </li>
                </>
              )}
            />
          </ul>

          <ul className="clearfix">
            <li>
              {this.state.loading && <div className="loader">Loading...</div>}
              <input
                type="submit"
                value={this.state.loading ? "درحال ارسال" : "تایید و ثبت نام"}
                disabled={this.state.loading}
                className={
                  this.state.loading ? "btn_box loader_enable" : "btn_box"
                }
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

export default Documents;
