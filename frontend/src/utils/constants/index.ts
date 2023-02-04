import productsImg from "../../assets/images/welcome_screen_img_1.png";
import deliveryImg from "../../assets/images/delivery_img_home.png";
import salesImg from "../../assets/images/welcome_screen_img_3.png";

export interface Option {
    label: string;
    value: string;
}
export interface ColourOption {
    readonly value: string;
    readonly label: string;
    readonly color: string;
    readonly isFixed?: boolean;
    readonly isDisabled?: boolean;
}

export const colourOptions: readonly ColourOption[] = [
    { value: "ocean", label: "Ocean", color: "#00B8D9", isFixed: true },
    { value: "blue", label: "Blue", color: "#0052CC", isDisabled: true },
    { value: "purple", label: "Purple", color: "#5243AA" },
    { value: "red", label: "Red", color: "#FF5630", isFixed: true },
    { value: "orange", label: "Orange", color: "#FF8B00" },
    { value: "yellow", label: "Yellow", color: "#FFC400" },
    { value: "green", label: "Green", color: "#36B37E" },
    { value: "forest", label: "Forest", color: "#00875A" },
    { value: "slate", label: "Slate", color: "#253858" },
    { value: "silver", label: "Silver", color: "#666666" }
];

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
