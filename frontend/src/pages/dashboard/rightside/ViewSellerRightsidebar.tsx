import React from "react";
import { formatAmount } from "../../../utils/helper";
import star from "../../../assets/images/star.png";

interface IPromotionAndFeatures {
    promoBanner: string;
    featuredImg: string;
    featuredName: string;
    vendor: string;
    ratingTime: string;
    stars: number;
    amount: string;
}

export const ViewSellerRightsidebar = ({
    promoBanner,
    featuredImg,
    featuredName,
    vendor,
    ratingTime,
    stars,
    amount
}: IPromotionAndFeatures) => {
    return (
        <>
            <div className="rightSidebar_container">
                <div className="rightSidebar_container_title">Promotion</div>
                <div className="rightSidebar_container_announcement">
                    <img src={promoBanner} alt="" />
                </div>
                <div className="rightSidebar_container_featured">
                    <div className="anouncement_text">Featured</div>
                    <img src={featuredImg} alt="" />
                    <div className="details">
                        <div className="title">{featuredName}</div>
                        <div className="vendor">{vendor}</div>
                        <div className="stats">
                            <div className="time">{ratingTime} •</div>
                            <div className="rating">
                                <img src={star} alt="" />
                                <span>{stars}</span>
                            </div>
                        </div>
                        <div className="amount">&#8358;{formatAmount(amount)}</div>
                    </div>
                </div>
            </div>
        </>
    );
};
