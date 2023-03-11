import React from 'react'
import './acceptRideRightSidebar.scss'
import { BsFillCheckSquareFill } from 'react-icons/bs'
import CustomerCard from '../../../components/card/CustomerCard'
import gisMap from '../../../assets/images/gis_map.png'
import map from '../../../assets/images/map.png'

const AcceptRideRightSidebar = () => {
  return (
    <div className='accept_ride_rightsidebar'>
     <div className="top_title">Receiver Information</div>
     <div className="payment">
      <div className="left">
      <span>Payment Mode:</span>
      <span>Online Payment </span>
      </div>
      <div className="right">
      <span>Paid</span>
      <BsFillCheckSquareFill size={10} color='#06C149'/>
      </div>
     </div>
     <CustomerCard style={{marginTop:"2rem", marginBottom:"2rem"}} name='Adegoke Fola' role='User'
      address='No 202, Itomori Street, Ajao Estate Road, Lagos' phone='09099882200'/>
      <div className="map">
        <div className="title">
          <span>Location on map</span>
          <img src={gisMap} alt="" />
        </div>
        <div className="map_div">
            <img src={map} alt="" />
          </div>
      </div>
    </div>
  )
}

export default AcceptRideRightSidebar
