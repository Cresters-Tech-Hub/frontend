import React, { useState } from "react";
import listView from "../../assets/images/list_view.png";
import gridView from "../../assets/images/grid_view.png";
import search from '../../assets/images/search.png'
import addIcon from "../../assets/images/add_products.png";
import rightCaret from "../../assets/images/right_caret.png";
import mail_incoming from "../../assets/images/mail_incoming.png";
import { useNavigate } from 'react-router-dom';
import { Checkbox } from "@mui/material";


interface IFilterTop{
    id:number,
    text:string
}

interface ISelectMenuOptions{
    id: number, label: string, value: string
}
interface ITableFilter{
    filterItemsArray: IFilterTop[]
    selectOptions?:ISelectMenuOptions[]
    isRider:boolean
    onClick?:React.MouseEventHandler<HTMLButtonElement>
}

export default function TableFilter({filterItemsArray, selectOptions, isRider, onClick}:ITableFilter) {
    const [isActive, setIsActive] = useState({ id: 0, text: "On Sales Items" });
    const navigate = useNavigate();
   
  
    const [selected, setSelected]= useState('All Categories')
    const selectedItem=(event:React.ChangeEvent<HTMLSelectElement>)=>{
        const value = event.target.value
        setSelected(value)
    }
    return (
        <div className="table_filter_container">
            <div className="filterTiltle">
                {filterItemsArray.map((item, i) => (
                    <div
                        key={item.id}
                        className={`${item.id === isActive.id && "active"}`}
                        onClick={() => setIsActive({ ...isActive, id: i, text: item.text })}
                    >
                        {item.text}
                    </div>
                ))}
            </div>
            <div className="filterItemRow">
                <span style={{display:"flex", flexDirection:"row", gap:"0.2rem", alignItems:"center"}}> 
                    <span style={{fontSize:"12px"}}>Select All</span>
                    <Checkbox
                        sx={{
                            color: "#06C149",
                            "&.Mui-checked": {
                                color: "#06C149"
                            }
                        }}
                    /></span>
                {
                    !isRider && <div className="left">
                    <span>Sort by:</span>
                   
                    <select name="Categories" id="select" value={selected} onChange={selectedItem}>
                    {
                       selectOptions && selectOptions.map(item=>(
                        <option key={item.id} value={item.label} className="select_options">{item.value}</option>
                       )) 
                    }
                    </select>
                    <span className="views">
                        <img src={gridView} alt="" />
                        <img src={listView} alt="" />
                    </span>
                </div>
                }
                
                <div className={`${isRider ? 'rider_middle_filter' : 'middle'}`}>
                    <div className="searchBox">
                        <input type="search" placeholder="Search" />
                        <img src={search} alt="" className="searchIcon"/>
                    </div>
                </div>
                {
                    isRider ?  <div className={`${isRider && 'rider_right_filter'}`}>
                    <button className="rider_incomming" onClick={onClick}>
                        <img src={mail_incoming} alt="" />
                        <span>View Incoming Offers</span>
                    </button>
                </div> : <div className="right">
                    <button className="left" onClick={()=>navigate("/add_product")}>
                        <img src={addIcon} alt="" />
                        <span>Add Product</span>
                    </button>
                    <button className="right">
                        <span>View Inventory</span>
                        <img src={rightCaret} alt="" />
                    </button>
                </div>
                }
            </div>
        </div>
    );
}
