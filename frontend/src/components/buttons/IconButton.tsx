import React from "react";
import "./iconButton.scss";
import spinnerImg from "../../assets/images/loading.png"

interface Props {
    icon?: React.ReactNode;
    bg?: string;
    title: string;
    color?: string;
    outline?: string;
    style?: React.CSSProperties;
    spinner?:boolean
    onClick?: React.MouseEventHandler<HTMLButtonElement> | undefined
}

const IconButton = ({ icon, title, bg, color, outline, style, spinner, onClick }: Props) => {
    return (
        <button
        onClick={onClick}
            className="iconButton"
            style={{
                ...style,
                background: bg ? bg : "#35383f",
                color: color ? color : "white",
                border: outline ? outline : "none"
            }}
        >
            {!spinner && icon}
            <span>{!spinner ? title : <img alt="" src={spinnerImg}/>}</span>
        </button>
    );
};

export default IconButton;
