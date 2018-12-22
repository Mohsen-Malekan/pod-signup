import React, { Component } from "react";
import { Formik, Form } from "formik";
import { Subscribe } from "unstated";
import FormContainer from "../../../FormContainer";
import Cover from "./Cover";
import Logo from "./Logo";
// import validationSchema from "./validationSchema";
// import { TextInput, SelectInput, Textarea } from "../../FormInputs";

class Documents extends Component {
  submit = values => {
    this.formContainer.setData("tab4", values);
    //upload files

    this.props.submit({
      ...this.formContainer.state.tab1,
      ...this.formContainer.state.tab2,
      ...this.formContainer.state.tab3,
      ...this.formContainer.state.tab4
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

          <ul>
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
              // validationSchema={validationSchema}
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
