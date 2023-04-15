import React from "react";
import "./vendorsales.scss";
import Filter from "../../../components/filter/Filter";
import vendorIntroImg from "../../../assets/images/vendor_profile_promo.jpg";
import verifiedImg from "../../../assets/images/verified.png";
import table_img from "../../../assets/images/table_img.png";
import { vendorContact, vendorTotals } from "../../../assets/JsonData/profile";
import Chart from "react-apexcharts";
import Metrics from "../../../components/metrics/Metrics";
import { Table } from "../../../components/table/Table";
import { useTableColumns } from "../../../assets/JsonData/columns";
import TableFilter from "../../../components/tableFilter/TableFilter";
import { filterItemsArray, selectOptions } from "../../../assets/JsonData/constants";

export default function VendorSales() {
    const COLUMNS = useTableColumns();

    const dummyData = [
        {
            id: 0,
            itemName: { image: `${table_img}`, details: { title: "Fit Jumpsuit", rating: 5 } },
            description: "This is a great wear for ladies....",
            properties: "Size : Medium",
            price: "3500",
            inventory: 5,
            discount: 0
        },
        {
            id: 1,
            itemName: { image: `${table_img}`, details: { title: "Fit Jumpsuit", rating: 5 } },
            description: "This is a great wear for ladies....",
            properties: "Size : Medium",
            price: "3500",
            inventory: 5,
            discount: 0
        },
        {
            id: 2,
            itemName: { image: `${table_img}`, details: { title: "Fit Jumpsuit", rating: 5 } },
            description: "This is a great wear for ladies....",
            properties: "Size : Medium",
            price: "3500",
            inventory: 5,
            discount: 0
        },
        {
            id: 3,
            itemName: { image: `${table_img}`, details: { title: "Fit Jumpsuit", rating: 5 } },
            description: "This is a great wear for ladies....",
            properties: "Size : Medium",
            price: "3500",
            inventory: 5,
            discount: 0
        },
        {
            id: 4,
            itemName: { image: `${table_img}`, details: { title: "Fit Jumpsuit", rating: 5 } },
            description: "This is a great wear for ladies....",
            properties: "Size : Medium",
            price: "3500",
            inventory: 5,
            discount: 0
        },
        {
            id: 5,
            itemName: { image: `${table_img}`, details: { title: "Fit Jumpsuit", rating: 5 } },
            description: "This is a great wear for ladies....",
            properties: "Size : Medium",
            price: "3500",
            inventory: 5,
            discount: 0
        },
        {
            id: 6,
            itemName: { image: `${table_img}`, details: { title: "Fit Jumpsuit", rating: 5 } },
            description: "This is a great wear for ladies....",
            properties: "Size : Medium",
            price: "3500",
            inventory: 5,
            discount: 0
        },
        {
            id: 7,
            itemName: { image: `${table_img}`, details: { title: "Fit Jumpsuit", rating: 5 } },
            description: "This is a great wear for ladies....",
            properties: "Size : Medium",
            price: "3500",
            inventory: 5,
            discount: 0
        },
        {
            id: 8,
            itemName: { image: `${table_img}`, details: { title: "Fit Jumpsuit", rating: 5 } },
            description: "This is a great wear for ladies....",
            properties: "Size : Medium",
            price: "3500",
            inventory: 5,
            discount: 0
        },
        {
            id: 9,
            itemName: { image: `${table_img}`, details: { title: "Fit Jumpsuit", rating: 5 } },
            description: "This is a great wear for ladies....",
            properties: "Size : Medium",
            price: "3500",
            inventory: 5,
            discount: 0
        },
        {
            id: 10,
            itemName: { image: `${table_img}`, details: { title: "Fit Jumpsuit", rating: 5 } },
            description: "This is a great wear for ladies....",
            properties: "Size : Medium",
            price: "3500",
            inventory: 5,
            discount: 0
        },
        {
            id: 11,
            itemName: { image: `${table_img}`, details: { title: "Fit Jumpsuit", rating: 5 } },
            description: "This is a great wear for ladies....",
            properties: "Size : Medium",
            price: "3500",
            inventory: 5,
            discount: 0
        }
    ];

    return (
        <div className="vendorsales">
            <Table
                data={dummyData}
                columns={COLUMNS}
                tablefilter={
                    <TableFilter
                        filterItemsArray={filterItemsArray}
                        selectOptions={selectOptions}
                        isRider={false}
                    />
                }
            />
        </div>
    );
}
