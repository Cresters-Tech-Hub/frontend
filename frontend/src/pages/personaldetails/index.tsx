import { Avatar } from '@mui/material'
import React from 'react'
import AlertBox from '../../components/helper/Alert'
import './style.scss'
import Input from './../../components/form/index'
import startIcon from '../../assets/images/profile.png'
import emailIcon from '../../assets/images/email.png'
import location from '../../assets/images/location.png'
import phone from '../../assets/images/phone-call.png'
import Button from '../../components/buttons'
import { updateDetailsSchema } from '../../shema/updateProfileSchema'
import { useFormik } from 'formik'


export default function PersonalDetails() {
  const {values, errors, touched, isSubmitting, handleBlur, handleChange, handleSubmit}
  = useFormik({
    initialValues:{
      firstName:'',
      lastName:'',
      address:'',
      phoneNumber:'',
      email:''
    },
    validationSchema:updateDetailsSchema,
    onSubmit:(values, actions)=>{
      console.log('updated')
    }
  })

  return (
    <div className="personal_deatils">
      <AlertBox
        type="info"
        text="Kindly update your account here and include the necessary documents required to start getting match as a vendor/logistics agent."
      />
      <div className="avatar">
        <Avatar sx={{ width: '100px', height: '100px' }} />
        <div className="upload">Upload image</div>
      </div>
      <form onSubmit={handleSubmit}>
      <Input
        startIcon={startIcon}
        value={values.firstName}
        onBlur={handleBlur}
        onChange={handleChange}
        style={{ marginTop: '40px' }}
        placeholder="First Name"
        name='firstName'
        error={errors.firstName && touched.firstName ? true : false}
        helperText={errors.firstName && touched.firstName ? errors.firstName : null}
      />
      <Input
        startIcon={startIcon}
        style={{ marginTop: '40px' }}
        placeholder="Last Name"
        name='lastName'
        value={values.lastName}
        onBlur={handleBlur}
        onChange={handleChange}
        error={errors.lastName && touched.lastName ? true : false}
        helperText={errors.lastName && touched.lastName ? errors.lastName : null}
      />
      <Input
        startIcon={emailIcon}
        style={{ marginTop: '40px' }}
        placeholder="Email Address"
        name='email'
        type='email'
        value={values.email}
        onBlur={handleBlur}
        onChange={handleChange}
        error={errors.email && touched.email ? true : false}
        helperText={errors.email && touched.email ? errors.email : null}
      />
      <Input
        startIcon={location}
        style={{ marginTop: '40px' }}
        placeholder="Home Address"
        name='address'
        value={values.address}
        onBlur={handleBlur}
        onChange={handleChange}
        error={errors.address && touched.address ? true : false}
        helperText={errors.address && touched.address ? errors.address : null}
      />
      <Input
        startIcon={phone}
        style={{ marginTop: '40px' }}
        placeholder="Phone Number"
        name="phoneNumber"
        type='text'
        value={values.phoneNumber}
        onBlur={handleBlur}
        onChange={handleChange}
        error={errors.phoneNumber && touched.phoneNumber ? true : false}
        helperText={errors.phoneNumber && touched.phoneNumber ? errors.phoneNumber : null}
      />
    <Button text='Update Changes' type='submit' disabled={isSubmitting}/>
    </form>
    </div>
  )
}
