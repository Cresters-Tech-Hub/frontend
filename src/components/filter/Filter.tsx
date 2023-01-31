import React from "react";
import sort from "../../assets/images/sort.png";

interface IFilter {
    text: string;
}

const Filter = ({ text }: IFilter) => {
    return (
        <div className="filter">
            <span>{text}</span>
            <img src={sort} alt="" />
        </div>
    );
};

export default Filter;
