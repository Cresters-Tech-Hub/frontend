import * as yup from "yup";

const passwordRules = /^(?=.*\d)(?=.*[a-z])(?=.*[A-Z])(?=.*\W).{6,}$/;
const fakeRule = /\w/
// min 5 characters, 1 upper case letter, 1 lower case letter, 1 numeric digit.

export const loginSchema = yup.object().shape({
  email: yup.string().min(3, "Please enter a valid username").max(25, "maximum of 25 characters exceeded").required("Required"),
  password: yup
    .string()
    .min(3)
    .matches(fakeRule, { message: "Incorrect password format, must contain at least one number, uppercase and lowercase and special character" })
    .required("Required"),
//   confirmPassword: yup
//     .string()
//     .oneOf([yup.ref("password"), null], "Passwords must match")
//     .required("Required"),
});

// export const advancedSchema = yup.object().shape({
//   username: yup
//     .string()
//     .min(3, "Username must be at least 3 characters long")
//     .required("Required"),
//   jobType: yup
//     .string()
//     .oneOf(["designer", "developer", "manager", "other"], "Invalid Job Type")
//     .required("Required"),
//   acceptedTos: yup
//     .boolean()
//     .oneOf([true], "Please accept the terms of service"),
// });