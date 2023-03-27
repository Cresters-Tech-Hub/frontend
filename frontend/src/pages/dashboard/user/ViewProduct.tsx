import React from "react";
import "./style.scss";
import { useNavigate } from "react-router-dom";
import productBg from "../../../assets/images/product_bg.png";
import IconButton from "../../../components/buttons/IconButton";
import { BsHandbag } from "react-icons/bs";
import { FaShoppingCart } from "react-icons/fa";
import StockCounter from "../../../components/counter";
import { formatAmount } from "./../../../utils/helper/index";
import { Rating } from "@mui/material";
import SimilarItems from "../../../components/similar-items";

interface Props {
    role: string | undefined;
    instock?: number;
    cost: string;
    rating?: number;
}

const ViewProduct = ({ role, instock, cost, rating }: Props) => {
    const navigate = useNavigate();
    return (
        <div className="view_product">
            <div className="top_title">
                <div className="navigation_left" onClick={() => navigate(`/${role}`)}>
                    <span>Back to Dashboard//</span>
                    <span>View Product</span>
                </div>
                <div className="navigation_right">
                    <span>Next</span>
                    <span>/</span>
                    <span>Previous</span>
                </div>
            </div>
            <div className="product_intro">
                <div className="title">Fit Jumpsuit</div>
                <div className="product_top_action">
                    <img src={productBg} alt="" />
                    <div className="btns">
                        <IconButton
                            title="Add to Cart"
                            icon={<BsHandbag />}
                            bg="white"
                            color="#06C149"
                            outline="1px solid #06C149"
                            style={{ width: "168px" }}
                        />
                        <IconButton
                            title="Buy Now"
                            icon={<FaShoppingCart />}
                            bg="#06C149"
                            color="#fff"
                            outline="#06C149"
                            style={{ width: "168px" }}
                        />
                    </div>
                </div>
            </div>
            <div className="product_description">
                <div className="title">Description</div>
                <div className="detail">
                    Lorem ipsum dolor sit amet consectetur. Porta viverra eget lorem amet in semper
                    vitae volutpat. Tempus faucibus consequat urna et erat vel feugiat scelerisque
                    eu.sit amet consectetur. Porta viverra eget lorem amet in semper vitae volutpat.
                    Tempus faucibus consequat urna et erat vel feugiat scelerisque eu.
                </div>
                <StockCounter instock={12} shownInstock isProductPage/>
                <div className="amount">&#8358;{formatAmount(cost)}</div>
            </div>
            <div className="product_amount_rating">
                <Rating value={5} readOnly size="small" />
                <div className="msg">View all Reviews (12)</div>
            </div>
            <div className="product_similar_items">
                <SimilarItems title="Similar Items"/>
            </div>
        </div>
    );
};

export default ViewProduct;
