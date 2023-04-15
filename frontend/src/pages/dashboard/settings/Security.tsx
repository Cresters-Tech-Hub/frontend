import React, { useState, useEffect } from "react";
import "./security.scss";
import { useFormik } from "formik";
import { vendorSecuritySchema } from "../../../shema/updateProfileSchema";
import Input from "../../../components/form";
import Button from "../../../components/buttons";
import passwordImg from "../../../assets/images/password.png";


const Security = () => {
  
  const [submitButtonBackground, setSubmitButtonBackground] = useState(false);

    const { values, errors, touched, isSubmitting, handleBlur, handleChange, handleSubmit } =
        useFormik({
            initialValues: {
                password: "",
                newPassword: ""
            },
            validationSchema: vendorSecuritySchema,
            onSubmit: (values, actions) => {
               if(values.newPassword.length < 6 && values.password.length < 6){
                setSubmitButtonBackground(true);
                actions.setErrors({newPassword:"incorrect Password", password:"incorrect Password"})
                console.log("please check the password and try again")
               }else{
                console.log("password updated")
               }
            }
        });

   // const [hidepassword, setHidepassword] = useState(true);

    useEffect(() => {
        if ([...Object.keys(errors)].length > 0) {
            setSubmitButtonBackground(true);
        } else {
            setSubmitButtonBackground(false);
        }
    }, [errors]);

    return (
        <div className="settings_security">
            <div className="account_title">Change Passowrd</div>
            <form className="account_form" onSubmit={handleSubmit}>
                <div className="account_input">
                    <Input
                        startIcon={passwordImg}
                        value={values.password}
                        onBlur={handleBlur}
                        onChange={handleChange}
                        type="password"
                        placeholder="Current Password"
                        name="password"
                        error={errors.password && touched.password ? true : false}
                        helperText={errors.password && touched.password ? errors.password : null}
                    />
                </div>
                <div className="account_input">
                    <Input
                        startIcon={passwordImg}
                        value={values.newPassword}
                        type="password"
                        onBlur={handleBlur}
                        onChange={handleChange}
                        placeholder="New password"
                        name="newPassword"
                        error={errors.newPassword && touched.newPassword ? true : false}
                        helperText={
                            errors.newPassword && touched.newPassword ? errors.newPassword : null
                        }
                    />
                </div>
                <div className="account_input btn">
                    <Button
                        text="Save Changes"
                        variant="lg"
                        type="submit"
                        disabled={submitButtonBackground}
                        style={{ fontSize: "16px" }}
                    />
                </div>
            </form>
        </div>
    );
};

export default Security;
