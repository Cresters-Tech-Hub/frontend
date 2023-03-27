import React, {useState} from 'react'
import './review_order.scss'
import { RxCaretLeft } from 'react-icons/rx'
import cartBag from '../../assets/images/cart_bag.png'
import cartBlouse from '../../assets/images/cart_blouse.png'
import StockCounter from '../counter'
import { formatAmount } from '../../utils/helper/index';
import { FiTrash } from 'react-icons/fi'
import CouponCode from '../coupon/CouponCode'
import Button from '../buttons'
import { useNavigate } from 'react-router-dom';

const ReviewOrder = () => {
   
    const navigate = useNavigate();

    const [dummyData, setDummyData] = useState([
        {id:0, img:cartBag, name:"Velvet Robe", color:"Red", instock:2, amount:6700},
        {id:1, img:cartBlouse, name:"St Lauren Bag", color:"Grey", instock:5, amount:4300},
    ])
    const handleAction =(id:number)=>{
        const filterData = dummyData.filter(item=>item.id !== id);
        setDummyData(filterData);
    }
    let total = [...dummyData.map(item=>item.amount)].reduce((acc, i)=>acc+i, 0);
  return (
    <div className='review_order'>
     <div className="continue_shopping" onClick={()=>navigate("/dashboard")}><RxCaretLeft size={20}/> <span>Continue Shopping</span></div>
     <div className="cart_items_list_container">
                <table className="cart_list" cellPadding={15}>
                    <thead>
                        <tr>
                            <th>Product</th>
                            <th>Quantity</th>
                            <th>Price</th>
                            <th>Action</th>
                        </tr>
                    </thead>
                    <tbody>
                        {
                            dummyData.map(({id, name, img, instock, color, amount})=>(
                                <tr key={id}>
                            <td>
                                <div className="td_container">
                                <img src={img} alt="" />
                                <div className="details">
                                    <span>{name}</span>
                                    <span>Color: {color}</span>
                                </div>
                                </div>
                            </td>
                            <td>
                                <div className="cart_counter">
                                    <StockCounter instock={instock} amount={amount}/>
                                </div>
                            </td>
                            <td> <div className="cart_amount">
                            &#8358;{formatAmount(String(amount))}
                                </div></td>
                            <td>
                                <div className="cart_action" onClick={()=>handleAction(id)}>
                                    <FiTrash/>
                                </div>
                            </td>
                        </tr>
                            ))
                        }
                    </tbody>
                </table>
     </div>
     <div className="discount_code">
        <div className="discount_title">Discount Code</div>
       <CouponCode/>
     </div>
     <div className="order_summary">
        <div className="order_summary_title">Order Summary</div>
        <div className="order_summary_content">
            <div className="order_items">
                <div className="left">Subtotal</div>
                <div className="right">&#8358;{formatAmount(String(total))}</div>
            </div>
            <div className="order_items">
                <div className="left">Estimated Delivery fee</div>
                <div className="right">&#8358;{formatAmount("800")}</div>
            </div>
            <div className="order_items">
                <div className="left">Discount code</div>
                <div className="right">-</div>
            </div>
            <span className='span'/>
            <div className="order_items">
                <div className="left">Total</div>
                <div className="right">&#8358;{formatAmount(String(total > 800 ? (total - 800) : ""))}</div>
            </div>
        </div>
        <div className="btn">
            <Button text='Proceed' type='submit' variant='lg' style={{fontSize:"16px", background:total > 800 ? "#06c149" : "#eeeeee", color: total > 800 ? "#fff" : "black", }} error={total < 800}/>
        </div>
     </div>
    </div>
  )
}

export default ReviewOrder
