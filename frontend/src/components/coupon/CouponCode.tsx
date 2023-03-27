import React, {useState, useEffect} from 'react'
import './couponcode.scss'
import ep_price_tag from "../../assets/images/ep_price-tag.png"

const CouponCode = () => {
  const [coupon, setCoupon] = useState("");
  const [filled, setFilled] = useState(false)
  const handleCouponChange = (e:React.ChangeEvent<HTMLInputElement>)=>{
   let val = e.target.value;
   setCoupon(val);
  }

  useEffect(()=>{
    if(coupon.length > 4) setFilled(true);
    else setFilled(false);
  }, [filled, coupon])
  return (
    <div className="coupon_code">
       { coupon.length < 1 ? <img src={ep_price_tag} alt="" /> : null} 
    <input type="text" placeholder='Enter Code' value={coupon} onChange={handleCouponChange}/>
    <button style={{background:filled ? "#06c149" : "#eeeeee", color:filled ? "#fff" : "black"}}>Apply</button>   
</div>
  )
}

export default CouponCode
