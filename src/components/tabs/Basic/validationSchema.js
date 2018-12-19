import * as Yup from "yup";

const validationSchema = Yup.object().shape({
  businessName: Yup.string().required("نام کسب و کار را وارد نمایید"),
  guildCode: Yup.string().required("صنف کسب و کار را انتخاب نمایید"),
  username: Yup.string()
    .matches(/^[0-9A-Z_.]+$/i, {
      message: "بدون فاصله و فقط حروف انگلیسی و _ .",
      excludeEmptyString: true
    })
    .required("نام کاربری را وارد نمایید"),
  email: Yup.string()
    .email("پست الکترونیک نامعتبر است")
    .required("پست الکترونیک را وارد نمایید")
});

export default validationSchema;
