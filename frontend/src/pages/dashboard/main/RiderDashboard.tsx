import React, {useState} from "react";
import "./riderdasboard.scss";
import riderImg from "../../../assets/images/riderimg.png";
import verified from "../../../assets/images/verified.png";
import { riderMetrics } from "../../../assets/JsonData/profile";
import { Table } from "../../../components/table/Table";
import { riderDummyData, riderFilterItemsArray, riderInfoData } from '../../../assets/JsonData/constants';
import TableFilter from "../../../components/tableFilter/TableFilter";
import { useRiderTableColumns } from './../../../assets/JsonData/columns';
import RiderDashboardModal from "../../../components/modals/ridermodal";


const RiderDashboard = () => {
    const COLUMNS = useRiderTableColumns();

    const serviceInfoData = [
        {id:0, title:"Vehicle Type", value:"Car / Truck"},
        {id:1, title:"Vehicle Model", value:"Toyota Corolla"},
        {id:2, title:"Vehicle Color", value:"Blue"},
        {id:3, title:"Vehicle Plate Number", value:"098TYUUH / 098TYUUH"},
        {id:4, title:"Work Hours", value:"7am - 11:45pm"},
    ]

    const [open, setOpen] = useState(false);
    const handleClickModal =()=>setOpen(false)
    return (
        <div className="riderdashboard">
            <div className="rider_intro">
                <div className="top_img">
                    <img src={riderImg} alt="" />
                </div>
                <div className="rider_right_intro">
                    <div className="top">
                        <div className="title">
                            <span>Martins Adetola</span> <img src={verified} alt="" />
                        </div>
                        <div className="sub_text">Individual Delivery agent</div>
                    </div>
                    
                    <div className="middle">
                        {
                            riderInfoData.map(item=>(
                                <div className="vendor_contact" key={item.id}>
                                <img src={item.image} alt="" />
                                <div className="details">
                                    <div className="title">{item.itemName}</div>
                                    <div className="value">{item.value}</div>
                                </div>
                            </div>
                            ))
                        }
                    </div>
                    <div className="bottom">
                        <div className="title">Service Information</div>
                        <div className="details_container">
                            {
                                serviceInfoData.map(item=>(
                                    <div className="details" key={item.id}>
                                        <div className="title">{item.title}</div>
                                        <div className="value">{item.value}</div>
                                    </div>
                                ))
                            }
                        </div>
                    </div>
                </div>
            </div>
            <div className="rider_metrics">
                {riderMetrics.map((item) => (
                    <div className="vendor_contact" key={item.id}>
                        <img src={item.icon} alt={item.title} />
                        <div className="details">
                            <div className="title">{item.title}</div>
                            <div className="value">{item.value}</div>
                        </div>
                    </div>
                ))}
            </div>
            <Table data={riderDummyData} columns={COLUMNS} tablefilter={<TableFilter filterItemsArray={riderFilterItemsArray} onClick={()=>setOpen(true)}  isRider={true}/>}/>
            <RiderDashboardModal open={open} onClose={handleClickModal} onClick={setOpen}/>
        </div>
    );
};

export default RiderDashboard;
