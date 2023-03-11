import { Modal} from "@mui/material";
import "./style.scss";
import ToggleSwitch from "../../toggleswitch";
import {useState} from 'react'
import Button from "../../buttons";
import { incomingOrderData } from "../../../assets/JsonData/constants";
import AcceptModal from '../rideracceptmodal/index';
import AcceptOrRejectModal from "../declineoracceptmodal";
import { useDispatch, useSelector } from 'react-redux';
import { setCountDownTimer } from "../../../reducer/countDownReducer";
import {AiOutlineClose} from 'react-icons/ai'
import { RootState } from '../../../store/index';
import { setDecline } from "../../../reducer/utilsReducer";

interface IRiderModalProps {
    open: boolean;
    onClose: ((event: {}, reason: "backdropClick" | "escapeKeyDown") => void) | undefined;
    onClick: Function
}

export default function RiderDashboardModal({ open, onClose, onClick }: IRiderModalProps) {

    const {decline} = useSelector((state:RootState)=>state.utilsSlice)
   
    const [openModal, setOpenModal] = useState(false)
    
    const [dataSet, setDataSet]= useState({start:1, next:3})
    const [successOpen, setsuccessOpen] = useState(false)
    const [isTurnedOn, setIsTurnedOn] = useState(true);

    const dispatch = useDispatch()

    const closeModal = ()=>setOpenModal(false)

    const onIsTurnONChange = (checked:boolean) => {
        setIsTurnedOn(checked);
        if (!checked) {
            setIsTurnedOn(false);
        }
      };
      const handleDecline=()=>{
        dispatch(setDecline(true))
      }
      const handleSucessModal=()=>{
        dispatch(setDecline(false))
        dispatch(setCountDownTimer(true))
        setsuccessOpen(true)
        if(successOpen) {
          onClick && onClick()
        }
      }

      const handleClose =()=>{
        dispatch(setDecline(false));
        setsuccessOpen(false)
    }
      const prevHandler=()=>{
        if(dataSet.start > 1){
            setDataSet({...dataSet, start:dataSet.start - 3, next:dataSet.next -3})
        }
      }
  
      const nextHandler=()=>{   
            setDataSet({...dataSet, start:dataSet.start + 3, next:dataSet.next + 3}) 
      }

    return (
        <Modal open={open} onClose={onClose} className="rider_modal_container">
            <div className="modal_container">
                <div className="close" onClick={()=>onClick(false)}><AiOutlineClose fontSize="24px"/></div>
            <div className="rider_modal">
                <div className="top">
                    <div className="text">
                        <div className="title">View Incoming Rides Request Near me</div>
                        <div className="hint">
                            Below is the list of incoming delivery offer close to your set location.
                            We are more particular about prompt delivery, so we will only display
                            rides close to your location that can be delivered in 1 day. If you are
                            currently out of state or unavailable, kindly turn off your availability
                            here. if your location have changed, kindly adjust this in your profile
                            and submit for update.
                        </div>
                    </div>
                    <div className="switch">
                        <div className="text">Turn off your availability</div>
                        <ToggleSwitch
                            name="top-switch"
                            id="toggleswitch"
                            checked={isTurnedOn}
                            onChange={onIsTurnONChange}
                        />
                    </div>
                </div>
                <div className="middle">
                    <div className="left">54 Ride Offers</div>
                    <div className="right"><span>23</span>{" "} Riders are currently viewing this</div>
                </div>
    
                {
                    incomingOrderData.map(item=>(
                        <div className="rider_array_items" key={item.id}>
                    <div className="header">
                        <div className="items">
                        <div className="order">Order {item.orderId}</div>
                        <div className="category"><span className="left">Item category:</span><span className="right">{item.category}</span></div>
                        <div className="package"><span className="left">Package size:</span><span className="right">{item.packageSize}</span></div>
                        </div>                      
                        <div className="updated">Updated  {item.lastUpdate} ago</div>
                    </div>
                        <div className="items_data">
                        <div className="data_content">
                        <div className="locations">
                            <div className="items">
                                <div className="left">Vendor Location:</div>
                                <div className="right">{item.vendorLocation}</div>
                            </div>
                            <div className="items">
                                <div className="left">Receiver Location:</div>
                                <div className="right">{item.recieverLocation}</div>
                            </div>
                        </div>
                        <div className="package">
                            <div className="items">
                                <div className="left">/ Travel Distance:</div>
                                <div className="right">{item.vendorTravelDistance}</div>
                            </div>
                            <div className="items">
                                <div className="left">/ Travel Distance:</div>
                                <div className="right">{item.recieverTravelDistance}</div>
                            </div>
                        </div>
                        <div className="estimated">
                            <div className="items">
                                <div className="left">/ Estimated Time:</div>
                                <div className="right">{item.vendorEstimatedTime}</div>
                            </div>
                            <div className="items">
                                <div className="left">/ Estimated Time:</div>
                                <div className="right">{item.recieverEstimatedTime}</div>
                            </div>
                        </div>
                    </div>
                    <div className="accept_remove_btn">
                       <Button text="Accept Offer" style={{padding:'10px'}} onClick={handleSucessModal}/>
                        <div className="remove_offer">Remove Offer</div>
                    </div>
                    </div>  
                </div>
                            ))
                        }
                    <div className="footer">
                        <button className="prev" onClick={prevHandler}>{" < "} Prev</button>
                        <span>{dataSet.start} {" - "}{dataSet.next} of 54</span>
                        <button className="next" onClick={nextHandler}>Next {" > "}</button>
                    </div>
                </div>
               {
                <AcceptModal setAccept={()=>{setOpenModal(true); dispatch(setCountDownTimer(true))}} title="Success" text="Please note: You have a time frame of 10 minutes to decline this offer incase you are no longer available. Once this time elapse, you will be unable to decline this offer anymore!" open={successOpen} onClose={handleClose} onClick={handleClose} subTitle="Delivery Request offer has been accepted!"/>
               } 
              <AcceptOrRejectModal open={openModal} onClose={closeModal}/>
            </div>
           
        </Modal>
    );
}
