import React from "react";
import { formatAmount } from "../../../utils/helper";
import star from "../../../assets/images/star.png";

interface IPromotionAndFeatures {
    promoImg?: string;
    featuredImg?: string;
    featuredTitle?: string;
    featuredVendor?: string;
    statsTime?: string;
    ratingStar?: number;
    amount?: string;
}

export const PromotionAndFeatures = ({
    promoImg,
    featuredImg,
    featuredTitle,
    featuredVendor,
    statsTime,
    ratingStar,
    amount
}: IPromotionAndFeatures) => {
    return (
        <>
            <div className="rightSidebar_container">
                <div className="rightSidebar_container_title">Promotion</div>
                <div className="rightSidebar_container_announcement">
                    <img src={promoImg} alt="" />
                </div>
                <div className="rightSidebar_container_featured">
                    <div className="anouncement_text">Featured</div>
                    <div className="img">
                        <img src={featuredImg} alt="" />
                        <div className="promo_badge">15% off</div>
                    </div>

                    <div className="details">
                        <div className="title">{featuredTitle}</div>
                        <div className="vendor">{featuredVendor}</div>
                        <div className="stats">
                            <div className="time">{statsTime} •</div>
                            <div className="rating">
                                <img src={star} alt="" />
                                <span>{ratingStar}</span>
                            </div>
                        </div>
                        <div className="amount">&#8358;{formatAmount(amount ? amount : "")}</div>
                    </div>
                </div>
            </div>
        </>
    );
};
