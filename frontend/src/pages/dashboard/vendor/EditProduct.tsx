import React, { useState } from "react";
import "./editproduct.scss";
import { useNavigate } from "react-router-dom";
import productBg from "../../../assets/images/product_bg.png";
import IconButton from "../../../components/buttons/IconButton";
import { BiEditAlt } from "react-icons/bi";
import StockCounter from "../../../components/counter";
import { formatAmount } from "./../../../utils/helper/index";
import { Rating } from "@mui/material";
import SimilarItems from "../../../components/similar-items";
import Input from "../../../components/form";
import AddMoreImages from "../../../components/uploaddocs/AddMoreImages";
import RegModal from "../../../components/modals/regmodal";

interface Props {
    role: string | undefined;
    instock?: number;
    cost: string;
    rating?: number;
}

const EditProduct = ({ role, instock, cost, rating }: Props) => {
    const [edit, setEdit] = useState("");
    const [desc, setDesc] = useState("");
    const [iSDesc, setIsDesc] = useState(false);
    const [amount, setAmount] = useState("");
    const [isAmount, setIsAmount] = useState(false);
    const [isSubmit, setIsSubmit] = useState(false);
    const [clickToEdit, setClickToEdit] = useState(false);
    const [productImg, setProductImg] = useState(null);
    const [openDeclineModal, setOpenDeclineModal] = useState(false);
    const navigate = useNavigate();

    const handleCloseDeclineModal = () => {
        setOpenDeclineModal(false);
    };

    const handleSubmit=()=>{
        setIsSubmit(true);
        setOpenDeclineModal(true);
    }

    const handleModalClick=()=>{
        setIsSubmit(false);
        setOpenDeclineModal(false);
    }
    return (
        <div className="view_product">
            <div className="top_title">
                <div className="navigation_left" onClick={() => navigate(`/${role}`)}>
                    <span>Back to Dashboard/</span>
                    <span>View Product</span>
                </div>
                <div className="navigation_right">
                    <span>Next</span>
                    <span>/</span>
                    <span>Previous</span>
                </div>
            </div>
            <div className="product_intro">
                <div className="title">
                    <div className="left">
                        {clickToEdit ? (
                            <Input
                                name="title"
                                onChange={(e) => setEdit(e.target.value)}
                                value={edit}
                                placeholder="Item Title"
                            />
                        ) : (
                            edit ? <span>{edit}</span> : <span>Fit Jumpsuit</span> 
                            
                        )}{" "}
                        <BiEditAlt onClick={() => setClickToEdit(!clickToEdit)} style={{cursor:"pointer"}}/>
                    </div>

                    <div className="btns">
                        <IconButton
                            title="Cancel"
                            bg="#fff"
                            color="#35383F"
                            outline="1px solid black"
                            style={{ width: "168px" }}
                            
                        />
                        <IconButton title="Save Edit" style={{ width: "168px" }}
                            onClick={handleSubmit}/>
                    </div>
                </div>
                <div className="product_top_action">
                    <img src={productBg} alt="" />
                    <div className="add_more_images"><AddMoreImages file={productImg} setFile={setProductImg}/></div>
                </div>
            </div>
            <div className="product_description">
                <div className="title">
                    <span>Description</span>
                <BiEditAlt onClick={() => setIsDesc(!iSDesc)} style={{cursor:"pointer"}}/>
                </div>
                <div className="detail">
                    {iSDesc ? <Input
                                name="desc"
                                onChange={(e) => setDesc(e.target.value)}
                                value={desc}
                                placeholder="Description"
                            /> : desc ? desc :<div>Lorem ipsum dolor sit amet consectetur. Porta viverra eget lorem amet in semper
                    vitae volutpat. Tempus faucibus consequat urna et erat vel feugiat scelerisque
                    eu.sit amet consectetur. Porta viverra eget lorem amet in semper vitae volutpat.
                    Tempus faucibus consequat urna et erat vel feugiat scelerisque eu.</div>}
                </div>
                <StockCounter instock={12} shownInstock isProductPage />
                <div className="amount_container">
                <div className="amount">
                    {
                        isAmount ? <Input
                        name="desc"
                        onChange={(e) => setAmount(e.target.value)}
                        value={amount}
                        placeholder="amount"
                    /> : amount ? <span>&#8358;{formatAmount(amount)}</span> : <span>&#8358;{formatAmount(cost)}</span>
                    }
                    </div>
                <BiEditAlt onClick={() => setIsAmount(!isAmount)} style={{cursor:"pointer"}}/>
                </div>
            </div>
            <div className="product_amount_rating">
                <Rating value={5} readOnly size="small" />
                <div className="msg">View all Reviews (12)</div>
            </div>
            <div className="product_similar_items">
                <SimilarItems title="Similar Items" />
            </div>
            <RegModal 
                open={openDeclineModal}
                onClose={handleCloseDeclineModal}
                onClick={handleModalClick}
                title="Successfully Updated"
                text="You have updated your product details!"
            />
        </div>
    );
};

export default EditProduct;
