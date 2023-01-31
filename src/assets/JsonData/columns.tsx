import Checkbox from "@mui/material/Checkbox";
import { Row } from "react-table";
import { IData } from "../../components/table/Table";
import { useMemo } from "react";
import { ColumnDef } from "@tanstack/react-table";

export const useTableColumns = () => {
    const COLUMNS = useMemo<ColumnDef<IData>[]>(
        () => [
            {
                header: " ",
                cell: (row) => (
                    <Checkbox
                        defaultChecked
                        sx={{
                            color: "blue",
                            "&.Mui-checked": {
                                color: "yellow"
                            }
                        }}
                    />
                )
            },
            {
                header: "Item Name with Images",
                cell: (row) => row.renderValue(),
                accessorKey: "itemName"
            },
            { header: "Description", cell: (row) => row.renderValue(), accessorKey: "description" },
            { header: "Properties", cell: (row) => row.renderValue(), accessorKey: "properties" },
            { header: "Price", cell: (row) => row.renderValue(), accessorKey: "price" },
            { header: "Inventory", cell: (row) => row.renderValue(), accessorKey: "inventory" },
            { header: "Discount", cell: (row) => row.renderValue(), accessorKey: "discount" },
            {
                header: "Action",
                cell: (row) => (
                    <>
                        <div className="edit">Edit</div>
                        <div className="delete">Delete</div>
                    </>
                )
            }
        ],
        []
    );
    return COLUMNS;
};
