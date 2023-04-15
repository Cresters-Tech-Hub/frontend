import productsImg from "../../assets/images/welcome_screen_img_1.png";
import deliveryImg from "../../assets/images/delivery_img_home.png";
import salesImg from "../../assets/images/welcome_screen_img_3.png";

export interface Option {
    label: string;
    value: string;
}

export const variants = {
    h1: "h1",
    h2: "h2",
    h3: "h3",
    h4: "h4",
    h5: "h5",
    h6: "h6",
    body: "div",
    p: "p",
    span: "span"
};
export type Keys = keyof typeof variants;

export const btnVariants = {
    sm: "sm",
    md: "md",
    lg: "lg"
};
export type btnKeys = keyof typeof btnVariants;

export const accountTypeOptions = [
    { label: "Register as a User", value: "USER" },
    { label: "Register as a Vendor", value: "VENDOR" },
    { label: "Register as a Delivery Agent", value: "DELIVERY AGENT" }
];

export const carouselitems = [
    {
        imgUri: productsImg,
        title: "All kinds of products now within your reach",
        text: "Easily place order for your desired items right from the comfort of your room."
    },
    {
        imgUri: deliveryImg,
        title: "Hassle-free logistics at low cost",
        text:
            "Logistics never been this fast and easy. Our delivery agents ever ready to serve your logistics needs."
    },
    {
        imgUri: salesImg,
        title: "Make more sales as an online vendor",
        text: "Easily connect with customers, make more sales  and grow your busines. "
    }
];
export type carouselKeys = keyof typeof carouselitems;
