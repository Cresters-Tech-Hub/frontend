import React, { useEffect } from 'react'
import './style.scss'
import { toast } from 'react-toastify'
import ProfileSidebar from '../../components/sidebar/profile/Sidebar'
import Main from './main/Main'
import Sidebar from '../dashboard/sidebar/Sidebar'
import { authMenu } from '../../assets/JsonData/menu'
import { useWindowSize } from '../../hooks'


export default function Profile() {
  const options = {
    autoClose: 4000,
    type: toast.TYPE.SUCCESS,
    hideProgressBar: true,
    position: toast.POSITION.TOP_CENTER,
    pauseOnHover: true,
    progress: 0.2,
    style: {
      color: '#444042',
      background: '#F2FDF5',
      border: '1px solid #A2DBBD',
      borderRadius:"12px"
    },
    // and so on ...
  }
  const width = useWindowSize();
  const notify = () => toast('Email Verification succesful!', options)

  useEffect(() => {
    //notify()
  }, [])
  return (
    <div className="user_profile">
      <div className="profileLogo">
      Cresters
      </div>
      <div className="container">
        {width > 768 && <Sidebar menuData={authMenu} />}
      <Main/>
      </div>
    </div>
  )
}
