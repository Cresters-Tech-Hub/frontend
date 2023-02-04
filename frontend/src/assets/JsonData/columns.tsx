import Checkbox from "@mui/material/Checkbox";
import { Row } from "react-table";
import { IData } from "../../components/table/Table";
import { useMemo } from "react";
import edit from "../images/edit.png";
import deleteIcon from "../images/delete.png";
import { ColumnDef } from "@tanstack/react-table";
import Rating from "@mui/material/Rating";
import { formatAmount } from "./../../utils/helper/index";

export const useTableColumns = () => {
    const COLUMNS = useMemo<ColumnDef<IData>[]>(
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
                cell: ({ row }) => <ItemWithImage {...row.original} />,
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
                cell: (row) => <Action />,
                footer: (props) => props.column.id
            }
        ],
        []
    );
    return COLUMNS;
};

function ItemWithImage(row: IData) {
    return (
        <div className="table_item_with_img_container">
            <div className="left">
                <img src={row.itemName.image} alt="" />
            </div>
            <div className="right">
                <div className="title">{row.itemName.details.title}</div>
                <div className="rating">
                    <Rating
                        name="item ratings"
                        className="rating_settings"
                        value={row.itemName.details.rating}
                        size="small"
                        disabled
                    />
                </div>
            </div>
        </div>
    );
}
function Action() {
    return (
        <div className="table_action_with_container">
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
        </div>
    );
}
