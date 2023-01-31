import { Modal } from "@mui/material";
import React from "react";
import "./style.scss";
import hand from "../../../assets/images/correct_hand.png";
import cancel from "../../../assets/images/cancel.png";
import Button from "../../buttons";
import {useNavigate } from "react-router-dom";

interface ModalProps {
    open: boolean;
    onClose: ((event: {}, reason: "backdropClick" | "escapeKeyDown") => void) | undefined;
    location: string;
    title: string;
    text: string;
    error?: boolean;
    onClick?: Function | undefined;
}

export default function RegModal({
    onClose,
    error,
    open,
    location,
    title,
    text,
    onClick
}: ModalProps) {
    const navigate = useNavigate();
    const handleNavigate = () => {
        navigate(`/${location}`);
        onClick && onClick();
    };
    return (
        <Modal open={open} onClose={onClose}>
            <div className="modal">
                <div className="container">
                    <img src={error ? cancel : hand} alt="" />
                    <div>{title}</div>
                    <p>{text}</p>
                    <Button text="continue" onClick={handleNavigate} />
                </div>
            </div>
        </Modal>
    );
}
