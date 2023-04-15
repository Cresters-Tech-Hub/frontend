import React, {useState, useEffect} from "react";
import "./account.scss";
import { useFormik } from "formik";
import { updateAccountSchema } from "../../../shema/updateProfileSchema";
import Input from "../../../components/form";
import { dashboardOptions } from "../../../assets/JsonData/itemOptions";
import CustomAutoComplete from "../../../components/autocomplete";
import discountImg from "../../../assets/images/discount_img.png"
import ep_price_tag from "../../../assets/images/ep_price-tag.png"
import UploadBox from "../../../components/uploaddocs/uploadBox";
import Button from "../../../components/buttons";
import RenderImg from "../../../components/renderImg";
import AddMoreImages from "../../../components/uploaddocs/AddMoreImages";


const Account = () => {

    const [pagebanner, setPagebanner] = useState(null);
    const [promobanner, setPromobanner] = useState(null);

    const { values, errors, touched, isSubmitting, handleBlur, handleChange, handleSubmit } =
        useFormik({
            initialValues: {
                name: "",
                description: "",
                category: "",
                discount: "",
                priceOffdiscount: ""
            },
            validationSchema: updateAccountSchema,
            onSubmit: (values, actions) => {
                console.log("updated");
            }
        });
        const [submitButtonBackground, setSubmitButtonBackground] = useState(false);

        useEffect(() => {
          if ([...Object.keys(errors)].length > 0) {
            setSubmitButtonBackground(true);
          } else {
            setSubmitButtonBackground(false);
          }
        }, [errors]);
    return (
        <div className="account">
            <div className="account_title">Store Settings</div>
            <form className="account_form" onSubmit={handleSubmit}>
                <div className="account_input">
                    <Input
                        value={values.name}
                        onBlur={handleBlur}
                        onChange={handleChange}
                        placeholder="Online Store Name"
                        name="name"
                        error={errors.name && touched.name ? true : false}
                        helperText={errors.name && touched.name ? errors.name : null}
                    />
                </div>
                <div className="account_input">
                    <Input
                        value={values.description}
                        onBlur={handleBlur}
                        onChange={handleChange}
                        placeholder="Store Description"
                        name="description"
                        error={errors.description && touched.description ? true : false}
                        helperText={
                            errors.description && touched.description ? errors.description : null
                        }
                    />
                </div>
                <div className="account_input">
                    <CustomAutoComplete
                        options={dashboardOptions}
                        valueSingle={values.category}
                        handleChange={handleChange}
                        name="category"
                        helperText={errors.category}
                    />
                </div>
                <div className="account_input_multi">
                    <Input
                        style={{width:"50%"}}
                        startIcon={discountImg}
                        value={values.discount}
                        onBlur={handleBlur}
                        onChange={handleChange}
                        placeholder="Discount"
                        name="discount"
                        error={errors.discount && touched.discount ? true : false}
                        helperText={
                            errors.discount && touched.discount ? errors.discount : null
                        }
                    />
                    <Input
                    startIcon={ep_price_tag}
                    style={{width:"50%"}}
                        value={values.priceOffdiscount}
                        onBlur={handleBlur}
                        onChange={handleChange}
                        placeholder="Price off discount"
                        name="priceOffdiscount"
                        error={errors.priceOffdiscount && touched.priceOffdiscount ? true : false}
                        helperText={
                            errors.priceOffdiscount && touched.priceOffdiscount ? errors.priceOffdiscount : null
                        }
                    />
                </div>
                <div className="account_input">
                {pagebanner ? (
                            <RenderImg file={pagebanner} setFile={setPagebanner} />
                        ) : (
                            <UploadBox setFile={setPagebanner} file={pagebanner} text="Account page banner" />
                        )}
                        {pagebanner &&  <AddMoreImages setFile={setPagebanner} file={pagebanner} text="change account banner"/>}
                </div>
                <div className="account_input">
                {promobanner ? (
                            <RenderImg file={promobanner} setFile={setPromobanner} />
                        ) : (
                            <UploadBox setFile={setPromobanner} file={promobanner}  text="Promotions banner"/>
                        )}
                         {promobanner &&  <AddMoreImages setFile={setPromobanner} file={promobanner} text="change promo banner"/>}
                </div>
                <div className="account_input btn">
                   <Button text="Save Changes" variant="lg" type="submit" disabled={submitButtonBackground} style={{fontSize:"16px"}}/>
                </div>
            </form>
        </div>
    );
};

export default Account;
