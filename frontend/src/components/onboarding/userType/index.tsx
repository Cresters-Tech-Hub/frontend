import React, { useState } from "react";
import "./style.scss";
import startIcon from "../../../assets/images/usernameImg.png";
import passwordImg from "../../../assets/images/password.png";
import emailImg from "../../../assets/images/email.png";
import NotFound from "../../../pages/notfound/NotFound";
import Button from "./../../buttons/index";
import { Link, useNavigate } from "react-router-dom";
import { AiOutlineEyeInvisible, AiOutlineEye } from "react-icons/ai";
import { useSelector, useDispatch } from "react-redux";
import { RootState } from "../../../store";
import RegModal from "../../modals/regmodal";
import { useFormik, FormikHelpers } from "formik";
import { loginSchema } from "../../../shema/loginSchema";
import { registerSchema } from "../../../shema/registerSchema";
import { Checkbox } from "@mui/material";
import { projects } from "../../../assets/JsonData/auth";
import { setUserData } from "../../../reducer/userReducer";

interface UserTypeRegistrationProp {
    userType?: string;
    isLoginPage?: boolean;
}

interface Ivalue {
    email: string;
    username: string;
    password: string;
    termsAndConditions: boolean;
}

export default function UserTypeRegistration({ userType, isLoginPage }: UserTypeRegistrationProp) {
    const navigate = useNavigate();
    const [hidePassword, setHidePassword] = useState(false);
    const [checkbox, setCheckbox] = useState(false);
    const [loginError, setLoginError] = useState(false);

    const typeState = useSelector((state: RootState) => state.userType.userType);
    const dispatch = useDispatch();

    const handleSubmit = (values: Ivalue, actions: FormikHelpers<Ivalue>) => {
        console.log("registration submitted");
        setOpenModal(true);
    };
    //register
    const {
        values: registerValues,
        handleBlur: registerBlur,
        handleSubmit: registerSubmit,
        handleChange: registerChange,
        errors: registerErrors,
        touched: registerTouched,
        isSubmitting: registerSubmitting
    } = useFormik({
        initialValues: {
            email: "",
            password: "",
            username: "",
            termsAndConditions: false
        },
        validationSchema: registerSchema,
        onSubmit: handleSubmit
    });

    //for login
    const {
        values,
        handleSubmit: login,
        errors,
        isSubmitting,
        touched,
        handleBlur: blur,
        handleChange: change
    } = useFormik({
        initialValues: {
            email: "",
            password: ""
        },
        validationSchema: loginSchema,
        onSubmit: (values, actions) => {
            let user = projects.find(
                (v) => v.email === values.email.toLowerCase() && v.password === values.password
            );
            if (user) {
                localStorage.setItem("user", JSON.stringify(user));
                dispatch(
                    setUserData({
                        name: user.firstName,
                        firstName: user.lastName,
                        location: user.location,
                        role: user.role,
                        path:user.path
                    })
                );
                navigate("/dashboard");
            }
            actions.setSubmitting(false);
            setLoginError(true);
            setOpenModal(true);
        }
    });

    const [openModal, setOpenModal] = useState(false);

    const handleHidePassword = () => {
        setHidePassword(!hidePassword);
    };

    const handleClose = () => setOpenModal(false);

    const handleCheckbox = () => {
        setCheckbox(!checkbox);
    };

    if (isLoginPage) {
        return (
            <form onSubmit={login} autoComplete="off" className="login_form">
                <div className="userType_username">
                    <img src={startIcon} alt="" />
                    <input
                        type="text"
                        name="email"
                        placeholder="Email"
                        onChange={change}
                        onBlur={blur}
                        value={values.email}
                        className={errors.email && touched.email ? "inputError" : ""}
                    />
                </div>
                <div className="error_span">{errors.email && touched.email && errors.email}</div>

                <div className="userType_username">
                    <img src={passwordImg} alt="" className="start" />
                    <input
                        type={hidePassword ? "text" : "password"}
                        placeholder="Password"
                        name="password"
                        onChange={change}
                        onBlur={blur}
                        value={values.password}
                        className={errors.password && touched.password ? "inputError" : ""}
                    />
                    <i>
                        {hidePassword ? (
                            <AiOutlineEye onClick={handleHidePassword} />
                        ) : (
                            <AiOutlineEyeInvisible onClick={handleHidePassword} />
                        )}
                    </i>
                </div>
                <div className="error_span">
                    {errors.password && touched.password && errors.password}
                </div>
                <div className="forgot_pwd">
                    <Link to="#">Forgot password?</Link>
                </div>
                <Button
                    text="Continue"
                    type="submit"
                    style={{ width: "100%" }}
                    disabled={isSubmitting}
                    onClick={() => null}
                />

                <RegModal
                    open={openModal}
                    onClose={handleClose}
                    text="Email or Password is invalid, check and try again"
                    title="Login Error"
                    error={loginError}
                    location="auth"
                />
            </form>
        );
    }

    switch (userType) {
        case "USER":
            return (
                <form onSubmit={registerSubmit} autoComplete="off" className="reg_form">
                    <div className="userType_username">
                        <img src={startIcon} alt="" />
                        <input
                            type="text"
                            name="username"
                            placeholder="User Name"
                            value={registerValues.username}
                            onChange={registerChange}
                            onBlur={registerBlur}
                            className={
                                registerErrors.username && registerTouched.username
                                    ? "inputError"
                                    : ""
                            }
                        />
                    </div>
                    <div className="error_span">
                        {registerErrors.username &&
                            registerTouched.username &&
                            registerErrors.username}
                    </div>
                    <div className="userType_username">
                        <img src={emailImg} alt="" width="16.62px" height="16.67px" />
                        <input
                            type="text"
                            placeholder="Email Address"
                            name="email"
                            value={registerValues.email}
                            onChange={registerChange}
                            onBlur={registerBlur}
                            className={
                                registerErrors.email && registerTouched.email ? "inputError" : ""
                            }
                        />
                    </div>
                    <div className="error_span">
                        {registerErrors.email && registerTouched.email && registerErrors.email}
                    </div>
                    <div className="userType_username">
                        <img src={passwordImg} alt="" className="start" />
                        <input
                            type={hidePassword ? "text" : "password"}
                            placeholder="Password"
                            name="password"
                            value={registerValues.password}
                            onChange={registerChange}
                            onBlur={registerBlur}
                            className={
                                registerErrors.password && registerTouched.password
                                    ? "inputError"
                                    : ""
                            }
                        />
                        <i>
                            {hidePassword ? (
                                <AiOutlineEye onClick={handleHidePassword} />
                            ) : (
                                <AiOutlineEyeInvisible onClick={handleHidePassword} />
                            )}
                        </i>
                    </div>
                    <div className="error_span">
                        {registerErrors.password &&
                            registerTouched.password &&
                            registerErrors.password}
                    </div>
                    <div className="userType_username_checkbox">
                        <Checkbox
                            onClick={handleCheckbox}
                            size="medium"
                            color="success"
                            name="termsAndConditions"
                            value={registerValues.termsAndConditions}
                            onBlur={registerBlur}
                            onChange={registerChange}
                        />
                        <p>I agree to the terms of use & privacy policy</p>
                    </div>
                    <div className="error_span">
                        {registerErrors.termsAndConditions &&
                            registerTouched.termsAndConditions &&
                            registerErrors.termsAndConditions}
                    </div>
                    <Button
                        text="Continue"
                        type="submit"
                        style={{ width: "100%" }}
                        disabled={registerSubmitting}
                    />
                    <RegModal
                        open={openModal}
                        onClose={handleClose}
                        text="Account succesfully created"
                        title="Success"
                        location="successfulreg"
                    />
                </form>
            );
        case "VENDOR":
            return (
                <form onSubmit={registerSubmit} autoComplete="off" className="reg_form">
                    <div className="userType_username">
                        <img src={startIcon} alt="" />
                        <input
                            type="text"
                            name="username"
                            placeholder="User Name"
                            value={registerValues.username}
                            onChange={registerChange}
                            onBlur={registerBlur}
                            className={
                                registerErrors.username && registerTouched.username
                                    ? "inputError"
                                    : ""
                            }
                        />
                    </div>
                    <div className="error_span">
                        {registerErrors.username &&
                            registerTouched.username &&
                            registerErrors.username}
                    </div>
                    <div className="userType_username">
                        <img src={emailImg} alt="" width="16.62px" height="16.67px" />
                        <input
                            type="text"
                            placeholder="Email Address"
                            name="email"
                            value={registerValues.email}
                            onChange={registerChange}
                            onBlur={registerBlur}
                            className={
                                registerErrors.email && registerTouched.email ? "inputError" : ""
                            }
                        />
                    </div>
                    <div className="error_span">
                        {registerErrors.email && registerTouched.email && registerErrors.email}
                    </div>
                    <div className="userType_username">
                        <img src={passwordImg} alt="" className="start" />
                        <input
                            type={hidePassword ? "text" : "password"}
                            placeholder="Password"
                            name="password"
                            value={registerValues.password}
                            onChange={registerChange}
                            onBlur={registerBlur}
                            className={
                                registerErrors.password && registerTouched.password
                                    ? "inputError"
                                    : ""
                            }
                        />
                        <i>
                            {hidePassword ? (
                                <AiOutlineEye onClick={handleHidePassword} />
                            ) : (
                                <AiOutlineEyeInvisible onClick={handleHidePassword} />
                            )}
                        </i>
                    </div>
                    <div className="error_span">
                        {registerErrors.password &&
                            registerTouched.password &&
                            registerErrors.password}
                    </div>
                    <div className="userType_username_checkbox">
                        <Checkbox
                            onClick={handleCheckbox}
                            size="medium"
                            color="success"
                            name="termsAndConditions"
                            value={registerValues.termsAndConditions}
                            onBlur={registerBlur}
                            onChange={registerChange}
                        />
                        <p>I agree to the terms of use & privacy policy</p>
                    </div>
                    <div className="error_span">
                        {registerErrors.termsAndConditions &&
                            registerTouched.termsAndConditions &&
                            registerErrors.termsAndConditions}
                    </div>
                    <Button
                        text="Continue"
                        type="submit"
                        style={{ width: "100%" }}
                        disabled={registerSubmitting}
                    />
                    <RegModal
                        open={openModal}
                        onClose={handleClose}
                        text="Account succesfully created"
                        title="Success"
                        location="successfulreg"
                    />
                </form>
            );
        case "DELIVERY AGENT":
            return (
                <form onSubmit={registerSubmit} autoComplete="off" className="reg_form">
                    <div className="userType_username">
                        <img src={startIcon} alt="" />
                        <input
                            type="text"
                            name="username"
                            placeholder="User Name"
                            value={registerValues.username}
                            onChange={registerChange}
                            onBlur={registerBlur}
                            className={
                                registerErrors.username && registerTouched.username
                                    ? "inputError"
                                    : ""
                            }
                        />
                    </div>
                    <div className="error_span">
                        {registerErrors.username &&
                            registerTouched.username &&
                            registerErrors.username}
                    </div>
                    <div className="userType_username">
                        <img src={emailImg} alt="" width="16.62px" height="16.67px" />
                        <input
                            type="text"
                            placeholder="Email Address"
                            name="email"
                            value={registerValues.email}
                            onChange={registerChange}
                            onBlur={registerBlur}
                            className={
                                registerErrors.email && registerTouched.email ? "inputError" : ""
                            }
                        />
                    </div>
                    <div className="error_span">
                        {registerErrors.email && registerTouched.email && registerErrors.email}
                    </div>
                    <div className="userType_username">
                        <img src={passwordImg} alt="" className="start" />
                        <input
                            type={hidePassword ? "text" : "password"}
                            placeholder="Password"
                            name="password"
                            value={registerValues.password}
                            onChange={registerChange}
                            onBlur={registerBlur}
                            className={
                                registerErrors.password && registerTouched.password
                                    ? "inputError"
                                    : ""
                            }
                        />
                        <i>
                            {hidePassword ? (
                                <AiOutlineEye onClick={handleHidePassword} />
                            ) : (
                                <AiOutlineEyeInvisible onClick={handleHidePassword} />
                            )}
                        </i>
                    </div>
                    <div className="error_span">
                        {registerErrors.password &&
                            registerTouched.password &&
                            registerErrors.password}
                    </div>
                    <div className="userType_username_checkbox">
                        <Checkbox
                            onClick={handleCheckbox}
                            size="medium"
                            color="success"
                            name="termsAndConditions"
                            value={registerValues.termsAndConditions}
                            onBlur={registerBlur}
                            onChange={registerChange}
                        />
                        <p>I agree to the terms of use & privacy policy</p>
                    </div>
                    <div className="error_span">
                        {registerErrors.termsAndConditions &&
                            registerTouched.termsAndConditions &&
                            registerErrors.termsAndConditions}
                    </div>
                    <Button
                        text="Continue"
                        type="submit"
                        style={{ width: "100%" }}
                        disabled={registerSubmitting}
                    />
                    <RegModal
                        open={openModal}
                        onClose={handleClose}
                        text="Account succesfully created"
                        title="Success"
                        location="successfulreg"
                    />
                </form>
            );

        default:
            return <NotFound />;
    }
}
