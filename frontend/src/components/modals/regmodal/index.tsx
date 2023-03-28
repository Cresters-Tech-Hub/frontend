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
    location?: string;
    title: string;
    img?:string
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
    onClick,
    img
}: ModalProps) {
    const navigate = useNavigate();
    const handleNavigate = () => {
        onClick && onClick()
        onClose!("backdropClick", "escapeKeyDown")
    };
    return (
        <Modal open={open} onClose={onClose}>
            <div className="modal">
                <div className="container">
                    <img src={error ? cancel : img ? img : hand} alt="" />
                    <div>{title}</div>
                    <p>{text}</p>
                    <Button text="continue" onClick={handleNavigate} />
                </div>
            </div>
        </Modal>
    );
}
