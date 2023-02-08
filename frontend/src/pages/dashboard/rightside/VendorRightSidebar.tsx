import React from "react";
import "./vendorrightbar.scss";
import {RxCaretRight, RxDotFilled } from "react-icons/rx";
import {BsArrowDown, BsFillCheckSquareFill } from "react-icons/bs";


const VendorRightSidebar = () => {
    const array =Array(5).fill("Yaay! You have a new order request (Fit Jumpsuit) from ade...")
    const history =Array(5).fill("Order 123YUGJHVDJ was confirmed and  #4,560 will be remitted to your account within the next 2 hours ")

 
    return (
        <div className="vendor_right_sidebar">
            <div className="top">
                <div className="title">Notifications</div>
                <div className="container_div">
                    <div className="header_items">
                        <div className="left">Recent Notifications</div>
                        <div className="right">
                            <span>View all </span>
                            <RxCaretRight/>
                        </div>
                    </div>
                    {
                        array.map((v, i)=>(
                            <div className="list_items" key={i}>
                            <div className="dot"><RxDotFilled  color="#0AC947" fontSize={24}/></div>
                            <div className="text">{v}</div>
                            <div>
                                <BsArrowDown color="#0AC947"/>
                            </div>
                        </div>
                        ))
                       }
                   
                </div>
            </div>
            <div className="bottom">
                <div className="title">History</div>
                <div className="title">Monday, December 17, 2022</div>
                <div className="container_div">
                    {
                        history.map((v, i)=>(
                            <div className="list_items" key={i}>
                            <div className="dot"><BsFillCheckSquareFill color="#0AC947"/></div>
                            <div className="text">{v}</div>
                            <div>
                                <BsArrowDown color="#0AC947"/>
                            </div>
                        </div>
                        ))
                       }
                   
                </div>
            </div>
        </div>
    );
};

export default VendorRightSidebar;
