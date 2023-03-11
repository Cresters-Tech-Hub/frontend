import { Modal } from "@mui/material";
import "./style.scss";
import warnimg from "../../../assets/images/warning_circle.svg";
import driveImg from "../../../assets/images/drive_line.png";
import timeImg from "../../../assets/images/time_filled.svg";
import Button from "../../buttons";
import { RootState } from "../../../store/index";
import { useSelector, useDispatch } from "react-redux";
import { useState, useEffect, useLayoutEffect } from "react";
import tickImg from "../../../assets/images/tick_mark.svg";
import ellipsis from "../../../assets/images/ellipsis_circle.svg";
import RegModal from "../regmodal";
import declineImg from "../../../assets/images/declineImg.png";
import { setDecline } from "../../../reducer/utilsReducer";
import { useNavigate } from 'react-router-dom';

interface IRiderModalProps {
    open: boolean;
    onClose: (event: {}, reason: "backdropClick" | "escapeKeyDown") => void;
}

export default function AcceptOrRejectModal({ open, onClose }: IRiderModalProps) {
    const navigate = useNavigate();
    const [secs, setSecs] = useState(9);
    const [mins, setMins] = useState(0);
    const [openDeclineModal, setOpenDeclineModal] = useState(false);
    const {
        CountDownTimer: { isClicked },
        utilsSlice: { decline }
    } = useSelector((state: RootState) => state);
    const dispatch = useDispatch();

    const handleDecline = () => {
        dispatch(setDecline(true));
        setOpenDeclineModal(true);
    };

    const viewAcceptedRide=()=>{
        navigate("/accepted_ride", {replace:true}) 
        dispatch(setDecline(false));
        setOpenDeclineModal(false);
    }

    const handleCloseDeclineModal = () => {
        setOpenDeclineModal(false);
    };

    const closeParentModal = () => {
        onClose("backdropClick", "escapeKeyDown");
        dispatch(setDecline(false));
        setOpenDeclineModal(false);
    };

    useEffect(() => {
        const timer = setInterval(() => {
            if (isClicked) {
                setSecs(secs - 1);
                if (secs === 0) {
                    setMins(mins - 1);
                    if (mins !== 0) setSecs(59);
                    else {
                        setMins(0);
                        setSecs(0);
                        return;
                    }
                }
            }
        }, 1000);

        return () => clearInterval(timer);
    });

    return (
        <Modal open={open} onClose={onClose} className="rider_modal_container_accept">
            <div className="modal_container_accept">
                <div className="rider_modal">
                    <div className="top">
                        {mins === 0 && secs === 0 ? (
                            <div className="rider_has_accepted">
                                <span>Offer Accepted</span>{" "}
                                <img src={tickImg} height="26px" width="26px" alt="" />
                            </div>
                        ) : (
                            <>
                                <div className="left">Time left to decline this accepted ride</div>
                                <div className="right">
                                    <span>{"0" + mins}</span>
                                    {" : "}
                                    <span>{secs < 10 ? "0" + secs : secs}</span> <span>mins</span>
                                </div>
                            </>
                        )}
                    </div>
                    <div className="bottom">
                        <div className="header">
                            <div className="left">
                                <img src={warnimg} alt="" height="26px" width="26px" />
                                <span>Pending Request ExpirationTime</span>
                            </div>
                            <div className="right">October 17, 2022 3:58 PM</div>
                        </div>
                        <table>
                            <thead>
                                <tr>
                                    <td className="order">Order #12456</td>
                                    <td className="td_flex">
                                        <span className="gray_span">Item category: </span>
                                        <span className="category">Fashion</span>
                                    </td>
                                    <td className="td_flex">
                                        <span className="gray_span">Package size: </span>
                                        <span className="size">Less than 5kg</span>
                                    </td>
                                </tr>
                            </thead>
                            <tbody>
                                <tr>
                                    <td className="style_td">
                                        <span>Vendor Location:</span>
                                        <span>No 5, Arike Street, Oshodi</span>
                                    </td>
                                    <td className="style_td">
                                        <span>/ Travel Distance:</span>
                                        <span>5km</span>
                                    </td>
                                    <td className="style_td">
                                        <span>/ Estimated Time:</span>
                                        <span>30 mins</span>
                                    </td>
                                </tr>
                                <tr>
                                    <td></td>
                                    <td className="td_with_img">
                                        <img src={driveImg} alt="" width="150px" height="50px" />
                                    </td>
                                    <td></td>
                                </tr>
                                <tr>
                                    <td className="style_td">
                                        <span>Receiver Location:</span>
                                        <span>No 202, Itomori Road, Ajao Estate</span>
                                    </td>
                                    <td className="style_td">
                                        <span>/ Travel Distance:</span>
                                        <span>5km</span>
                                    </td>
                                    <td className="style_td">
                                        <span>/ Estimated Time:</span>
                                        <span>15 mins</span>
                                    </td>
                                </tr>
                                <tr className="last_tr">
                                    <td>
                                        {mins === 0 && secs === 0 ? (
                                            <div className="rider_non_schedule">
                                                <img
                                                    src={ellipsis}
                                                    height="26px"
                                                    width="26px"
                                                    alt=""
                                                />
                                                <span>Non-reschedule</span>{" "}
                                            </div>
                                        ) : null}
                                    </td>
                                    <td></td>
                                    <td className="time_td">
                                        <span>
                                            <img src={timeImg} alt="" height="26px" width="26px" />
                                        </span>
                                        <span>1 day fulfillment</span>
                                    </td>
                                </tr>
                            </tbody>
                        </table>
                        <div className="btn">
                            {mins === 0 && secs === 0 ? (
                                <Button
                                    text="View Accepted Ride"
                                    style={{ padding: "11px", fontSize:"13px" }}
                                    onClick={viewAcceptedRide}
                                />
                            ) : (
                                <Button
                                    text="Decline Offer"
                                    style={{ padding: "15px" }}
                                    onClick={handleDecline}
                                />
                            )}
                        </div>
                    </div>
                    <RegModal
                        img={declineImg}
                        open={openDeclineModal}
                        onClose={handleCloseDeclineModal}
                        onClick={closeParentModal}
                        title="Successfully Declined"
                        text="Opps, this accepted offer has been declined and no longer available to you!"
                    />
                </div>
            </div>
        </Modal>
    );
}
