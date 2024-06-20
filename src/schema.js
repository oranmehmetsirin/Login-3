import * as yup from "yup";

const regex = "^(?=.*[a-z])(?=.*[A-Z])(?=.*d)(?=.*[W_]).{5,}$";

const schema = yup.object().shape({
  email: yup
    .string()
    .email("E-Mail is not valid format")
    .required("E-Mail area is required"),
  age: yup
    .number()
    .min(18, "Age can not be less than 18")
    .max(100, "Age can not be more than 100")
    .integer("Please enter a integer number")
    .required("Age area is required"),
  password: yup
    .string()
    .min(5, "Password must be at least 5 character")
    .matches(regex, "Password is not enough strong")
    .required("Password area is required."),
  passwordConfirm: yup
    .string()
    .oneOf(
      [yup.ref("password")],
      "Your verification password does not match the original password"
    )
    .required("Plase verify your password"),
});

export default schema;
