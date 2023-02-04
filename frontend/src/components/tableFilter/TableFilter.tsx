import React, { useState } from "react";
import listView from "../../assets/images/list_view.png";
import gridView from "../../assets/images/grid_view.png";
import search from '../../assets/images/search.png'
import addIcon from "../../assets/images/add_products.png";
import rightCaret from "../../assets/images/right_caret.png";

export default function TableFilter() {
    const [isActive, setIsActive] = useState({ id: 0, text: "On Sales Items" });
    const selectOptions = [
        { id: 0, label: "All Categories", value: "All Categories" },
        { id: 1, label: "Sold", value: "Sold" },
        { id: 2, label: "Returned", value: "Returned" },
        { id: 3, label: "On Sale", value: "On Sale" }
    ];
    const filterItemsArray = [
        { id: 0, text: "On Sales Items" },
        { id: 1, text: "Sold Out Items" }
    ];
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
                        className={`left ${item.id === isActive.id && "active"}`}
                        onClick={() => setIsActive({ ...isActive, id: i, text: item.text })}
                    >
                        {isActive.text}
                    </div>
                ))}
            </div>
            <div className="filterItemRow">
                <div className="left">
                    <span>Sort by:</span>
                   
                    <select name="Categories" id="select" value={selected} onChange={selectedItem}>
                    {
                       selectOptions.map(item=>(
                        <option key={item.id} value={item.label} className="select_options">{item.value}</option>
                       )) 
                    }
                    </select>
                    <span className="views">
                        <img src={gridView} alt="" />
                        <img src={listView} alt="" />
                    </span>
                </div>
                <div className="middle">
                    <div className="searchBox">
                        <input type="search" placeholder="Search" />
                        <img src={search} alt="" />
                    </div>
                </div>
                <div className="right">
                    <button className="left">
                        <img src={addIcon} alt="" />
                        <span>Add Product</span>
                    </button>
                    <button className="right">
                        <span>View Inventory</span>
                        <img src={rightCaret} alt="" />
                    </button>
                </div>
            </div>
        </div>
    );
}
