import calendar from '../images/calendar.png'
import message from "../images/message.png";
import phone from "../images/call.png";
import location from "../images/location2.png";
import table_img from "../images/table_img.png";


export const selectOptions = [
    { id: 0, label: "All Categories", value: "All Categories" },
    { id: 1, label: "Sold", value: "Sold" },
    { id: 2, label: "Returned", value: "Returned" },
    { id: 3, label: "On Sale", value: "On Sale" }
];
export const filterItemsArray = [
    { id: 0, text: "On Sales Items" },
    { id: 1, text: "Sold Out Items" }
];
export const riderFilterItemsArray = [
    { id: 0, text: "All Completed Rides" },
    { id: 1, text: "Newly Accepted Ride Offer" }
];

export const riderInfoData = [
    {
        id: 0,
        image:  calendar ,
        itemName: "Date joined",
        value: "13th December, 2022"
    },
    {
        id: 1,
        image:  message ,
        itemName: "Email Address",
        value: "martinsadetola@gmail.com"
    },
    {
        id: 2,
        image:  phone ,
        itemName: "Phone Number",
        value: "09028990000"
    },
    {
        id: 3,
        image:  location ,
        itemName: "Location",
        value: "Off Shangisha street, Mago...os"
    }
];

export const riderDummyData = [
    {   
        id:0,
        itemName: {image:`${table_img}`, title:"Fit Jumpsuit"},
        packageSize: "Less than 5kg",
        properties: "Size : Medium",
        vendorName: "Fayvee Stores",
        vendorLocation: "No 5, Arike Street, Oshodi",
        recieverLocation: "No 2, Itomori Road..."
    },
    {
        id: 1,
        itemName: {image:`${table_img}`, title:"Fit Jumpsuit"},
        packageSize: "Less than 5kg",
        properties: "Size : Medium",
        vendorName: "Fayvee Stores",
        vendorLocation: "No 5, Arike Street, Oshodi",
        recieverLocation: "No 2, Itomori Road..."
    },
    {
        id: 2,
        itemName: {image:`${table_img}`, title:"Fit Jumpsuit"},
        packageSize: "Less than 5kg",
        properties: "Size : Medium",
        vendorName: "Fayvee Stores",
        vendorLocation: "No 5, Arike Street, Oshodi",
        recieverLocation: "No 2, Itomori Road..."
    },
    {
        id: 3,
        itemName: {image:`${table_img}`, title:"Fit Jumpsuit"},
        packageSize: "Less than 5kg",
        properties: "Size : Medium",
        vendorName: "Fayvee Stores",
        vendorLocation: "No 5, Arike Street, Oshodi",
        recieverLocation: "No 2, Itomori Road..."
    },
];

export const incomingOrderData=[
    {id:0, orderId:"#12456", category:"Fashion", packageSize:"Less than 5kg", lastUpdate:"29mins", vendorLocation:"No 5, Arike Street, Oshodi",
    recieverLocation:"No 2, Itomori Road, Ajao Estate", vendorTravelDistance:"5km", recieverTravelDistance:"3km", vendorEstimatedTime:"30 mins", recieverEstimatedTime:"15 mins"},
    {id:1, orderId:"#82456", category:"Food", packageSize:"Less than 5kg", lastUpdate:"29mins", vendorLocation:"No 5, Arike Street, Oshodi",
    recieverLocation:"No 2, Itomori Road, Ajao Estate", vendorTravelDistance:"5km", recieverTravelDistance:"3km", vendorEstimatedTime:"30 mins", recieverEstimatedTime:"15 mins"},
    {id:2, orderId:"#52456", category:"Fashion", packageSize:"Less than 5kg", lastUpdate:"29mins", vendorLocation:"No 5, Arike Street, Oshodi",
    recieverLocation:"No 2, Itomori Road, Ajao Estate", vendorTravelDistance:"5km", recieverTravelDistance:"3km", vendorEstimatedTime:"30 mins", recieverEstimatedTime:"15 mins"}
  ]