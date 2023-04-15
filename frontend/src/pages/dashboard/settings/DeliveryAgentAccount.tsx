import React, {useState, useEffect} from "react";
import "./deliveryagentaccount.scss"
import { useFormik } from "formik";
import { updateDeliveryAgentAccountSchema } from "../../../shema/updateProfileSchema";
import Input from "../../../components/form";
import { vehicleType, vehicleColor } from "../../../assets/JsonData/itemOptions";
import CustomAutoComplete from "../../../components/autocomplete";
import ep_price_tag from "../../../assets/images/ep_price-tag.png"
import Button from "../../../components/buttons";



const DeliveryAgentAccount = () => {

    const { values, errors, touched, isSubmitting, handleBlur, handleChange, handleSubmit } =
        useFormik({
            initialValues: {
                vehicleType: "",
                vehicleModel: "",
                vehicleColor: "",
                vehiclePlateNum: "",
                workingHours: ""
            },
            validationSchema: updateDeliveryAgentAccountSchema,
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
            <div className="account_title">Account Settings</div>
            <form className="account_form" onSubmit={handleSubmit}>
                <div className="account_input">
                <CustomAutoComplete
                        options={vehicleType}
                        valueSingle={values.vehicleType}
                        handleChange={handleChange}
                        name="vehicleType"
                        helperText={errors.vehicleType}
                    />
                </div>
                <div className="account_input">
                    <Input
                        value={values.vehicleModel}
                        onBlur={handleBlur}
                        onChange={handleChange}
                        placeholder="Vehicle model"
                        name="vehicleModel"
                        error={errors.vehicleModel && touched.vehicleModel ? true : false}
                        helperText={
                            errors.vehicleModel && touched.vehicleModel ? errors.vehicleModel : null
                        }
                    />
                </div>
                <div className="account_input">
                <CustomAutoComplete
                        options={vehicleColor}
                        valueSingle={values.vehicleColor}
                        handleChange={handleChange}
                        name="vehicleColor"
                        helperText={errors.vehicleColor}
                    />
                </div>
                <div className="account_input_multi">
                    <Input
                        style={{width:"50%"}}
                        value={values.vehiclePlateNum}
                        onBlur={handleBlur}
                        onChange={handleChange}
                        placeholder="Vehicle plate number"
                        name="vehiclePlateNum"
                        error={errors.vehiclePlateNum && touched.vehiclePlateNum ? true : false}
                        helperText={
                            errors.vehiclePlateNum && touched.vehiclePlateNum ? errors.vehiclePlateNum : null
                        }
                    />
                    <Input
                    startIcon={ep_price_tag}
                    style={{width:"50%"}}
                        value={values.workingHours}
                        onBlur={handleBlur}
                        onChange={handleChange}
                        placeholder="Work hours"
                        name="workingHours"
                        error={errors.workingHours && touched.workingHours ? true : false}
                        helperText={
                            errors.workingHours && touched.workingHours ? errors.workingHours : null
                        }
                    />
                </div>
                <div className="account_input btn">
                   <Button text="Save Changes" variant="lg" type="submit" disabled={submitButtonBackground} style={{fontSize:"16px"}}/>
                </div>
            </form>
        </div>
    );
};

export default DeliveryAgentAccount;

