import React from "react";
import clsx from "classnames";
import "./index.scss";
import { btnKeys } from "../../utils/constants";
import spinnerImg from "../../assets/images/loading.png";

interface ButtonProps {
    text: string;
    variant?: btnKeys;
    style?: React.CSSProperties;
    type?: "button" | "submit" | "reset";
    className?: string;
    state?: string;
    bg?: boolean;
    disabled?: boolean;
    error?: boolean;
    props?: any;
    onClick?: (event: React.MouseEvent<HTMLButtonElement>) => void;
    spinner?: boolean;
}
const Button = ({ text, bg, variant, className, state, error, disabled, spinner, ...props }: ButtonProps) => {
    const btnBaseClass = `button_${variant}`;
    const btnBgClass = `button_${bg ? "white" : null}`;
    const btnStateClass = `button_${state}`;
    const btnErrorClass = `button_${disabled ? "error" : null}`;

    const buttonClass = clsx("button_default", btnBgClass, btnErrorClass, btnBaseClass, btnStateClass, className);
    return (
        <button className={buttonClass} {...props} disabled={disabled}>
            <span>{text}</span> {spinner && <img src={spinnerImg} alt="" />}
        </button>
    );
};

export default Button;
