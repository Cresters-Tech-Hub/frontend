import React from "react";
import "./rightsidebar.scss";
import Button from "../../../components/buttons";
import { useNavigate } from "react-router-dom";
import { useSelector } from "react-redux";
import { RootState } from "../../../store";
import { Badge } from "@mui/material";
import { IoIosNotifications } from "react-icons/io";
import Avatar from "@mui/material/Avatar";
import { BiCaretDownCircle } from "react-icons/bi";

interface IRightSidebar {
    component?: React.ReactNode;
}

const RightSidebar = ({ component }: IRightSidebar) => {
    const navigate = useNavigate();
    const {
        user: {
            data: { name, role }
        }
    } = useSelector((state: RootState) => state);

    return (
        <div className="rightSidebar">
            {!name ? (
                <div className="rightsidebar_auth">
                    <button
                        onClick={() => navigate("/auth")}
                        className="create_btn"
                    >Create Account</button>
                    <button
                        onClick={() => navigate("/auth/login")}
                        className="login"
                    >Login</button>
                </div>
            ) : (
                <div className="rightsidebar_login_user">
                    <div>
                        <Badge color="secondary" variant="dot" invisible={false}>
                            <IoIosNotifications fontSize="30px" />
                        </Badge>
                    </div>
                    <div>
                        <Avatar>{name[0]}</Avatar>
                    </div>
                    <div className="user_details_right">
                        <div>{name}</div>
                        <div>{role}</div>
                    </div>
                    <div>
                        <BiCaretDownCircle color="rgba(92, 92, 92, 1)" fontSize="24px" />
                    </div>
                </div>
            )}
            {component}
        </div>
    );
};

export default RightSidebar;
