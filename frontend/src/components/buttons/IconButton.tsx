import React from "react";
import "./iconButton.scss";

interface Props {
    icon: React.ReactNode;
    bg?: string;
    title: string;
    color?: string;
    outline?: string;
    style?: React.CSSProperties;
}

const IconButton = ({ icon, title, bg, color, outline, style }: Props) => {
    return (
        <button
            className="iconButton"
            style={{
                ...style,
                background: bg ? bg : "#35383f",
                color: color ? color : "white",
                border: outline ? outline : "none"
            }}
        >
            {icon}
            <span>{title}</span>
        </button>
    );
};

export default IconButton;
