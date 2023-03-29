import React from "react";
import "./style.scss";
import { viewOderItemsData } from "../../assets/JsonData/constants";

const ViewOrderItems = () => {
    return (
        <div className="viewOrderItemsData">
            {viewOderItemsData.map(
                ({ id, name, quantity, purchaseDate, image, color, orderNumber, price }) => (
                    <div className="viewOrderItemsData_item" key={id}>
                        <img src={image} alt="" />
                        <div className="details_right">
                            <div className="item_detail_group">
                                <div className="top">Product Name:{" "} {name}</div>
                                <div className="bottom">Color:{" "} {color}</div>
                            </div>
                            <div className="item_detail_group">
                                <div className="top">Quantity:{" "} {quantity}</div>
                                <div className="bottom">Price:{" "} {price}</div>
                            </div>
                            <div className="item_detail_group">
                                <div className="top">Order Number:{" "} {orderNumber}</div>
                                <div className="bottom">Purchase Date:{" "} {purchaseDate}</div>
                            </div>
                        </div>
                    </div>
                )
            )}
        </div>
    );
};

export default ViewOrderItems;
