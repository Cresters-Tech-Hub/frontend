import React from "react";
import "./vieworders.scss";
import { useNavigate } from "react-router-dom";
import dsb_location from "../../../assets/images/dsb_location.png";
import { BsCheckSquareFill } from "react-icons/bs";
import ViewOrderItems from '../../../components/viewOrderItems/index';
import OrderStepper from '../../../components/stepper/OrderStepper';

const ViewOrders = () => {
    const navigate = useNavigate();
    return (
        <div className="viewOrders">
            <div className="top_title">
                <div className="navigation_left" onClick={() => navigate(`/dashboard`)}>
                    <span>My Orders/</span>
                    <span>View Order</span>
                </div>
            </div>
            <div className="view_order_inner_container">
                <div className="view_order_title_info">
                    <div className="title">Delivery Information</div>
                    <div className="view_order_title_info_items">
                        <div className="left_top">
                        <img src={dsb_location} alt="" />
                        <span>Delivery Location:</span>
                        <div className="view_order_location">
                            <span>No 4, Off Shangisha street, Magodo Lagos.</span>
                            <span>/ Estimated Time after Confirmation:</span>
                        </div>
                        <span>30 mins</span>
                        </div>
                        <div className="right_top">
                            <div className="left">
                                <span>Payment Mode:</span>
                                <span>Online Payment</span>
                            </div>
                            <div className="right">
                                <span>Paid</span>
                                <BsCheckSquareFill color="#06c149" size={12}/>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="selected_cart_items">
                    <ViewOrderItems/>
                </div>
                <div className="order_progress_tracking">
                    <div className="title">
                        <div className="main">Order Progress</div>
                        <div className="tracking_details"><span>Tracking Number :</span><span>MY2133568841592H</span></div>
                    </div>
                    <OrderStepper />
                </div>
            </div>
        </div>
    );
};

export default ViewOrders;
