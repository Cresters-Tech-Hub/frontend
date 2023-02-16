import React from 'react'
import './riderrightsidebar.scss';
import map from '../../../assets/images/map.png'
import RecentNotifications from '../../../components/recent_notifications/RecentNotifications';

const RiderRightsidebar = () => {
    const array =Array(5).fill("Hello.....you have a new pairing for delivery request from ade...")
  return (
    <div className='rider_right_sidebar'>
     <div className="top">
        <div className="nav">
        <div className="left">Location</div>
        <div className="right">View settings</div>
        </div>
        <div className="map">
            <img src={map} alt="" />
        </div>
     </div>
     <RecentNotifications array={array} margintTop='5rem'/>
    </div>
  )
}

export default RiderRightsidebar
