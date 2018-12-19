import * as Yup from "yup";
import isSheba from "./sheba.validator";

Yup.addMethod(Yup.string, "sheba", function(errorMessage) {
  return this.test("isSheba", errorMessage, function(value) {
    const { createError } = this;

    return isSheba(value) || createError(errorMessage);
  });
});

const validationSchema = Yup.object().shape({
  isRegistered: Yup.string(),
  registrationNumber: Yup.string().when("isRegistered", {
    is: "true",
    then: Yup.string().required("شماره ثبت را وارد نمایید"),
    otherwise: Yup.string()
  }),
  nationalCode: Yup.string().when("isRegistered", {
    is: "true",
    then: Yup.string().required("شناسه ملی را وارد نمایید"),
    otherwise: Yup.string()
  }),
  sheba: Yup.string()
    .min(26, "فقط 26 کاراکتر مجاز است")
    .max(26, "فقط 26 کاراکتر مجاز است")
    .sheba("مقدار نامعتبر، IR و سپس 24 عدد (IRxxxxxxxxxxxxxxxxxxxxxxxx)")
    .required("شماره شبا را وارد نمایید"),
  description: Yup.string().required("توضیحات کسب و کار را وارد نمایید")
});

export default validationSchema;
