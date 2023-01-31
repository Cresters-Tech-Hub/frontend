import React from "react";
import "./style.scss";
import searchImg from "../../assets/images/search.png";
import locationImg from "../../assets/images/dsb_location.png";

interface ISearch {
    value?: string | undefined;
    onChange?: React.ChangeEventHandler<HTMLInputElement> | undefined;
    placeholder?: string;
    location?: string;
    className?: string;
}

export default function TopBar({ value, onChange, location, placeholder, className }: ISearch) {
    return (
        <div className={`top_bar ${className}`}>
            <div className="location">
                <img src={locationImg} alt="" />
                <span>{location}</span>
            </div>
            <div className="search">
                <input type="search" value={value} onChange={onChange} placeholder={placeholder} />
                <img src={searchImg} alt="" />
            </div>
        </div>
    );
}
