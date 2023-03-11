import React, {useState, useEffect} from 'react'
import './style.scss'
import completeImg from '../../assets/images/complete_check.png'
import halfCompleteImg from '../../assets/images/half_complete.png'
import incompleteImg from '../../assets/images/incomplete.png'
import {VscCircleFilled} from 'react-icons/vsc'

const OrderStepper = () => {
  const [state, setState] = useState(0)

  useEffect(()=>{
    const timer = setInterval(() => {
      if (state < 6) {
        setState(prev=>prev+1)
      }else{
        return
      }
  }, 5000);

  return () => clearInterval(timer);
  }, [state])
  
  return (
    <div className='order_stepper'>
      <div className="progress_item">
        <div className="item">
        <img src={completeImg} alt="" /> <span>Delivery Offer was Accepted</span>
        </div>
        <div className="dots"><VscCircleFilled color="#06C149" size={13}/></div>
        <div className="dots"><VscCircleFilled color="#06C149" size={13}/> <span>12 Oct 2022 - 3:45pm</span></div>
        <div className="dots"><VscCircleFilled color="#06C149" size={13}/></div>
      </div>
      <div className="progress_item">
        <div className="item">
        <img src={state > 1 ? completeImg : halfCompleteImg} alt="" /> <span>Rider on his way to the seller</span>
        </div>
        <div className="dots"><VscCircleFilled size={13} color={state > 1 ? "#06C149" : '#A8AEB7'}/></div>
        <div className="dots"><VscCircleFilled size={13}  color={state > 1 ? "#06C149" : '#A8AEB7'}/> <span>12 Oct 2022 - 3:45pm</span></div>
        <div className="dots"><VscCircleFilled size={13} color={state > 1 ? "#06C149" : '#A8AEB7'}/></div>
      </div>
      <div className="progress_item">
        <div className="item">
        <img src={state > 2 ? completeImg : state === 2 ? halfCompleteImg: incompleteImg} alt="" /> <span>Package have been collected from seller</span>
        </div>
        <div className="dots"><VscCircleFilled size={13} color={state > 2 ? "#06C149" : '#A8AEB7'}/></div>
        <div className="dots"><VscCircleFilled size={13} color='#A8AEB7'/> <span>12 Oct 2022 - 3:45pm</span></div>
        <div className="dots"><VscCircleFilled size={13} color={state > 2 ? "#06C149" : '#A8AEB7'}/></div>
      </div>
      <div className="progress_item">
        <div className="item">
        <img src={state > 3 ? completeImg : state === 3 ? halfCompleteImg: incompleteImg} alt="" /> <span>Rider on his way to the buyer</span>
        </div>
        <div className="dots"><VscCircleFilled size={13} color={state > 3 ? "#06C149" : '#A8AEB7'}/></div>
        <div className="dots"><VscCircleFilled size={13} color={state > 3 ? "#06C149" : '#A8AEB7'}/> <span>12 Oct 2022 - 3:45pm</span></div>
        <div className="dots"><VscCircleFilled size={13} color={state > 3 ? "#06C149" : '#A8AEB7'}/></div>
      </div>
      <div className="progress_item">
        <div className="item">
        <img src={state > 4 ? completeImg : state === 4 ? halfCompleteImg: incompleteImg} alt="" /> <span>Package have been successfully delivered to buyer</span>
        </div>
        <div className="dots"><VscCircleFilled size={13} color={state > 4 ? "#06C149" : '#A8AEB7'}/></div>
        <div className="dots"><VscCircleFilled size={13} color={state > 4 ? "#06C149" : '#A8AEB7'}/> <span>12 Oct 2022 - 3:45pm</span></div>
        <div className="dots"><VscCircleFilled size={13} color={state > 4 ? "#06C149" : '#A8AEB7'}/></div>
      </div>
      <div className="progress_item">
        <div className="item">
        <img src={state > 5 ? completeImg : state === 4 ? halfCompleteImg: incompleteImg} alt="" /> <span>Order Closed</span>
        </div>
      </div>
    </div>
  )
}

export default OrderStepper
