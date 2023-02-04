import React from "react";
import "./vendor.scss";
import Filter from "../../../components/filter/Filter";
import vendorIntroImg from "../../../assets/images/vendor_profile_promo.jpg";
import verifiedImg from "../../../assets/images/verified.png";
import table_img from "../../../assets/images/table_img.png";
import { vendorContact, vendorTotals } from "../../../assets/JsonData/profile";
import Chart from "react-apexcharts";
import Metrics from "../../../components/metrics/Metrics";
import { IData, Table } from "../../../components/table/Table";
import { useMemo } from "react";
import { ColumnDef } from "@tanstack/react-table";
import { useTableColumns } from "../../../assets/JsonData/columns";

export default function VendorDashboard() {
    const COLUMNS = useTableColumns();
    const state = {
        series: [65, 35]
    };
    const dummyData = [
        {
            id: 0,
            itemName: {image:`${table_img}`, details:{title:"Fit Jumpsuit", rating:5}},
            description: "This is a great wear for ladies....",
            properties: "Size : Medium",
            price: "3500",
            inventory: 5,
            discount: 0
        },
        {
            id: 1,
            itemName: {image:`${table_img}`, details:{title:"Fit Jumpsuit", rating:5}},
            description: "This is a great wear for ladies....",
            properties: "Size : Medium",
            price: "3500",
            inventory: 5,
            discount: 0
        },
        {
            id: 2,
            itemName: {image:`${table_img}`, details:{title:"Fit Jumpsuit", rating:5}},
            description: "This is a great wear for ladies....",
            properties: "Size : Medium",
            price: "3500",
            inventory: 5,
            discount: 0
        },
        {
            id: 3,
            itemName: {image:`${table_img}`, details:{title:"Fit Jumpsuit", rating:5}},
            description: "This is a great wear for ladies....",
            properties: "Size : Medium",
            price: "3500",
            inventory: 5,
            discount: 0
        },
    ];

    return (
        <div className="vendordashboard">
            <div className="top">
                <div></div>
                <Filter text="Filter by Category" />
            </div>
            <div className="vendor_intro">
                <div className="left">
                    <img src={vendorIntroImg} alt="vendor Intro Image" />
                </div>
                <div className="right">
                    <div className="title_container">
                        <div className="title">
                            <span>Faucet Stores</span>
                            <img src={verifiedImg} alt="" />
                        </div>
                        <div className="subtitle_text">
                            I am a food and fashion vendor, I sell high quality and affordable
                            items. I love to please my customers and sell good quality products.
                        </div>
                    </div>

                    <div className="vendordashboard_contact">
                        {vendorContact.map((item) => (
                            <div className="vendor_contact" key={item.id}>
                                <img src={item.icon} alt={item.title} />
                                <div className="details">
                                    <div className="title">{item.title}</div>
                                    <div className="value">{item.value}</div>
                                </div>
                            </div>
                        ))}
                    </div>
                    <div className="vendor_category">
                        <div className="sales">Store sales category:</div>
                        <div className="food">Food</div>
                        <div className="fashion">Fashion</div>
                    </div>
                </div>
            </div>
            <div className="vendor_metrics">
                {vendorTotals.map((item) => (
                    <div className="vendor_contact" key={item.id}>
                        <img src={item.icon} alt={item.title} />
                        <div className="details">
                            <div className="title">{item.title}</div>
                            <div className="value">{item.value}</div>
                        </div>
                    </div>
                ))}
            </div>
            <div className="analytics">
                <div className="donut">
                    <Chart
                        options={{
                            dataLabels: {
                                enabled: false
                            },
                            fill: {
                                colors: ["#06C149", "#9C27B0"]
                            },
                            labels: ["Total sales", "Total items uploaded"],
                            plotOptions: {
                                area: {
                                    fillTo: "origin"
                                },
                                pie: {
                                    donut: {
                                        labels: {
                                            show: false
                                        }
                                    }
                                }
                            },

                            legend: {
                                show: false
                            },
                            colors: ["#06C149", "#9C27B0"],
                            noData: {
                                align: "center",
                                text: "No data to display yet"
                            }
                        }}
                        series={state.series}
                        type="donut"
                        width="380"
                    />
                </div>
                <div className="analytics_details">
                    <div className="title">Analytics Chart</div>
                    <div className="middle">
                        <Metrics
                            title="Total items uploaded"
                            width={100}
                            color="linear-gradient(174.81deg, #7f6bd6 26.64%, #dfd7ff 72.39%)"
                        />
                        <Metrics
                            title="Total sales"
                            width={72}
                            color="linear-gradient(174.57deg, #06C149 30.6%, #06C149 62.72%, #EBF9EA 110.14%)"
                        />
                        <div className="analytics_info">
                            Lorem ipsum dolor sit amet consectetur. Ut orci tortor eu molestie
                            accumsan ornare amet. Sem etiam elementum ultrices leo dapibus lectus
                            sed.
                        </div>
                    </div>
                </div>
            </div>
            <Table data={dummyData} columns={COLUMNS} />
        </div>
    );
}
