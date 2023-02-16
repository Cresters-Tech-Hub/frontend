import { Modal} from "@mui/material";
import "./style.scss";
import warnimg from '../../../assets/images/warning_circle.png'
import driveImg from '../../../assets/images/drive_line.png'
import timeImg from '../../../assets/images/time_filled.png'
import Button from "../../buttons";

interface IRiderModalProps {
    open: boolean;
    onClose: ((event: {}, reason: "backdropClick" | "escapeKeyDown") => void) | undefined;
    onClick?: Function | undefined;
}

export default function AcceptOrRejectModal({ open, onClose, onClick }: IRiderModalProps) {

    return (
        <Modal open={open} onClose={onClose} className="rider_modal_container_accept">
            <div className="modal_container_accept">
            <div className="rider_modal">
                <div className="top">
                    <div className="left">Time left to decline this accepted ride</div>
                    <div className="right">
                        <span>08</span>{" : "}
                        <span>50</span>{" "}
                        <span>mins</span>
                    </div>
                </div>
                <div className="bottom">
                  <div className="header">
                  <div className="left"><img src={warnimg} alt="" height='26px' width='26px'/><span>Pending Request ExpirationTime</span></div>
                  <div className="right">October 17, 2022 3:58 PM</div>
                  </div>
                  <table>
                    <thead>
                      <tr>
                        <td className="order">Order #12456</td>
                        <td className="td_flex"><span className="gray_span">Item category:{" "}</span><span className="category">Fashion</span></td>
                        <td className="td_flex"><span className="gray_span">Package size:{" "}</span><span className="size">Less than 5kg</span></td>
                      </tr>
                    </thead>
                    <tbody>
                      <tr>
                        <td className="style_td"><span>Vendor Location:</span><span>No 5, Arike Street, Oshodi</span></td>
                        <td className="style_td"><span>/ Travel Distance:</span><span>5km</span></td>
                        <td className="style_td"><span>/ Estimated Time:</span><span>30 mins</span></td>
                      </tr>
                      <tr>
                        <td></td>
                        <td className="td_with_img"><img src={driveImg} alt="" width='150px' height='50px'/></td>
                        <td></td>
                      </tr>
                      <tr>
                        <td className="style_td"><span>Receiver Location:</span><span>No 202, Itomori Road, Ajao Estate</span></td>
                        <td className="style_td"><span>/ Travel Distance:</span><span>5km</span></td>
                        <td className="style_td"><span>/ Estimated Time:</span><span>15 mins</span></td>
                      </tr>
                      <tr className="last_tr">
                        <td></td>
                        <td></td>
                        <td className="time_td"><span><img src={timeImg} alt="" height='26px' width='26px'/></span><span>1 day fulfillment</span></td>
                      </tr>
                    </tbody>
                  </table>
                  <div className="btn">
                    <Button text="Decline Offer" style={{padding:"15px"}}/>
                  </div>
                </div>
                </div>
            </div>           
        </Modal>
    );
}
