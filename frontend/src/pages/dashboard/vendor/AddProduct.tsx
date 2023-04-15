import React, { useState, useEffect } from "react";
import "./addproduct.scss";
import CustomAutoComplete from "../../../components/autocomplete";
import { BsCart3, BsTags } from "react-icons/bs";
import { TbTextResize } from "react-icons/tb";
import {
    dashboardOptions,
    packageSize,
    ColorData,
    tagsData
} from "../../../assets/JsonData/itemOptions";
import Input from "../../../components/form";
import docImg from "../../../assets/images/doc.png";
import ep_price_tag from "../../../assets/images/ep_price-tag.png";
import discount_img from "../../../assets/images/discount_img.png";
import inventoryImg from "../../../assets/images/activity_img.png";
import edit_note from "../../../assets/images/edit_note.png";
import AddNewItemBtn from "../../../components/add_new_item_btn";
import UploadBox from "../../../components/uploaddocs/uploadBox";
import RenderImg from "../../../components/renderImg";
import { CgNotes } from "react-icons/cg";
import Button from "../../../components/buttons";
import AddMoreImages from "../../../components/uploaddocs/AddMoreImages";
import { useFormik } from "formik";
import { AddProductsSchema } from "../../../shema/updateProfileSchema";
import { variants } from '../../../assets/JsonData/itemOptions';
import RegModal from "../../../components/modals/regmodal";
import { useNavigate } from "react-router-dom";


const AddProduct = () => {

    const navigate = useNavigate()

    
    const [productsImg, setProductsImg] = useState<any>(null);

    const [submitButtonBackground, setSubmitButtonBackground] = useState(false);

    const { values, errors, touched, isSubmitting, handleBlur, handleChange, handleSubmit } =
    useFormik({
        initialValues: {
            productName: "",
            description: "",
            category: "",
            tags: [],
            variants: [],
            colors: [],
            packageSize: "",
            otherInfo: "",
            setPrice:"",
            setInventory:"",
            discount:"",
            priceOffdiscount:""
        },
        validationSchema: AddProductsSchema,
        onSubmit: (values, actions) => {
            if(values.productName && values.description && values.category && values.tags.length > 0 && values.variants.length > 0 && values.colors.length > 0 && values.packageSize 
                && values.setPrice && values.setInventory && values.discount && values.priceOffdiscount && productsImg){
                    setSubmitButtonBackground(true)  
                setOpenModal(true);
                console.log("Product Added");
            }else{
                setSubmitButtonBackground(true)
            }
          
        }
    });


    useEffect(() => {
      if ([...Object.keys(errors)].length > 0) {
        setSubmitButtonBackground(true);
      } else {
        setSubmitButtonBackground(false);
      }
    }, [errors]);

    const [openModal, setOpenModal] = useState(false);

    const handleClose = () => setOpenModal(false);


    return (
        <div className="add_product_container">
            <div className="add_product_title">Add Product</div>
            <form onSubmit={handleSubmit}>
            <div className="add_product_step_one">
                <div className="step_one_title">Step 1 - Provide product imformation</div>
                <div className="step_one_form_container">
                    <div className="step_one_form">
                        <div className="left">
                            <CustomAutoComplete
                                icon={<BsCart3 color="#9E9E9E" />}
                                options={dashboardOptions}
                                valueSingle={values.category}
                                handleChange={handleChange}
                                name="category"
                                helperText={errors.category}
                            />
                        </div>
                        <div className="right">
                            <Input
                                name={"productName"}
                                startIcon={docImg}
                                placeholder="Product Name"
                                value={values.productName}
                                onChange={handleChange}
                                onBlur={handleBlur}
                                error={errors.productName && touched.productName ? true : false}
                        helperText={
                            errors.productName && touched.productName ? errors.productName : null
                        }                            />
                        </div>
                    </div>
                    <div className="step_one_form">
                        <div className="left">
                            <Input
                                startIcon={edit_note}
                                placeholder="Description"
                                value={values.description}
                                onChange={handleChange}
                                name="description"
                                onBlur={handleBlur}
                                error={errors.description && touched.description ? true : false}
                        helperText={
                            errors.description && touched.description ? errors.description : null
                        }
                            />
                        </div>
                        <div className="right">
                            <CustomAutoComplete
                                icon={<BsTags color="#9E9E9E" />}
                                options={tagsData}
                                valueMultiple={values.tags}
                                handleChangeMultiple={handleChange}
                                multi
                                name="tags"
                                helperText={errors.tags && "Pick at least 1 tag"}
                            />
                        </div>
                    </div>
                    <div className="step_one_form">
                        <div className="left">
                            <CustomAutoComplete
                                icon={<TbTextResize color="#9E9E9E" />}
                                options={packageSize}
                                valueSingle={values.packageSize}
                                handleChange={handleChange}
                                name="packageSize"
                                helperText={errors.packageSize}
                            />
                        </div>
                        <div className="right">
                            <CustomAutoComplete
                                icon={<CgNotes color="#9E9E9E" />}
                                options={variants}
                                valueMultiple={values.variants}
                                handleChangeMultiple={handleChange}
                                multi
                                name="variants"
                                helperText={errors.variants && "Pick at least 1 variants"}
                            />
                        </div>
                    </div>
                    <div className="step_one_form">
                        <div className="left">
                        <CustomAutoComplete
                                icon={<CgNotes color="#9E9E9E" />}
                                options={ColorData}
                                valueMultiple={values.colors}
                                handleChangeMultiple={handleChange}
                                multi
                                name="colors"
                                helperText={errors.colors && "Pick at least 1 variants"}
                            />
                        </div>
                        <div className="right">
                            <Input
                                startIcon={docImg}
                                placeholder="Other info"
                                value={values.otherInfo}
                                onChange={handleChange}
                                name="otherInfo"
                                onBlur={handleBlur}
                                error={errors.otherInfo && touched.otherInfo ? true : false}
                        helperText={
                            errors.otherInfo && touched.otherInfo ? errors.otherInfo : null
                        }
                            />
                        </div>
                    </div>
                </div>
                <div className="add_new_property">
                    <AddNewItemBtn title="Add Additional property" hasBg />
                </div>
            </div>
            <div className="add_product_step_two">
                <div className="step_two_title">Step 2 - Upload Images</div>
                <div className="add_product_upload">
                    <div className="upload">
                        {productsImg ? (
                            <RenderImg file={productsImg} setFile={setProductsImg} />
                        ) : (
                            <UploadBox setFile={setProductsImg} file={productsImg} multi />
                        )}
                    </div>
                </div>
            </div>
            <AddMoreImages setFile={setProductsImg} file={productsImg}/>
            <div className="add_product_step_three">
                <div className="step_two_title">Step 3 - Price, Discount & Inventory</div>
                <div className="step_three_form_container">
                    <div className="step_one_form">
                        <div className="left">
                        <Input
                                name={"setPrice"}
                                startIcon={ep_price_tag}
                                placeholder="Set Price*"
                                value={values.setPrice}
                                onChange={handleChange}
                                onBlur={handleBlur}
                                error={errors.setPrice && touched.setPrice ? true : false}
                        helperText={
                            errors.setPrice && touched.setPrice ? errors.setPrice : null
                        }
                            />
                        </div>
                        <div className="right">
                            <Input
                                name={"setInventory"}
                                startIcon={inventoryImg}
                                placeholder="Set Inventory*"
                                value={values.setInventory}
                                onChange={handleChange}
                                onBlur={handleBlur}
                                error={errors.setInventory && touched.setInventory ? true : false}
                        helperText={
                            errors.setInventory && touched.setInventory ? errors.setInventory : null
                        }
                            />
                        </div>
                    </div>
                    <div className="step_one_form">
                        <div className="left">
                            <Input
                                startIcon={discount_img}
                                placeholder="Set % Discount"
                                value={values.discount}
                                onChange={handleChange}
                                name="discount"
                                onBlur={handleBlur}
                                error={errors.discount && touched.discount ? true : false}
                        helperText={
                            errors.discount && touched.discount ? errors.discount : null
                        }
                            />
                        </div>
                        <div className="right">
                        <Input
                                startIcon={ep_price_tag}
                                placeholder="Set Price Off Discount"
                                value={values.priceOffdiscount}
                                onChange={handleChange}
                                name="priceOffdiscount"
                                onBlur={handleBlur}
                                error={errors.priceOffdiscount && touched.priceOffdiscount ? true : false}
                        helperText={
                            errors.priceOffdiscount && touched.priceOffdiscount ? errors.priceOffdiscount : null
                        }
                            />
                        </div>
                    </div>
                </div>
                </div>

                <div className="add_product_submit">
                    <Button text="Post Item for Sale" variant="lg"  disabled={submitButtonBackground}  style={{fontSize:"16px", width:"250px"}} type="submit"/>
                </div>
                </form>
                <RegModal
                    open={openModal}
                    onClose={handleClose}
                    text="You have successfully, added a new product"
                    title="Added New Product"
                    onClick={()=>navigate("/vendor")}
                />
        </div>
    );
};

export default AddProduct;
