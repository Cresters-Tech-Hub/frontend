import { Modal } from "@mui/material";
import "./style.scss";
import hand from "../../../assets/images/correct_hand.png";
import cancel from "../../../assets/images/cancel.png";
import Button from "../../buttons";


interface ModalProps {
    open: boolean;
    onClose: ((event: {}, reason: "backdropClick" | "escapeKeyDown") => void) | undefined;
    subTitle?: string;
    title: string;
    text: string;
    error?: boolean;
    onClick: Function,
    setAccept:Function
}

export default function AcceptModal({
    onClose,
    error,
    open,
    subTitle,
    title,
    text,
    onClick,
    setAccept
}: ModalProps) {

    const handleNavigate = () => {
        setAccept();
        onClick()
    };
  
    return (
        <Modal open={open} onClose={onClose}>
            <div className="modal">
                <div className="container">
                    <img src={error ? cancel : hand} alt="" />
                    <div>{title}</div>
                    <div className="top_message">{subTitle}</div>
                    <p>{text}</p>
                    <Button text="continue" onClick={handleNavigate} />
                </div>
            </div>
        </Modal>
    );
}
