import * as yup from 'yup'

const passwordRules = /^(?=.*\d)(?=.*[a-z])(?=.*[A-Z]).{6,12}$/
// min 6 characters, 1 upper case letter, 1 lower case letter, 1 numeric digit.
const phoneRegExp =  /(\+[1-9]{2,3})\d{10}|(\d{11)/

export const updateAccountSchema = yup.object().shape({
  name: yup.string().min(3, 'Please enter a valid name, minimum is 3 characters').max(15, 'Please enter a valid name, maximum of 15 characters exceeded').required('Required'),
  description: yup
    .string()
    .min(10, 'Minimum is 3 characters').max(150, 'Maximum is 15 characters').required('Required'),
    category: yup
    .string()
    .oneOf(["food", "fashion", "furniture", "automobile", "electronics"], "Invalid category Type").required("please select item category"),
  discount: yup
  .string()
  .min(1, "minimum of 1%")
  .max(3, 'maximum of 50% discount exceeded')
  .required('Required'),
  priceOffdiscount: yup.string().min(4, "minimum of N1,000")
  .required('Required'),
})

export const updateDeliveryAgentAccountSchema = yup.object().shape({
  vehicleType: yup.string().oneOf(["Trailer", "Van", "Motocylce", "Tricycle", "Car"], "Invalid Vehicle Type").required("please select Vehicle Type"),
  vehicleModel: yup
    .string()
    .min(3, 'Minimum is 3 characters').max(25, 'Maximum is 15 characters').required('Required'),
    vehicleColor: yup
    .string()
    .oneOf(["blue", "black", "white", "gray", "red"], "Invalid color Type").required("please select color"),
    vehiclePlateNum: yup
  .string()
  .min(10, "minimum of 10 characters")
  .max(25, 'maximum of 25 characters')
  .required('Required'),
  workingHours: yup.string().min(4, "minimum of 4 characters")
  .required('Required'),
})
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

export const vendorSecuritySchema = yup.object().shape({
  password: yup
  .string()
  .min(6)
  .matches(passwordRules, {
    message:
      'Incorrect password format, must contain at least one number, uppercase and lowercase and special character',
  }),
  newPassword: yup
  .string()
  .min(6)
  .matches(passwordRules, {
    message:
      'Incorrect password format, must contain at least one number, uppercase and lowercase and special character',
  })
})

export const AddProductsSchema = yup.object().shape({
  category: yup
      .string()
      .oneOf(["food", "fashion", "furniture", "automobile", "electronics"], "Invalid category Type").required("please select item category"),
  productName: yup
    .string()
    .min(4, "minimum of 4 characters and maximumof 15 ")
    .max(15, 'maximum of 15 characters exceeded')
    .required('Required'),
  description: yup
  .string()
  .min(15, "minimum of 4 characters and maximumof 15 ")
    .max(150, 'maximum of 15 characters exceeded')
  .required('Required'),
  setPrice: yup
  .string()
  .min(3, "minimum of N100 ")
    .max(6, 'maximum of N15m exceeded')
  .required('Required'),
  setInventory: yup
  .string()
  .min(1, "minimum of 5 items")
    .max(4, 'maximum of 1000 items exceeded')
  .required('Required'),
  otherInfo: yup
  .string()
  .min(4, "minimum of 4 characters and maximumof 15 ")
    .max(150, 'maximum of 15 characters exceeded'),
    discount: yup
    .string()
    .min(1, "minimum of 1%")
    .max(3, 'maximum of 50% discount exceeded')
    .required('Required'),
    priceOffdiscount: yup.string().min(4, "minimum of N1,000")
  .required('Required'),
  tags:yup.array().min(1, "select atleast 1 item"),
      packageSize:yup.string().oneOf(["Less than 5kg", "Less than 10kg", "Less than 15kg", "Less than 25kg"], "Invalid item size"),
      variants: yup.array().min(1, "Pick at least 1 variants").max(4, "Pick at most 4 variants"),
      colors: yup.array().min(1, "Pick at least 1 color").max(4, "Pick at most 4 colors")
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
