import React from 'react'
import './acceptedRide.scss'
import verifiedImg from '../../../assets/images/verified.png'
import gisMap from '../../../assets/images/gis_map.png'
import locationImg from '../../../assets/images/dsb_location.png'

const AcceptedRide = () => {
  return (
    <div className='accept_ride'>
     <div className="top_title">
      <div className="navigation_left"><span>Newly Accepted Ride Request/</span><span>View Offer</span></div>
      <div className="navigation_right"><span>Next</span><span>/</span><span>Previous</span></div>
     </div>
     <div className="seller_info">
      <div className="title">Seller Information</div>
      <div className="info_container">
        <div className="store_name"><span>Mayvee Stores</span><img src={verifiedImg} alt="" /></div>
        <div className="view_on_map"><span>View on map</span><img src={gisMap} alt="" /></div>
        </div>
        <div className="store_type">Fashion line</div>
     </div>
     <div className="locationn">
      <img src={locationImg} alt="" />
      <div className="location_container">
        <div className="title">Location</div>
        <div className="info">
          <span className='addr'>No 4, Off Shangisha street, Magodo Lagos.</span><span><span>/ Estimated Time:<span className='time'>30 mins</span></span></span>
          <span><span>/ Travel Distance:</span><span className="distance">5 km</span></span>
        </div>
      </div>
     </div>
     <div className="package_info">
      <div className="title_main">Package Information</div>
      <div className="package_container">
      <div className="info">
        <div className="title">Package size</div>
        <div className="value">Less than 5kg</div>
      </div>
      <div className="info">
        <div className="title">Package size</div>
        <div className="value">Less than 5kg</div>
      </div>
      <div className="info">
        <div className="title">Package size</div>
        <div className="value">Less than 5kg</div>
      </div>
      <div className="info">
        <div className="title">Package size</div>
        <div className="value">Less than 5kg</div>
      </div>
      </div>
     </div>
    </div>
  )
}

export default AcceptedRide
