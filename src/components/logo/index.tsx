import React from 'react'
import './style.scss'
import logo from '../../assets/images/crester_logo.png'

interface LogoProps {
  regType?: string | undefined
  isLoginpage?: boolean
}

export default function Logo({ regType, isLoginpage }: LogoProps) {
  return (
    <div className="logo_items">
      <img src={logo} alt="" />
      {isLoginpage ? (
        <div className="create">Login</div>
      ) : (
        <div className="create">
          Create {`${regType ? 'a ' + regType : 'an'}`} Account
        </div>
      )}
    </div>
  )
}
