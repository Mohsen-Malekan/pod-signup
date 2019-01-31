import React, { Component } from "react";
import { Formik, Form } from "formik";
import { Subscribe } from "unstated";
import FormContainer from "../../../FormContainer";
import validationSchema from "./validationSchema";
import { TextInput, SelectInput, Textarea } from "../../FormInputs";
import states from "./states";
import cities from "./cities";

class Contact extends Component {
  submit = values => {
    this.formContainer.setData("tab3", values);
    this.props.setTab(4);
  };

  moveBack = () => {
    this.props.setTab(2);
  };

  renderForm = props => {
    return (
      <>
        <h2>اطلاعات رابط کسب و کار</h2>
        <Form>
          <h4>اطلاعات شخصی</h4>
          <ul className="clearfix">
            <TextInput name="agentFirstName" placeholder="نام" {...props} />
            <TextInput name="agentLastName" placeholder="نام خانوادگی" {...props} />
            <TextInput name="agentCellphoneNumber" placeholder="شماره همراه" {...props} />
            <TextInput
              name="agentNationalCode"
              placeholder="کد ملی"
              {...props}
            />
          </ul>
          <h4>اطلاعات مکان</h4>
          <ul className="clearfix">
            <SelectInput name="state" options={states} {...props}>
              <option value="" disabled>
                استان را انتخاب نمایید
              </option>
            </SelectInput>
            <SelectInput
              name="city"
              options={cities[props.values.state]}
              {...props}
            >
              <option value="" disabled>
                شهر را انتخاب نمایید
              </option>
            </SelectInput>
            <Textarea name="address" placeholder="آدرس" rows="7" {...props} />
            <li>
              <input
                type="submit"
                value="تایید و ادامه تکمیل مراحل"
                className="btn_box"
              />
              <input
                type="button"
                className="back-btn"
                value="ویرایش اطلاعات شناسه ای"
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
              initialValues={form.state.tab3}
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

export default Contact;
