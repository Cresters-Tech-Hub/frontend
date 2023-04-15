import React, { useState } from "react";
import "./sidebar.scss";
import Logo from "../../../components/logo/index";
import { menu, downMenu, authMenu, authDownMenu, settingsData, riderMenu, vendorMenu } from "../../../assets/JsonData/menu";
import settings from "../../../assets/images/settings.png";
import Menu from "@mui/material/Menu";
import MenuItem from "@mui/material/MenuItem";
import { useSelector, useDispatch } from "react-redux";
import { RootState } from "../../../store";
import Button from "../../../components/buttons";
import { useWindowSize } from "../../../hooks";
import { Link, useNavigate } from "react-router-dom";
import { setUserData } from "../../../reducer/userReducer";

interface ISidebar {
    menuData?: {
        id: number;
        name: string;
        icon: React.ReactNode;
    }[];
}

const Sidebar = ({ menuData }: ISidebar) => {
    const navigate = useNavigate();
    const dispatch = useDispatch();
    const width = useWindowSize();
    const mobileMenuStatus = useSelector((state: RootState) => state.mobileMenuStatus.status);
    const data = useSelector((state: RootState) => state.user.data);
    const {
        data: { name, path, username }
    } = useSelector((state: RootState) => state.user);
    const [index, setIndex] = useState<number | undefined>(1);
    const [anchorEl, setAnchorEl] = React.useState<null | HTMLElement>(null);
    const open = Boolean(anchorEl);
    const handleClick = (event: React.MouseEvent<HTMLElement>) => {
        setAnchorEl(event.currentTarget);
    };
    const handleClose = () => {
        setAnchorEl(null);
    };
    const handleMenuClick= (url:string) => {
        if(url === "View Profile") navigate(`/${path}`);
        if(url === "KYC")  navigate(`/profile`);
       
        setAnchorEl(null);
    };
    const logout = () => {
        dispatch(setUserData({ name: null, firstName: null, location: null }));
        localStorage.removeItem("user");
        navigate("/dashboard");
    };

    const sidebarAction = (id: number, itemName: string) => {
        setIndex(id);

        if (itemName === "My Orders") navigate("/View_orders");
        if (itemName === "Sales") navigate("/sales");
        if (itemName === "Ride History") navigate("/accepted_ride");
        if (itemName === "Dashboard") navigate("/dashboard");
        if (itemName === "Settings") navigate("/settings");
        if (itemName === "Explore") navigate("/dashboard");
    };

    let sidebarMenuTop;
    let pathToLowerCase = path?.toLowerCase() 
    if(pathToLowerCase === "user") sidebarMenuTop = menuData;
    else if(pathToLowerCase === "rider") sidebarMenuTop = riderMenu;
   else if(pathToLowerCase === "vendor") sidebarMenuTop = vendorMenu;
   else sidebarMenuTop = menu;

    const sidebarMenuDown = username ? authDownMenu : downMenu;
    return (
        <div className="dashboard_sidebar">
            <div className="logo">Cresters</div>
            <div className="top">
                <div className="title">MENU</div>
                {sidebarMenuTop &&
                    sidebarMenuTop.map((item) => (
                        <div
                            className={`menu_list ${item.id === index ? "isActive" : ""}`}
                            key={item.id}
                            onClick={() => sidebarAction(item.id, item.name)}
                        >
                            <span className="sidebar_icon_bg">{item.icon}</span>
                            <span>{item.name}</span>
                        </div>
                    ))}
            </div>
            <div className="bottom">
                {sidebarMenuDown.map((item) => (
                    <div
                        className={`menu_list ${item.id === index ? "isActive" : ""}`}
                        key={item.id}
                        onClick={() => sidebarAction(item.id, item.name)}
                    >
                        <span className="sidebar_icon_bg">{item.icon}</span>
                        {item.name === "Profile" ? (
                            <>
                                <span
                                    aria-controls={open ? "basic-menu" : undefined}
                                    aria-haspopup="true"
                                    aria-expanded={open ? "true" : undefined}
                                    onClick={handleClick}
                                >
                                    {item.name}
                                </span>
                            </>
                        ) : (
                            <>
                                {item.name === "Log Out" ? (
                                    <span onClick={logout}>{item.name}</span>
                                ) : (
                                    <span>{item.name}</span>
                                )}
                            </>
                        )}
                    </div>
                ))}
                <Menu
                    id="basic-menu"
                    anchorEl={anchorEl}
                    open={open}
                    onClose={handleClose}
                    MenuListProps={{
                        "aria-labelledby": "basic-button"
                    }}
                >
                    {
                        settingsData.map((item, id)=>(<MenuItem key={id} onClick={()=>handleMenuClick(item)}>{item}</MenuItem>))
                    }
                </Menu>
            </div>
            {width < 821 && mobileMenuStatus && !name ? (
                <div className="mobileLogin">
                    <Button
                        onClick={() => navigate("/auth")}
                        text="Create Account"
                        className="create_btn"
                        style={{ padding: "12px" }}
                    />
                    <Button
                        onClick={() => navigate("/auth/login")}
                        text="Login"
                        bg={true}
                        style={{ padding: "12px" }}
                    />
                </div>
            ) : null}
        </div>
    );
};

export default Sidebar;
