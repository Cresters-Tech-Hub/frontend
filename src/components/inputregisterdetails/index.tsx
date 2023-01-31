import React from 'react'
import AccountType from '../accountType/AccountType'
import './style.scss'
import { useSelector, useDispatch } from 'react-redux'
import { RootState } from '../../store'


const InputRegisterDetails = () => {
  const typeState = useSelector((state: RootState) => state.userType.userType)
  return <AccountType userType={typeState}/>

}

export default InputRegisterDetails
