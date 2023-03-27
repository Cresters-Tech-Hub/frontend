import React from "react";
import "./similarItems.scss";
import Slider from "react-slick";
import { useWindowSize } from "../../hooks";
import { similarItemsData } from "../../assets/JsonData/constants";
import star from "../../assets/images/star.png";
import { formatAmount } from "./../../utils/helper/index";

interface Props{
    title:string
}

const SimilarItems = ({title}:Props) => {
    const width = useWindowSize();

    const settings = {
        infinite: true,
        speed: 500,
        slidesToShow: width < 768 ? 2 : 4,
        slidesToScroll: 1,
        autoplay: true,
        autoplaySpeed: 2000,
        arrow: false
    };
    return (
        <div className="slider_similar_items">
            <div className="slider_title">{title}</div>
            <Slider {...settings} className="slider_display_carousel">
                {similarItemsData.map(({ id, name, img, vendor, lastUpdated, rating, amount }) => (
                    <div key={id} className="slider_posters" onClick={() => null}>
                        <div className="slider_img">
                            <img src={img} alt="" />
                            <div className="promo_badge">
                            15% off
                            </div>
                        </div>
                        <div className="details">
                            <div className="title">{name}</div>
                            <div className="vendor">{vendor}</div>
                            <div className="rating">
                                <div>{lastUpdated}</div>
                                <div>
                                    <img src={star} alt="" />
                                    <span>{rating}</span>
                                </div>
                            </div>
                        </div>
                        <div className="amount">&#8358;{formatAmount(amount)}</div>
                    </div>
                ))}
            </Slider>
        </div>
    );
};

export default SimilarItems;
