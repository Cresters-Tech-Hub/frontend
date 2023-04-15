import vendor1 from "../../assets/images/vendor1.png";
import vendor2 from "../../assets/images/vendor2.png";
import vendor3 from "../../assets/images/vendor3.png";
import vendor4 from "../../assets/images/vendor4.png";
import cloth1 from "../../assets/images/cloth1.png";
import cloth2 from "../../assets/images/cloth2.png";
import cloth3 from "../../assets/images/cloth3.png";
import cloth4 from "../../assets/images/cloth4.png";
import bolognepasta from "../../assets/images/bolognepasta.png";
import vanilla_cake from "../../assets/images/vanilla_cake.png";
import pizza from "../../assets/images/pizza.png";
import sandwich from "../../assets/images/sandwich.png";
import velvetrobe from "../../assets/images/velvetrobe.png";
import wrappedsilkyown from "../../assets/images/wrappedsilkyown.png";
import roundnecktee from "../../assets/images/roundnecktee.png";
import niketshirt from "../../assets/images/niketshirt.png";
import rightsidebarfoodfeatured from "../../assets/images/rightsidebarfoodfeatured.png";
import rightsidebarfoodpromo from "../../assets/images/rightsidebarfoodpromo.png";
import rightsidebarclothpromo from "../../assets/images/rightsidebarclothpromo.png";
import rightsidebarclothfeatured from "../../assets/images/rightsidebarclothfeatured.png";

export const dashboardOptions = ["food", "fashion", "furniture", "automobile", "electronics"];
export const variants = ["small", "medium", "large", "Extra Large"];
export const tagsData = ["Boots", "Sneakers", "Clothes", "Footwaer"];
export const vehicleType = ["Trailer", "Van", "Motocylce", "Tricycle", "Car"];
export const vehicleColor = ["blue", "black", "white", "gray", "red"];
export const packageSize = ["Less than 5kg", "Less than 10kg", "Less than 15kg", "Less than 25kg"];
export const ColorData = ["red", "blue", "green"];
export const emailNotiPreference = ["Send me personalised Email Notifications on stores update", "Send me personalised Email Notifications on new sales", 
"Send me personalised Email Notifications on order payment", "Send me personalised Email Notifications on order progress"];
export const userEmailNotiPreference = ["Send me personalised Email Notifications on new promotional offers", 
"Send me personalised Email Notifications on stores update", "Send me personalised Email Notifications on order progress"];
export const vendorEmailNotiPreference = ["Send me personalised Email Notifications on incoming ride offers", 
"Send me personalised Email Notifications on new sales", "Send me personalised Email Notifications on payment", "Send me personalised Email Notifications on order progress"];

export const food = [
    {
        id: 0,
        poster: vendor1
    },
    {
        id: 1,
        poster: vendor2
    },
    {
        id: 2,
        poster: vendor3
    },
    {
        id: 3,
        poster: vendor4
    },
    {
        id: 4,
        poster: vendor1
    },
    {
        id: 5,
        poster: vendor2
    },
    {
        id: 6,
        poster: vendor3
    },
    {
        id: 7,
        poster: vendor4
    }
];

export const cloth = [
    {
        id: 0,
        poster: cloth1
    },
    {
        id: 1,
        poster: cloth2
    },
    {
        id: 2,
        poster: cloth3
    },
    {
        id: 3,
        poster: cloth4
    },
    {
        id: 4,
        poster: cloth1
    },
    {
        id: 5,
        poster: cloth2
    },
    {
        id: 6,
        poster: cloth3
    },
    {
        id: 7,
        poster: cloth4
    }
];

export const foodBestSellers = [
    {
        id: 0,
        name: "Bologne Pasta",
        vendor: "The Place Restaurant",
        time: "24min  •",
        rating: 4.5,
        img: bolognepasta,
        amount: " 5,600"
    },
    {
        id: 1,
        name: "Vanilla Cake Cherry Slice",
        vendor: "Chicken Republic",
        time: "24min  •",
        rating: 4.5,
        img: vanilla_cake,
        amount: " 3,500"
    },
    {
        id: 2,
        name: "Magerita Pizza",
        vendor: "Sweet Sensation",
        time: "24min  •",
        rating: 4.5,
        img: pizza,
        amount: " 5,000"
    },
    {
        id: 3,
        name: "Veggies Sandwich",
        vendor: "Mr Biggs",
        time: "24min  •",
        rating: 4.5,
        img: sandwich,
        amount: " 4,600"
    },
    {
        id: 4,
        name: "Bologne Pasta",
        vendor: "The Place Restaurant",
        time: "24min  •",
        rating: 4.5,
        img: bolognepasta,
        amount: " 5,600"
    },
    {
        id: 5,
        name: "Vanilla Cake Cherry Slice",
        vendor: "Chicken Republic",
        time: "24min  •",
        rating: 4.5,
        img: vanilla_cake,
        amount: " 3,500"
    },
    {
        id: 6,
        name: "Magerita Pizza",
        vendor: "Sweet Sensation",
        time: "24min  •",
        rating: 4.5,
        img: sandwich,
        amount: " 5,000"
    },
    {
        id: 7,
        name: "Veggies Sandwich",
        vendor: "Mr Biggs",
        time: "24min  •",
        rating: 4.5,
        img: pizza,
        amount: " 4,600"
    }
];

export const clothBestSellers = [
    {
        id: 0,
        name: "Velvet Robe",
        vendor: "Bonjour Boutique",
        time: "24min  •",
        rating: 4.5,
        img: velvetrobe,
        amount: "11,600"
    },
    {
        id: 1,
        name: "Wrapped Silky Gown",
        vendor: "Lafarge Clothing Line",
        time: "24min  •",
        rating: 4.5,
        img: wrappedsilkyown,
        amount: "9,500"
    },
    {
        id: 2,
        name: "Round Neck Tee",
        vendor: "Quatrer Clothing Line",
        time: "24min  •",
        rating: 4.5,
        img: roundnecktee,
        amount: " 5,000"
    },
    {
        id: 3,
        name: "Nike T-Shirt",
        vendor: "Tamar Boutique ",
        time: "24min  •",
        rating: 4.5,
        img: niketshirt,
        amount: "8,600"
    },
    {
        id: 4,
        name: "Velvet Robe",
        vendor: "Bonjour Boutique",
        time: "24min  •",
        rating: 4.5,
        img: velvetrobe,
        amount: "11,600"
    },
    {
        id: 5,
        name: "Wrapped Silky Gown",
        vendor: "Lafarge Clothing Line",
        time: "24min  •",
        rating: 4.5,
        img: wrappedsilkyown,
        amount: "9,500"
    },
    {
        id: 6,
        name: "Round Neck Tee",
        vendor: "Quatrer Clothing Line",
        time: "24min  •",
        rating: 4.5,
        img: roundnecktee,
        amount: " 5,000"
    },
    {
        id: 7,
        name: "Nike T-Shirt",
        vendor: "Tamar Boutique ",
        time: "24min  •",
        rating: 4.5,
        img: niketshirt,
        amount: "8,600"
    }
];

interface IVendor {
    [index: string]: any;
}

export const vendors: IVendor = [
    {
        id: 0,
        food: { data: food, bestsellers: foodBestSellers }
    },
    {
        id: 1,
        fashion: { data: cloth, bestsellers: clothBestSellers }
    },
    {
        id: 2,
        furniture: { data: cloth, bestsellers: clothBestSellers }
    },
    {
        id: 3,
        automobile: { data: cloth, bestsellers: clothBestSellers }
    },
    {
        id: 4,
        electronics: { data: cloth, bestsellers: clothBestSellers }
    }
];

export const rightSidebarItems: IVendor = [
    {
        id: 0,
        food: {
            promotion: rightsidebarfoodpromo,
            feeatured: {
                img: rightsidebarfoodfeatured,
                name: "Bread with sunnyside up Egg",
                vendor: "Sweet Sensation",
                rating: {
                    time: "24min",
                    stars: "4.5"
                },
                amount: "2800"
            }
        }
    },
    {
        id: 1,
        fashion: {
            promotion: rightsidebarclothpromo,
            feeatured: {
                img: rightsidebarclothfeatured,
                name: "Mai Atafo Clothing Line",
                vendor: "Bridal Combo",
                rating: {
                    time: "24min",
                    stars: "4.5"
                },
                amount: "52800"
            }
        }
    },
    {
        id: 2,
        furniture: {
            promotion: rightsidebarfoodpromo,
            feeatured: {
                img: rightsidebarfoodfeatured,
                name: "Bread with sunnyside up Egg",
                vendor: "Sweet Sensation",
                rating: {
                    time: "24min",
                    stars: "4.5"
                },
                amount: "2800"
            }
        }
    },
    {
        id: 3,
        automobile: {
            promotion: rightsidebarfoodpromo,
            feeatured: {
                img: rightsidebarfoodfeatured,
                name: "Bread with sunnyside up Egg",
                vendor: "Sweet Sensation",
                rating: {
                    time: "24min",
                    stars: "4.5"
                },
                amount: "2800"
            }
        }
    },
    {
        id: 4,
        electronics: {
            promotion: rightsidebarfoodpromo,
            feeatured: {
                img: rightsidebarfoodfeatured,
                name: "Bread with sunnyside up Egg",
                vendor: "Sweet Sensation",
                rating: {
                    time: "24min",
                    stars: "4.5"
                },
                amount: "2800"
            }
        }
    }
];
