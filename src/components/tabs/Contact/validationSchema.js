import * as Yup from "yup";
import isNationalId from "./nationalId.validator";

Yup.addMethod(Yup.string, "nationalId", function(errorMessage) {
  return this.test("isNationalId", errorMessage, function(value) {
    const { createError } = this;

    return isNationalId(value) || createError(errorMessage);
  });
});

const validationSchema = Yup.object().shape({
  agentFirstName: Yup.string().required("نام رابط را وارد نمایید"),
  agentLastName: Yup.string().required("نام خانوادگی رابط را وارد نمایید"),
  agentCellphoneNumber: Yup.string()
    .matches(/^(\+?98[-\s]?|0)9[0-39]\d[-\s]?\d{3}[-\s]?\d{4}$/, {
      message: "شماره همراه وارد شده نامعتبر است",
      excludeEmptyString: true
    })
    .required("شماره همراه رابط را وارد نمایید"),
  agentNationalCode: Yup.string()
    .nationalId("مقدار وارد شده نامعتبر است")
    .required("کد ملی رابط را وارد نمایید"),
  state: Yup.string().required("استان را انتخاب نمایدد"),
  city: Yup.string().required("شهر را انتخاب نمایید"),
  address: Yup.string()
    .max(1000, "بیشتر از 1000 مجاز نیست")
    .required("آدرس کسب و کار را وارد نمایید")
});

export default validationSchema;
