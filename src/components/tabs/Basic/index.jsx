import React, { Component } from "react";
import { Formik, Form } from "formik";
import { Subscribe } from "unstated";
import FormContainer from "../../../FormContainer";
import validationSchema from "./validationSchema";
import { TextInput, SelectInput } from "../../FormInputs";
import guildList from "./guildList";

class Basic extends Component {
  submit = values => {
    this.formContainer.setData("tab1", values);
    this.props.setTab(2);
  };

  renderForm(props) {
    return (
      <>
        <h2>اطلاعات شناسه‌ای</h2>
        <Form>
          <ul>
            <TextInput
              name="businessName"
              placeholder="نام کسب و کار"
              {...props}
            />
            <SelectInput name="guildCode" options={guildList} {...props}>
              <option value="" disabled>
                لطفا صنف را انتخاب نمایید
              </option>
            </SelectInput>
            <TextInput name="username" placeholder="نام کاربری" {...props} />
            <TextInput name="email" placeholder="پست الکترونیک" {...props} />
            <p>
              <input
                type="submit"
                value="تایید و ادامه تکمیل مراحل"
                className="btn_box"
              />
            </p>
          </ul>
        </Form>
      </>
    );
  }

  render() {
    return (
      <Subscribe to={[FormContainer]}>
        {form => {
          this.formContainer = form;
          return (
            <Formik
              initialValues={form.state.tab1}
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
