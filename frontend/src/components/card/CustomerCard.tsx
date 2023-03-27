import React from "react";
import "./customerCard.scss";
import customer from "../../assets/images/customerBg.png";
import { MdLocationOn } from "react-icons/md";
import IconButton from "../buttons/IconButton";
import { IoCallSharp } from "react-icons/io5";
import { BsChatLeftTextFill } from "react-icons/bs";

interface Props {
    img?: string;
    name?: string;
    role?: string;
    address?: string;
    phone?: string;
    style?: React.CSSProperties;
}

const CustomerCard = ({ img, name, role, address, phone, style }: Props) => {
    return (
        <div className="customer_card" style={style}>
            <img src={customer} alt="" />
            <div className="name">{name}</div>
            <div className="role">{role}</div>
            <div className="address">
                <MdLocationOn size={22} />
                <div className="text">{address}</div>
            </div>
            <div className="phone">{phone}</div>
            <div className="btn">
                <IconButton
                    title="Call"
                    icon={<IoCallSharp />}
                    style={{ width: "100px", padding: "10px 15px" }}
                />
                <IconButton
                    title="Message"
                    icon={<BsChatLeftTextFill />}
                    bg="white"
                    color="#35383F"
                    outline="1px solid black"
                    style={{ width: "100px", padding: "10px 15px" }}
                />
            </div>
        </div>
    );
};

export default CustomerCard;
