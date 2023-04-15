import React from "react";
import "./rightsidebar.scss";
import { useNavigate } from "react-router-dom";
import { useSelector } from "react-redux";
import { RootState } from "../../../store";
import { Badge } from "@mui/material";
import { IoIosNotifications } from "react-icons/io";
import Avatar from "@mui/material/Avatar";
import { BiCaretDownCircle } from "react-icons/bi";
import { BsHandbagFill } from "react-icons/bs";

interface IRightSidebar {
    component?: React.ReactNode;
}

const RightSidebar = ({ component }: IRightSidebar) => {
    const navigate = useNavigate();
    const {
        user: {
            data: { name, role, username }
        },
        cartSlice:{count}
    } = useSelector((state: RootState) => state);
    return (
        <div className="rightSidebar">
            {!username ? (
                <div className="rightsidebar_auth">
                    <button onClick={() => navigate("/auth")} className="create_btn">
                        Create Account
                    </button>
                    <button onClick={() => navigate("/auth/login")} className="login">
                        Login
                    </button>
                </div>
            ) : (
                <div className="rightsidebar_login_user">
                    <div>
                        {
                            count! > 0 ?  <Badge color="success" badgeContent={count} style={{ marginRight: 5, cursor:"pointer" }}>
                            <BsHandbagFill fontSize="20px" onClick={()=>navigate("/checkout")}/>
                        </Badge> : null
                        }
                       
                        <Badge color="secondary" variant="dot" invisible={false}>
                            <IoIosNotifications fontSize="25px" style={{cursor:"pointer"}}/>
                        </Badge>
                    </div>
                    <div>
                        <Avatar>{username.slice(0, 2).toUpperCase()}</Avatar>
                    </div>
                    <div className="user_details_right">
                        <div>{username}</div>
                        <div className="role">{role}</div>
                    </div>
                    <div style={{cursor:"pointer"}}>
                        <BiCaretDownCircle color="rgba(92, 92, 92, 1)" fontSize="24px" />
                    </div>
                </div>
            )}
            {component}
        </div>
    );
};

export default RightSidebar;
