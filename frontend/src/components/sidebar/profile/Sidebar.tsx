import React from "react";
import "./profilesidebar.scss";
import { menu, downMenu } from "./../../../assets/JsonData/menu";
import settings from "../../../assets/images/settings.png";
import Menu from "@mui/material/Menu";
import MenuItem from "@mui/material/MenuItem";

export default function ProfileSidebar() {
    const [anchorEl, setAnchorEl] = React.useState<null | HTMLElement>(null);
    const open = Boolean(anchorEl);
    const handleClick = (event: React.MouseEvent<HTMLElement>) => {
        setAnchorEl(event.currentTarget);
    };
    const handleClose = () => {
        setAnchorEl(null);
    };
    return (
        <div className="profile_sidebar">
            <div className="top">
                <div className="menu">MENU</div>
                {menu.map((item) => (
                    <div className="menu_list" key={item.id}>
                        {item.icon} <span>{item.name}</span>
                    </div>
                ))}
            </div>
            <div className="bottom">
                {downMenu.map((item) => (
                    <div className="menu_list" key={item.id}>
                        {item.icon} <span>{item.name}</span>
                    </div>
                ))}
                <div className="menu_list">
                    <img src={settings} alt="" />{" "}
                    <span
                        aria-controls={open ? "basic-menu" : undefined}
                        aria-haspopup="true"
                        aria-expanded={open ? "true" : undefined}
                        onClick={handleClick}
                    >
                        Settings
                    </span>
                </div>
                <Menu
                    id="basic-menu"
                    anchorEl={anchorEl}
                    open={open}
                    onClose={handleClose}
                    MenuListProps={{
                        "aria-labelledby": "basic-button"
                    }}
                >
                    <MenuItem onClick={handleClose}>Profile</MenuItem>
                    <MenuItem onClick={handleClose}>Preferences</MenuItem>
                    <MenuItem onClick={handleClose}>Account</MenuItem>
                </Menu>
            </div>
        </div>
    );
}
