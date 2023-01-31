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
                    <Button
                        onClick={() => navigate("/auth")}
                        text="Create Account"
                        className="create_btn"
                        style={{ paddingLeft: "12px", paddingRight: "12px" }}
                    />
                    <Button
                        onClick={() => navigate("/auth/login")}
                        text="Login"
                        bg={true}
                        style={{ padding: "12px" }}
                    />
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
