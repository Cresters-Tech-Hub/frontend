import React from "react";
import "./viewProductrightsidebar.scss";
import sellerInfoImg from "../../../assets/images/seller_info_img.png";
import verifiedImg from "../../../assets/images/verified.png";
import itemsUploadedImg from "../../../assets/images/totals.png";
import customer_rating from "../../../assets/images/ticket_star.png";
import seller_promo_img from "../../../assets/images/seller_promo_img.png";
import { MdLocationPin } from "react-icons/md";

const ViewProductRightsidebar = () => {
    return (
        <div className="viewProductRightsidebar">
            <div className="seller_info">
                <div className="title">Seller Information</div>
                <div className="details">
                    <img src={sellerInfoImg} alt="" />
                    <div className="seller_name">
                        <span>Faucet Stores</span>
                        <img src={verifiedImg} alt="" />
                    </div>
                    <div className="user_type">Vendor</div>
                    <div className="location">
                        <MdLocationPin size="18.58px" />
                        <span>No 202, Itomori Street, Ajao Estate Road, Lagos</span>
                    </div>
                </div>
                <div className="statistics">
                    <div className="title">Statistics</div>
                    <div className="uploaded">
                        <img src={itemsUploadedImg} alt="" />
                        <div>
                            <span>Total Items Uploaded</span>
                            <span>546</span>
                        </div>
                    </div>
                    <div className="uploaded">
                        <img src={customer_rating} alt="" />
                        <div>
                            <span>Customers Rating</span>
                            <span>4.5 stars</span>
                        </div>
                    </div>
                </div>
            </div>
            <div className="seller_promo">
                <img src={seller_promo_img} alt="" />
            </div>
        </div>
    );
};

export default ViewProductRightsidebar;
