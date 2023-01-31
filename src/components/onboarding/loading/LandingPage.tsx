import React from 'react'
import './landingPage.scss'
import crester_logo from '../../../assets/images/crester_logo.png'
import spinner from '../../../assets/images/loading.png'
import Spinner from '../../../utils/spinner/Spinner'
import { useNavigate } from 'react-router-dom'


const LandingPage = () => {
  const navigate = useNavigate();
  React.useEffect(()=>{
    setTimeout(()=>navigate('/splashscreen', {state:'/'}), 2000);
    return ()=>console.log('')
  }, [])

  return (
    <div className='landing_page'>
      <div className="landing_items_center">
      <img src={crester_logo} alt="" />
      <div className="crester_logo">Cresters</div>
      </div>
      <Spinner imageUri={spinner}/>
    </div>
  )
}

export default LandingPage
