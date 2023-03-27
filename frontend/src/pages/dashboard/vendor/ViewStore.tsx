import React from "react";
import "./viewstore.scss";
import Filter from "../../../components/filter/Filter";
import vendorIntroImg from "../../../assets/images/vendor_profile_promo.jpg";
import verifiedImg from "../../../assets/images/verified.png";
import { vendorContact, vendorTotals } from "../../../assets/JsonData/profile";
import Rating from "@mui/material/Rating";
import SimilarItems from "../../../components/similar-items";

export default function ViewStore() {
    return (
        <div className="vendordashboard">
            <div className="top">
                <div></div>
                <Filter text="Filter by Category" />
            </div>
            <div className="vendor_intro">
                <div className="left">
                    <img src={vendorIntroImg} alt="" />
                </div>
                <div className="right">
                    <div className="title_container">
                        <div className="title">
                            <span>Faucet Stores</span>
                            <img src={verifiedImg} alt="" />
                        </div>
                        <div className="subtitle_text">
                            I am a food and fashion vendor, I sell high quality and affordable
                            items. I love to please my customers and sell good quality products.
                        </div>
                    </div>

                    <div className="vendordashboard_contact">
                        {vendorContact.map((item) => (
                            <div className="vendor_contact" key={item.id}>
                                <img src={item.icon} alt={item.title} />
                                <div className="details">
                                    <div className="title">{item.title}</div>
                                    <div className="value">{item.value}</div>
                                </div>
                            </div>
                        ))}
                    </div>
                    <div className="vendor_category">
                        <div className="sales">Store sales category:</div>
                        <div className="food">Food</div>
                        <div className="fashion">Fashion</div>
                    </div>
                </div>
            </div>
            <div className="vendor_metrics">
                {vendorTotals.map((item) => (
                    <div className="vendor_contact" key={item.id}>
                        <img src={item.icon} alt={item.title} />
                        <div className="details">
                            <div className="title">{item.title}</div>
                            <div className="value">{item.value}</div>
                        </div>
                    </div>
                ))}
            </div>
            <div className="view_store_rating">
                <Rating value={5} size="small" />
                <span>View 212 Reviews</span>
            </div>
            <div className="view_store_slider_bottom">
                <SimilarItems title="Best Sellers" />
                <SimilarItems title="Newly Uploaded Items" />
            </div>
        </div>
    );
}
