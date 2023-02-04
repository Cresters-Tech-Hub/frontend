import * as yup from 'yup'

const passwordRules = /^(?=.*\d)(?=.*[a-z])(?=.*[A-Z]).{6,12}$/
// min 6 characters, 1 upper case letter, 1 lower case letter, 1 numeric digit.
const phoneRegExp =  /(\+[1-9]{2,3})\d{10}|(\d{11)/

export const updateDetailsSchema = yup.object().shape({
  email: yup.string().email('Please enter a valid email').required('Required'),
  firstName: yup
    .string()
    .matches(/^\w{3,12}$/, "Only alphabets are allowed for this field, minimum of 3 characters and maximumof 15 ")
    .required('Required'),
  lastName: yup
  .string()
  .matches(/^\w{3,12}$/, "Only alphabets are allowed for this field, minimum of 3 characters and maximumof 15 ")
  .required('Required'),
  address: yup
  .string()
  .min(5, "minimum of 5 characters and maximumof 60 ")
  .max(60, 'maximum of 30 characters exceeded')
  .required('Required'),
  phoneNumber: yup.string().matches(phoneRegExp, 'enter + followed by your country code, then your number skipping the first zero').required('Required'),
})

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
