import React, { useState } from "react";
import { dashboardOptions, vendors } from "../../../assets/JsonData/itemOptions";
import { useDispatch, useSelector } from "react-redux";
import { setRightSidebarType } from "../../../reducer/rightSidebarReducer";
import { useWindowSize } from "../../../hooks";
import { convertFirstLetterToUpperCase, formatAmount } from "../../../utils/helper";
import sort from "../../../assets/images/sort.png";
import star from "../../../assets/images/star.png";
import Slider from "react-slick";
import Filter from "../../../components/filter/Filter";

export const MainDashboard = () => {
    const [index, setIndex] = useState({ index: 0, type: "food" });
    const dispatch = useDispatch();
    const settings = {
        infinite: true,
        speed: 500,
        slidesToShow: 4,
        slidesToScroll: 1,
        autoplay: true,
        autoplaySpeed: 2000,
        arrow: false
    };
    const setSelectedDashboardItem = (i: number, option: string) => {
        setIndex({ ...index, index: i, type: option });
        dispatch(setRightSidebarType({ type: option, index: i }));
    };
    const width = useWindowSize();
    return (
        <>
            <div className="item_options">
                <div className="left">
                    {dashboardOptions.map((option, i) => (
                        <div
                            className={`options ${i === index.index ? "isActive" : ""}`}
                            key={i}
                            onClick={() => setSelectedDashboardItem(i, option)}
                        >
                            {convertFirstLetterToUpperCase(option)}
                        </div>
                    ))}
                </div>
                <Filter text="Apply filters" />
            </div>
            <div className="dashboard_display_items">
                <div className="user_type">All Vendors</div>
                <Slider {...settings} className="display_carousel">
                    {vendors[index.index][index.type].data.map((item: any) => (
                        <div key={item.id} className="posters" onClick={() => null}>
                            <img src={item.poster} alt="" />
                        </div>
                    ))}
                </Slider>
            </div>
            <div className="dashboard_bestseller_items">
                <div className="user_type">Best Sellers</div>
                <Slider {...settings} className="display_carousel">
                    {vendors[index.index][index.type].bestsellers.map((item: any) => (
                        <div key={item.id} className="posters" onClick={() => null}>
                            <img src={item.img} alt="" />
                            <div className="name">{item.name}</div>
                            <div className="vendor">{item.vendor}</div>
                            <div className="stat">
                                <span>{item.time}</span>{" "}
                                <span className="rating">
                                    <img src={star} alt="" />
                                    <span>{item.rating}</span>
                                </span>
                            </div>
                            <div className="amount">&#8358;{formatAmount(item.amount)}</div>
                        </div>
                    ))}
                </Slider>
            </div>
        </>
    );
};
