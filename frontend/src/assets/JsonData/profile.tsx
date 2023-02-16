import React from "react";
import PersonIcon from "@mui/icons-material/Person";
import SettingsIcon from "@mui/icons-material/Settings";
import PowerSettingsNewIcon from "@mui/icons-material/PowerSettingsNew";
import calendar from "../../assets/images/calendar.png";
import message from "../../assets/images/message.png";
import call from "../../assets/images/call.png";
import location from "../../assets/images/location2.png";
import orders from "../../assets/images/total_orders.png";
import sales from "../../assets/images/total_sales.png";
import uploaded from "../../assets/images/total_uploaded.png";
import rating from "../../assets/images/customer_rating.png";

export const profile = [
    {
        icon: <PersonIcon />,
        text: "Account"
    },
    {
        icon: <SettingsIcon />,
        text: "Settings"
    },
    {
        icon: <PowerSettingsNewIcon />,
        text: "Log Out"
    }
];

export const vendorContact = [
    { id: 0, value: "13th December, 2022", icon: calendar, title: "Date joined" },
    { id: 1, value: "abimbolaadegoke@gmail.com", icon: message, title: "Email Address" },
    { id: 2, value: "09088990000", icon: call, title: "Phone Number" },
    { id: 3, value: "Off Shangisha street, Mago...os", icon: location, title: "Location" }
];

export const vendorTotals = [
    { id: 0, value: "325", icon: orders, title: "Total Orders" },
    { id: 1, value: "316", icon: sales, title: "Total Sales" },
    { id: 2, value: "546", icon: uploaded, title: "Total Items Uploaded" },
    { id: 3, value: "4.5 stars", icon: rating, title: "Customers Rating" }
];
export const riderMetrics = [
    { id: 0, value: "325", icon: orders, title: "Total delivery trip Completed" },
    { id: 1, value: "1 Month", icon: uploaded, title: "Member Since" },
    { id: 2, value: "4.5 stars", icon: rating, title: "Customers Rating" }
];
