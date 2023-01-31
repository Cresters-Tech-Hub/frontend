import React from 'react'
import './style.scss'
import { Link } from 'react-router-dom';
import party from '../../../assets/images/emoji_party.png'

export const SuccessReg = () => {
  return (
    <div className='success_reg'>
        <div className="container">
            <img src={party} alt="" width='102px' height='102px'/>
           <div>Thanks for Registering!</div>
           <p>A verification link has been sent to your mail</p>
           <Link to='#'>A verification link has been sent to your mail</Link>
        </div>
    </div>
  )
}


