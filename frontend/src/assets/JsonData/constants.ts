import calendar from "../images/calendar.png";
import message from "../images/message.png";
import phone from "../images/call.png";
import location from "../images/location2.png";
import table_img from "../images/table_img.png";
import stripes from "../images/similar-images/stripes.png";
import monchrome from "../images/similar-images/monchrome.png";
import poker from "../images/similar-images/poker.png";
import mini from "../images/similar-images/mini.png";
import cart_bag from "../images/cart_bag.png";
import cart_blouse from "../images/cart_blouse.png";

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
        image: calendar,
        itemName: "Date joined",
        value: "13th December, 2022"
    },
    {
        id: 1,
        image: message,
        itemName: "Email Address",
        value: "martinsadetola@gmail.com"
    },
    {
        id: 2,
        image: phone,
        itemName: "Phone Number",
        value: "09028990000"
    },
    {
        id: 3,
        image: location,
        itemName: "Location",
        value: "Off Shangisha street, Mago...os"
    }
];

export const riderDummyData = [
    {
        id: 0,
        itemName: { image: `${table_img}`, title: "Fit Jumpsuit" },
        packageSize: "Less than 5kg",
        properties: "Size : Medium",
        vendorName: "Fayvee Stores",
        vendorLocation: "No 5, Arike Street, Oshodi",
        recieverLocation: "No 2, Itomori Road..."
    },
    {
        id: 1,
        itemName: { image: `${table_img}`, title: "Fit Jumpsuit" },
        packageSize: "Less than 5kg",
        properties: "Size : Medium",
        vendorName: "Fayvee Stores",
        vendorLocation: "No 5, Arike Street, Oshodi",
        recieverLocation: "No 2, Itomori Road..."
    },
    {
        id: 2,
        itemName: { image: `${table_img}`, title: "Fit Jumpsuit" },
        packageSize: "Less than 5kg",
        properties: "Size : Medium",
        vendorName: "Fayvee Stores",
        vendorLocation: "No 5, Arike Street, Oshodi",
        recieverLocation: "No 2, Itomori Road..."
    },
    {
        id: 3,
        itemName: { image: `${table_img}`, title: "Fit Jumpsuit" },
        packageSize: "Less than 5kg",
        properties: "Size : Medium",
        vendorName: "Fayvee Stores",
        vendorLocation: "No 5, Arike Street, Oshodi",
        recieverLocation: "No 2, Itomori Road..."
    }
];

export const incomingOrderData = [
    {
        id: 0,
        orderId: "#12456",
        category: "Fashion",
        packageSize: "Less than 5kg",
        lastUpdate: "29mins",
        vendorLocation: "No 5, Arike Street, Oshodi",
        recieverLocation: "No 2, Itomori Road, Ajao Estate",
        vendorTravelDistance: "5km",
        recieverTravelDistance: "3km",
        vendorEstimatedTime: "30 mins",
        recieverEstimatedTime: "15 mins"
    },
    {
        id: 1,
        orderId: "#82456",
        category: "Food",
        packageSize: "Less than 5kg",
        lastUpdate: "29mins",
        vendorLocation: "No 5, Arike Street, Oshodi",
        recieverLocation: "No 2, Itomori Road, Ajao Estate",
        vendorTravelDistance: "5km",
        recieverTravelDistance: "3km",
        vendorEstimatedTime: "30 mins",
        recieverEstimatedTime: "15 mins"
    },
    {
        id: 2,
        orderId: "#52456",
        category: "Fashion",
        packageSize: "Less than 5kg",
        lastUpdate: "29mins",
        vendorLocation: "No 5, Arike Street, Oshodi",
        recieverLocation: "No 2, Itomori Road, Ajao Estate",
        vendorTravelDistance: "5km",
        recieverTravelDistance: "3km",
        vendorEstimatedTime: "30 mins",
        recieverEstimatedTime: "15 mins"
    }
];

export const similarItemsData = [
    {
        id: 0,
        name: "Stripes Jumpsuit",
        img: stripes,
        discount: "15% off",
        vendor: "Lafarge Clothing line",
        lastUpdated: "24min  •",
        rating: 4.5,
        amount: "5600"
    },
    {
        id: 1,
        name: "Mini Jumpsuit",
        img: mini,
        discount: "15% off",
        vendor: "Tamar Boutique",
        lastUpdated: "24min  •",
        rating: 4.5,
        amount: "6500"
    },
    {
        id: 2,
        name: "MonoChrome Jumpsuit",
        img: monchrome,
        discount: "15% off",
        vendor: "Qatrer Clothing line",
        lastUpdated: "24min  •",
        rating: 4.5,
        amount: "8000"
    },
    {
        id: 3,
        name: "Poker Jumpsuit",
        img: poker,
        discount: "15% off",
        vendor: "Ciesta Clothing line",
        lastUpdated: "24min  •",
        rating: 4.5,
        amount: "4600"
    },
    {
        id: 4,
        name: "MonoChrome Jumpsuit",
        img: monchrome,
        discount: "15% off",
        vendor: "Qatrer Clothing line",
        lastUpdated: "24min  •",
        rating: 4.5,
        amount: "7200"
    },
    {
        id: 5,
        name: "Poker Jumpsuit",
        img: poker,
        discount: "15% off",
        vendor: "Ciesta Clothing line",
        lastUpdated: "24min  •",
        rating: 4.5,
        amount: "2450"
    }
];

export const viewOderItemsData = [
    {id:0, image:cart_blouse, name:"", color: "Red", quantity: 1, orderNumber:  "#12456", price: "6500", purchaseDate: "24/09/2022"},
    {id:1, image:cart_bag, name:"", color: "Gray", quantity: 1, orderNumber:  "#12456", price: "6500", purchaseDate: "24/09/2022"},
    {id:2, image:cart_blouse, name:"", color: "Red", quantity: 1, orderNumber:  "#12456", price: "6500", purchaseDate: "24/09/2022"},
]