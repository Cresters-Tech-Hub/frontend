import Checkbox from "@mui/material/Checkbox";
import { useMemo } from "react";
import edit from "../images/edit.png";
import show from "../images/show.png";
import deleteIcon from "../images/delete.png";
import { ColumnDef } from "@tanstack/react-table";
import Rating from "@mui/material/Rating";
import { formatAmount } from "./../../utils/helper/index";
import { IRiderData, IVendorData } from "../../types/data";




export const useTableColumns = () => {
    const COLUMNS = useMemo<ColumnDef<IVendorData>[]>(
        () => [
            {
                header: " ",
                cell: (row) => (
                    <Checkbox
                        sx={{
                            color: "#06C149",
                            "&.Mui-checked": {
                                color: "#06C149"
                            }
                        }}
                    />
                ),
                footer: (props) => props.column.id
            },
            {
                header: "Item Name with Images",
                cell: ({ row }) => <ItemWithImage image={row.original.itemName.image} title={row.original.itemName.details.title} rating={row.original.itemName.details.rating} />,
                accessorKey: "itemName",
                footer: (props) => props.column.id
            },
            {
                header: "Description",
                cell: ({ row }) => <span className="description">{row.original.description}</span>,
                accessorKey: "description",
                footer: (props) => props.column.id
            },
            {
                header: "Properties",
                cell: (row) => row.renderValue(),
                accessorKey: "properties",
                footer: (props) => props.column.id
            },
            {
                header: "Price",
                cell: ({ row }) => (
                    <span>
                        <span> &#x20A6;</span>
                        {formatAmount(row.original.price)}
                    </span>
                ),
                accessorKey: "price",
                footer: (props) => props.column.id
            },
            {
                header: "Inventory",
                cell: (row) => row.renderValue(),
                accessorKey: "inventory",
                footer: (props) => props.column.id
            },
            {
                header: "Discount",
                cell: (row) => row.renderValue(),
                accessorKey: "discount",
                footer: (props) => props.column.id
            },
            {
                header: "Action",
                cell: (row) => <Action isVendor={true}/>,
                footer: (props) => props.column.id
            }
        ],
        []
    );
    return COLUMNS;
};

export const useRiderTableColumns = () => {
    const COLUMNS = useMemo<ColumnDef<IRiderData>[]>(
        () => [
            {
                header: " ",
                cell: (row) => (
                    <Checkbox
                        sx={{
                            color: "#06C149",
                            "&.Mui-checked": {
                                color: "#06C149"
                            }
                        }}
                    />
                ),
                footer: (props) => props.column.id
            },
            {
                header: "Item Name with Images",
                cell: ({ row }) => <ItemWithImage image={row.original.itemName.image} title={row.original.itemName.title}/>,
                accessorKey: "itemName",
                footer: (props) => props.column.id
            },
            {
                header: "Package Size",
                cell: ({ row }) => <span className="description">{row.original.packageSize}</span>,
                accessorKey: "packageSize",
                footer: (props) => props.column.id
            },
            {
                header: "Properties",
                cell: (row) => row.renderValue(),
                accessorKey: "properties",
                footer: (props) => props.column.id
            },
            {
                header: "Vendor Name",
                cell: ({ row }) => (
                    <span>                       
                        {row.original.vendorName}
                    </span>
                ),
                accessorKey: "vendorName",
                footer: (props) => props.column.id
            },
            {
                header: "Vendor Location",
                cell: ({ row }) => (
                    <span>                       
                        {row.original.vendorLocation}
                    </span>
                ),
                accessorKey: "vendorLocation",
                footer: (props) => props.column.id
            },
            {
                header: "Reciever's Location",
                cell:  ({ row }) => (
                    <span>                       
                        {row.original.recieverLocation}
                    </span>
                ),
                accessorKey: "recieverLocation",
                footer: (props) => props.column.id
            },
            {
                header: "Action",
                cell: (row) => <Action isVendor={false}/>,
                footer: (props) => props.column.id
            }
        ],
        []
    );
    return COLUMNS;
};

interface IItemWithImage{
    image:string, title:string, rating?:number
}

function ItemWithImage({image, title, rating}:IItemWithImage) {
    return (
        <div className="table_item_with_img_container">
            <div className="left">
                <img src={image} alt="" />
            </div>
            <div className="right">
                <div className="title">{title}</div>
                {
                    rating &&  <div className="rating">
                    <Rating
                        name="item ratings"
                        className="rating_settings"
                        value={rating}
                        size="small"
                        disabled
                    />
                </div>
                }
               
            </div>
        </div>
    );
}
interface IAction{
    isVendor:boolean
}
function Action({isVendor}:IAction) {
    return (
        <div>
            {
                isVendor ?  <div className="table_action_with_container">
                <div className="tile">
                    <div className="title">Edit</div>
                    <div className="icon">
                        <img src={edit} alt="" />
                    </div>
                </div>
                <div className="tile">
                    <div className="title">Delete</div>
                    <div className="icon">
                        <img src={deleteIcon} alt="" />
                    </div>
                </div>
            </div> :  <div className="table_action_with_container">
                <div className="tile">
                    <div className="title">View</div>
                    <div className="icon">
                        <img src={show} alt="" />
                    </div>
                </div>
            </div> 
            }
        </div>
       
    );
}
