import React from "react";
import "./riderdasboard.scss";
import riderImg from "../../../assets/images/riderimg.png";
import verified from "../../../assets/images/verified.png";
import calender from "../../../assets/images/calendar.png";
import message from "../../../assets/images/message.png";
import phone from "../../../assets/images/call.png";
import location from "../../../assets/images/location2.png";

const RiderDashboard = () => {
    const dummyData = [
        {
            id: 0,
            image:  calender ,
            itemName: "Date joined",
            value: "13th December, 2022"
        },
        {
            id: 1,
            image:  message ,
            itemName: "Email Address",
            value: "martinsadetola@gmail.com"
        },
        {
            id: 2,
            image:  phone ,
            itemName: "Phone Number",
            value: "09028990000"
        },
        {
            id: 3,
            image:  location ,
            itemName: "Location",
            value: "Off Shangisha street, Mago...os"
        }
    ];
    const serviceInfoData = [
        {id:0, title:"Vehicle Type", value:"Car / Truck"},
        {id:1, title:"Vehicle Model", value:"Toyota Corolla"},
        {id:2, title:"Vehicle Color", value:"Blue"},
        {id:3, title:"Vehicle Plate Number", value:"098TYUUH / 098TYUUH"},
        {id:4, title:"Work Hours", value:"7pm - 11:45pm"},
    ]
    return (
        <div className="riderdashboard">
            <div className="rider_intro">
                <div className="top_img">
                    <img src={riderImg} alt="" />
                </div>
                <div className="rider_right_intro">
                    <div className="top">
                        <div className="title">
                            <span>Martins Adetola</span> <img src={verified} alt="" />
                        </div>
                        <div className="sub_text">Individual Delivery agent</div>
                    </div>
                    <div className="middle">
                        {
                            dummyData.map(item=>(
                                <div className="vendor_contact" key={item.id}>
                                <img src={item.image} alt="" />
                                <div className="details">
                                    <div className="title">{item.itemName}</div>
                                    <div className="value">{item.value}</div>
                                </div>
                            </div>
                            ))
                        }
                    </div>
                    <div className="bottom">
                        <div className="title">Service Information</div>
                        <div className="details_container">
                            {
                                serviceInfoData.map(item=>(
                                    <div className="details" key={item.id}>
                                        <div className="title">{item.title}</div>
                                        <div className="value">{item.value}</div>
                                    </div>
                                ))
                            }
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default RiderDashboard;
