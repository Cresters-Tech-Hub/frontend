import React, { useState } from "react";
import "./accountType.scss";
import doc from "../../assets/images/doc.png";
import { ActionMeta, components, ControlProps } from "react-select";
import { accountTypeOptions } from "../../utils/constants";
import Button from "./../buttons/index";
import CustomSelect, { OptionsProps } from "../helper/CustomSelect";
import Logo from "../logo";
import { Link, useLocation, useNavigate } from "react-router-dom";
import UserTypeRegistration from "../onboarding/userType/index";
import { Option } from "../../utils/constants/index";
import { useSelector, useDispatch } from "react-redux";
import { RootState } from "../../store";
import { setUserType } from "../../reducer/userTypeReducer";

interface AccountTypeProp {
    userType?: string;
    isLoginPage?: boolean;
}

export const GoBackToHome = () => {
    const navigate = useNavigate();
    return (
        <div className="go_back_home">
            <div>Please Select Account Type to register or login to your account</div>
            <div className="login_btns">
                <Button
                    text="Account Type"
                    style={{ width: "250px" }}
                    onClick={() => navigate("/auth")}
                />
                <Button
                    text="login"
                    style={{ width: "250px" }}
                    onClick={() => navigate("/auth/login")}
                />
            </div>
        </div>
    );
};

const Control = ({ children, ...props }: ControlProps<OptionsProps>) => {
    // @ts-ignore
    const style = { cursor: "pointer" };

    return (
        <components.Control {...props} className="select_control">
            <img src={doc} alt="" /> {children}
        </components.Control>
    );
};

const AccountType = ({ isLoginPage }: AccountTypeProp) => {
    const navigate = useNavigate();
    const location = useLocation();
    const [type, setType] = useState<string | undefined>("");
    const [error, setError] = useState(true);
    const typeState = useSelector((state: RootState) => state.userType.userType);
    const dispatch = useDispatch();

    const handleClick = (e: React.MouseEvent<HTMLButtonElement, MouseEvent>) => {
        e.preventDefault();
        if (type !== "") {
            dispatch(setUserType(type));
            navigate("/auth/create");
        }
    };

    const onChange = (option: Option | null, actionMeta: ActionMeta<Option>) => {
        setType(option?.value);
        setError(false);
    };

    if (location.pathname === "/auth/login" && isLoginPage) {
        return (
            <div className="accountType">
                <Logo isLoginpage={true} />
                <div className="main">
                    <UserTypeRegistration isLoginPage={true} />
                    <div className="link_to_register">
                        <span>Don't have an account yet?</span>
                        <Link to="/auth">Create Account</Link>
                    </div>
                </div>
            </div>
        );
    }

    return (
        <div className="accountType">
            <Logo regType={typeState} />
            <div className="main">
                {location.pathname === "/auth" ? (
                    <>
                        <CustomSelect
                            option={accountTypeOptions}
                            placeholder="Select user type"
                            closeMenuOnSelect={true}
                            isClearable={false}
                            onChange={onChange}
                            components={{ Control }}
                            className="select"
                        />
                        <Button
                            text="Continue"
                            style={{ width: "100%" }}
                            onClick={handleClick}
                            disabled={error}
                        />
                        <div className="link_to_login">
                            <span>Have an account?</span>
                            <Link to="/auth/login">Login</Link>
                        </div>
                    </>
                ) : typeState ? (
                    <UserTypeRegistration userType={typeState} />
                ) : (
                    <GoBackToHome />
                )}
            </div>
        </div>
    );
};

export default AccountType;
