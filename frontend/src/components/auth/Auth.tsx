import React from 'react'
import { Outlet } from 'react-router-dom'
import './auth.scss'


export default function Auth() {
  return (
    <div className='auth'>
      <Outlet/>
    </div>
  )
}
