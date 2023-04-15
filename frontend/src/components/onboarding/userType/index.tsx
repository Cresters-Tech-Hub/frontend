import React, { useState, useEffect } from "react";
import "./style.scss";
import startIcon from "../../../assets/images/usernameImg.png";
import passwordImg from "../../../assets/images/password.png";
import emailImg from "../../../assets/images/email.png";
import NotFound from "../../../pages/notfound/NotFound";
import Button from "./../../buttons/index";
import { Link, useNavigate, useLocation } from "react-router-dom";
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
import { authLogin, authRegister, getItemFromLocalStorage } from "../../../utils/auth";
import axios from 'axios';
import { ActionMeta, components, ControlProps } from "react-select";
import { Option, accountTypeOptions } from '../../../utils/constants/index';
import CustomSelect, { OptionsProps } from "../../helper/CustomSelect";
import { nigeriaStatesAndLgas } from "../../states";
import { getLgas } from '../../../utils/helper/index';
import { toast } from "react-toastify";



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
    const location = useLocation();
    const [hidePassword, setHidePassword] = useState(false);
    const [checkbox, setCheckbox] = useState(false);
    const [loginError, setLoginError] = useState(false);

    const typeState = useSelector((state: RootState) => state.userType.userType);
    const dispatch = useDispatch();

    const handleSubmit = async(values: Ivalue, actions: FormikHelpers<Ivalue>) => {
        const req = {
            cipherCode: values.password,
            emailAddress: values.email,
            firstName: "",
            lastName: "",
            location: `${city}, ${state}`,
            path: typeState,
            phoneNumber: "",
            role: typeState,
            username: values.username,
            validationUrl: ""
          }
        const postReq =  await authRegister(req);
        if(postReq) {
            setOpenModal(true);
            navigate("/auth/login", {state:"registered_successfull"})
        }else{
            console.log("error registering")
        }
    };
    const [type, setType] = useState<string | undefined>("");
    const [error, setError] = useState(true);
    const [city, setCity] = useState("Agege");
    const [state, setState] = useState("Lagos");

    const onChange = (option: Option | null, actionMeta: ActionMeta<Option>) => {
        setType(option?.value);
        setError(false);
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
        onSubmit: async(values, actions) => {
           
        await authLogin({
            userSecret: values.password,
            username: values.email
        })
       let data = getItemFromLocalStorage();
       
       if (data) {
        const userData =
            {
                id: data?.user_id,
                firstName: data?.first_name,
                lastName: data?.last_name,
                location: data?.user_location,
                email: data?.user_email,
                role: data?.roles[0],
                path:data?.user_path,
                username: data?.user_name

        }
        localStorage.setItem("user", JSON.stringify(userData));
         dispatch(
             setUserData({
                 name: data?.first_name,
                 firstName: data?.first_name,
                 location: data?.user_location,
                 role: data?.roles[0],
                 path:data?.user_path,
                 username: data?.user_name
             })
         );
         navigate("/dashboard");
     }

            // let user = projects.find(
            //     (v) => v.email === values.email.toLowerCase() && v.password === values.password
            // );
            // if (user) {
            //    // localStorage.setItem("user", JSON.stringify(user));
            //     dispatch(
            //         setUserData({
            //             name: user.firstName,
            //             firstName: user.lastName,
            //             location: user.location,
            //             role: user.role,
            //             path:user.path
            //         })
            //     );
            //     navigate("/dashboard");
            // }
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

    const Control = ({ children, ...props }: ControlProps<OptionsProps>) => {

        return (
            <components.Control {...props} className="select_control">
                {children}
            </components.Control>
        );
    };

    useEffect(() => {
        const options = {
            autoClose: 1000,
            type: toast.TYPE.SUCCESS,
            hideProgressBar: true,
            position: toast.POSITION.TOP_CENTER,
            pauseOnHover: true,
            progress: 0.2,
            style: {
              color: '#444042',
              background: '#F2FDF5',
              border: '1px solid #A2DBBD',
              borderRadius:"12px",
              fontFamily:"Work Sans, sans-serif",
              fontSize:"13px"
            }
        }
    
     const notify = () => toast('Registration successful, Check your email to verify your account, before loging in', options)
      location.state === "registered_successfull" && notify()
    }, [location.state])

    if (isLoginPage) {
        return (
            <form onSubmit={login} autoComplete="off" className="login_form">
                <div className="userType_username">
                    <img src={startIcon} alt="" />
                    <input
                        type="text"
                        name="email"
                        placeholder="Username"
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
                     <div className="add_address_input">
                                <select placeholder="State" value={state} onChange={(e)=>setState(e.target.value)}>
                                    {nigeriaStatesAndLgas.map(({ state }, i) => (
                                        <option key={i}>{state}</option>
                                    ))}
                                </select>
                                <select placeholder="City" value={city} onChange={(e)=>setCity(e.target.value)}>
                                    {getLgas(state).map((lgas, i) => {
                                        return lgas.map((lg, id) => <option key={id}>{lg}</option>);
                                    })}
                                </select>
                            </div>
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
