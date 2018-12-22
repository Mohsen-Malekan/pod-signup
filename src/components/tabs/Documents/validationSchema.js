import * as Yup from "yup";

const validationSchema = Yup.object().shape({
  docs: Yup.array().of(
    Yup.object().shape({
      name: Yup.string().required("Required")
    })
  )
});

export default validationSchema;
