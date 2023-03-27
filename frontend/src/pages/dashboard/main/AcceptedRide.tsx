import React from "react";
import "./acceptedRide.scss";
import verifiedImg from "../../../assets/images/verified.png";
import gisMap from "../../../assets/images/gis_map.png";
import locationImg from "../../../assets/images/dsb_location.png";
import IconButton from "../../../components/buttons/IconButton";
import { IoCall } from "react-icons/io5";
import { BsChatLeftTextFill } from "react-icons/bs";
import OrderStepper from "../../../components/stepper/OrderStepper";
import { useNavigate } from "react-router-dom";

const AcceptedRide = () => {
    const navigate = useNavigate();
    return (
        <div className="accept_ride">
            <div className="top_title">
                <div className="navigation_left" onClick={() => navigate("/rider")}>
                    <span>Newly Accepted Ride Request/</span>
                    <span>View Offer</span>
                </div>
                <div className="navigation_right">
                    <span>Next</span>
                    <span>/</span>
                    <span>Previous</span>
                </div>
            </div>
            <div className="seller_info">
                <div className="title">Seller Information</div>
                <div className="info_container">
                    <div className="store_name">
                        <span>Mayvee Stores</span>
                        <img src={verifiedImg} alt="" />
                    </div>
                    <div className="view_on_map">
                        <span>View on map</span>
                        <img src={gisMap} alt="" />
                    </div>
                </div>
                <div className="store_type">Fashion line</div>
            </div>
            <div className="locationn">
                <img src={locationImg} alt="" />
                <div className="location_container">
                    <div className="title">Location</div>
                    <div className="info">
                        <span className="addr">No 4, Off Shangisha street, Magodo Lagos.</span>
                        <span>
                            <span>
                                / Estimated Time:<span className="time">30 mins</span>
                            </span>
                        </span>
                        <span>
                            <span>/ Travel Distance:</span>
                            <span className="distance">5 km</span>
                        </span>
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
                        <div className="title">Item Name</div>
                        <div className="value">Louis Vuiton bag</div>
                    </div>
                    <div className="info">
                        <div className="title">Order No</div>
                        <div className="value">#12456</div>
                    </div>
                    <div className="info">
                        <div className="title">Purchase Date</div>
                        <div className="value">24/03/2023</div>
                    </div>
                </div>
            </div>
            <div className="view_call_btns">
                <IconButton icon={<IoCall />} title="Call" style={{ width: "168px" }} />
                <IconButton
                    title="Message"
                    icon={<BsChatLeftTextFill />}
                    bg="white"
                    color="#35383F"
                    outline="1px solid black"
                    style={{ width: "168px" }}
                />
            </div>
            <div className="order_progress">
                <div className="title">Order Progress</div>
                <div className="tracking_container">
                    <span className="title">Tracking Number:</span>
                    <span className="value">MY2133568841592H</span>
                </div>
            </div>
            <OrderStepper />
        </div>
    );
};

export default AcceptedRide;
