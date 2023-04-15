import { Avatar } from "@mui/material";
import React, { useState, useCallback } from "react";
import AlertBox from "../../components/helper/Alert";
import "./style.scss";
import Input from "./../../components/form/index";
import startIcon from "../../assets/images/profile.png";
import emailIcon from "../../assets/images/email.png";
import location from "../../assets/images/location.png";
import phone from "../../assets/images/phone-call.png";
import Button from "../../components/buttons";
import { updateDetailsSchema } from "../../shema/updateProfileSchema";
import { useFormik } from "formik";
import { useDropzone } from "react-dropzone";

export default function PersonalDetails() {
    const { values, errors, touched, isSubmitting, handleBlur, handleChange, handleSubmit } =
        useFormik({
            initialValues: {
                firstName: "",
                lastName: "",
                address: "",
                phoneNumber: "",
                email: ""
            },
            validationSchema: updateDetailsSchema,
            onSubmit: (values, actions) => {
                console.log("updated");
            }
        });
    const [profilePic, setProfilePic] = useState<any>(null);
    const onDrop = useCallback(
        (acceptedFile: any) => {
            setProfilePic(acceptedFile.map((file: any) => URL.createObjectURL(file)));
        },
        [setProfilePic]
    );

    const { getRootProps, getInputProps } = useDropzone({
        accept: {
            "image/jpeg": [".jpeg", ".png", ".pdf"]
        },
        onDrop,
        multiple: false
    });

    return (
        <div className="personal_deatils">
            <AlertBox
                type="info"
                text="Kindly update your account here and include the necessary documents required to start getting match as a vendor/logistics agent."
            />
            <div className="personal_details_upload_profile">
                <div {...getRootProps({ className: "avatar avatar-left" })}>
                    <Avatar
                        sx={{ width: "100px", height: "100px" }}
                        src={profilePic ? profilePic[0] : ""}
                    />
                    <input className="upload" {...getInputProps()} placeholder="Upload image" />
                </div>
                {!profilePic && <div className="upload-text"> Upload profile image</div>}
            </div>
            <form onSubmit={handleSubmit}>
                <div className="personal_details_input_item">
                    <Input
                        startIcon={startIcon}
                        value={values.firstName}
                        onBlur={handleBlur}
                        onChange={handleChange}
                        style={{ marginTop: "40px" }}
                        placeholder="First Name"
                        name="firstName"
                        error={errors.firstName && touched.firstName ? true : false}
                        helperText={errors.firstName && touched.firstName ? errors.firstName : null}
                    />
                </div>
                <div className="personal_details_input_item">
                    <Input
                        startIcon={startIcon}
                        style={{ marginTop: "40px" }}
                        placeholder="Last Name"
                        name="lastName"
                        value={values.lastName}
                        onBlur={handleBlur}
                        onChange={handleChange}
                        error={errors.lastName && touched.lastName ? true : false}
                        helperText={errors.lastName && touched.lastName ? errors.lastName : null}
                    />
                </div>
                <div className="personal_details_input_item">
                    <Input
                        startIcon={emailIcon}
                        style={{ marginTop: "40px" }}
                        placeholder="Email Address"
                        name="email"
                        type="email"
                        value={values.email}
                        onBlur={handleBlur}
                        onChange={handleChange}
                        error={errors.email && touched.email ? true : false}
                        helperText={errors.email && touched.email ? errors.email : null}
                    />
                </div>
                <div className="personal_details_input_item">
                    <Input
                        startIcon={location}
                        style={{ marginTop: "40px" }}
                        placeholder="Home Address"
                        name="address"
                        value={values.address}
                        onBlur={handleBlur}
                        onChange={handleChange}
                        error={errors.address && touched.address ? true : false}
                        helperText={errors.address && touched.address ? errors.address : null}
                    />
                </div>
                <div className="personal_details_input_item">
                    <Input
                        startIcon={phone}
                        style={{ marginTop: "40px" }}
                        placeholder="Phone Number"
                        name="phoneNumber"
                        type="text"
                        value={values.phoneNumber}
                        onBlur={handleBlur}
                        onChange={handleChange}
                        error={errors.phoneNumber && touched.phoneNumber ? true : false}
                        helperText={
                            errors.phoneNumber && touched.phoneNumber ? errors.phoneNumber : null
                        }
                    />
                </div>
                <Button text="Update Changes" type="submit" disabled={isSubmitting} />
            </form>
        </div>
    );
}
