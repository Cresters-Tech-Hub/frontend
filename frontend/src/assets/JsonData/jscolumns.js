import { Checkbox } from "@mui/material";

export const COLUMNS = [
    {
        header: " ",
        Cell: ({row}) => (
            <Checkbox
                defaultChecked
                sx={{
                    color: "blue",
                    "&.Mui-checked": {
                        color: "blue"
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
    { header: "Description", accessor: "description" },
    { header: "Properties", accessor: "properties" },
    { header: "Price", accessor: "price" },
    { header: "Inventory", accessor: "inventory" },
    { header: "Discount", accessor: "discount" },
    {
        header: "Action",
        cell: ({row}) => (
            <>
                <div className="edit">Edit</div>
                <div className="delete">Delete</div>
            </>
        )
    }
]