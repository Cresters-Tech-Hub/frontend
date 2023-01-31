import React from "react";
import { formatAmount } from "../../../utils/helper";
import { rightSidebarItems } from "../../../assets/JsonData/itemOptions";
import star from "../../../assets/images/star.png";

interface IPromotionAndFeatures {
    index: number;
    type: string;
}

export const PromotionAndFeatures = ({ type, index }: IPromotionAndFeatures) => {
    return (
        <>
            <div className="rightSidebar_container">
                <div className="rightSidebar_container_title">Promotion</div>
                <div className="rightSidebar_container_announcement">
                    <img src={rightSidebarItems[index][type].promotion} alt="" />
                </div>
                <div className="rightSidebar_container_featured">
                    <div className="anouncement_text">Featured</div>
                    <img src={rightSidebarItems[index][type].feeatured.img} alt="" />
                    <div className="details">
                        <div className="title">{rightSidebarItems[index][type].feeatured.name}</div>
                        <div className="vendor">
                            {rightSidebarItems[index][type].feeatured.vendor}
                        </div>
                        <div className="stats">
                            <div className="time">
                                {rightSidebarItems[index][type].feeatured.rating.time} •
                            </div>
                            <div className="rating">
                                <img src={star} alt="" />
                                <span>{rightSidebarItems[index][type].feeatured.rating.stars}</span>
                            </div>
                        </div>
                        <div className="amount">
                            &#8358;{formatAmount(rightSidebarItems[index][type].feeatured.amount)}
                        </div>
                    </div>
                </div>
            </div>
        </>
    );
};
