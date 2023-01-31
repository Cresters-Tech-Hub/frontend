import * as yup from 'yup'

const passwordRules = /^(?=.*\d)(?=.*[a-z])(?=.*[A-Z]).{6,12}$/
// min 6 characters, 1 upper case letter, 1 lower case letter, 1 numeric digit.

export const registerSchema = yup.object().shape({
  email: yup.string().email('Please enter a valid email').required('Required'),
  username: yup
    .string()
    .min(3, 'must be greater than two characters')
    .max(20, 'maximum of 20 character exceeded')
    .required('Required'),
  password: yup
    .string()
    .min(6)
    .matches(passwordRules, {
      message:
        'Incorrect password format, must contain at least one number, uppercase and lowercase and special character',
    })
    .required('Required'),
  termsAndConditions: yup
    .bool()
    .oneOf([true], 'You need to accept the terms and conditions'),
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
