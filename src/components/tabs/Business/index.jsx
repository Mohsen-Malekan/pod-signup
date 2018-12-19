import React, { Component } from "react";
import { Formik, Form } from "formik";
import { Subscribe } from "unstated";
import FormContainer from "../../../FormContainer";
import validationSchema from "./validationSchema";
import { TextInput, RadioInput, Textarea } from "../../FormInputs";

class Basic extends Component {
  submit = values => {
    this.formContainer.setData("tab2", values);
    this.props.setTab(3);
  };

  moveBack = () => {
    this.props.setTab(1);
  };

  renderForm = props => {
    const { values } = props;

    return (
      <>
        <h2>اطلاعات شناسه‌ای کسب و کار</h2>
        <Form>
          <ul className="clearfix">
            <RadioInput
              name="isRegistered"
              trueLabel="شرکت ثبت شده است"
              falseLabel="کسب و کار نوپا است"
              {...props}
            />
            {values.isRegistered === "true" && (
              <TextInput
                name="registrationNumber"
                placeholder="شماره ثبت"
                {...props}
              />
            )}
            {values.isRegistered === "true" && (
              <TextInput
                name="nationalCode"
                placeholder="شناسه ملی"
                {...props}
              />
            )}
            <TextInput name="sheba" placeholder="شماره شبا" {...props} />
            <Textarea
              name="description"
              placeholder="توضیحات"
              rows="7"
              {...props}
            />
            <li>
              <input
                type="submit"
                value="تایید و ادامه تکمیل مراحل"
                className="btn_box"
              />
              <input
                type="button"
                className="back-btn"
                value="ویرایش اطلاعات اولیه"
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
              initialValues={form.state.tab2}
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

export default Basic;
