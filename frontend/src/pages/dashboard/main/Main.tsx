import React, { useState } from "react";
import TopBar from "../../../components/search/TopBar";
import "./main.scss";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import { AiOutlineMenu } from "react-icons/ai";
import { useWindowSize } from "../../../hooks";
import { useDispatch, useSelector } from "react-redux";
import { setStatus } from "../../../reducer/mobileMenuReducer";
import { RootState } from "../../../store";

interface IMain {
    component: React.ReactNode;
    isUserDashboard?: boolean;
    showWelcome?:boolean
}

const Main = ({ component, isUserDashboard, showWelcome }: IMain) => {
    const {
        data: { name, location, username }
    } = useSelector((state: RootState) => state.user);
    const [status, setMobileStatus] = useState(false);
    const dispatch = useDispatch();

    const handleSelectStatus = () => {
        setMobileStatus(!status);
        dispatch(setStatus(status));
    };

    const width = useWindowSize();
    return (
        <div className="dashboard_main">
            {width < 820 && (
                <div className="mobile_nav_container">
                    <div className="logo">Cresters</div>
                    <div className="mobile_menu_handler">
                        <AiOutlineMenu onClick={() => handleSelectStatus()} />
                    </div>
                </div>
            )}

            <TopBar
                placeholder="Search"
                location={location ? location : "Ikeja, Lagos"}
                className="dashboard_topbar"
            />
            <div className="dashboard_body">
              {!!showWelcome && <div className="title">Welcome {username && username}😊</div>}
                {isUserDashboard && (
                    <div className="subtitle">
                        Manage your store items, orders and so much more...
                    </div>
                )}
                {component}
            </div>
        </div>
    );
};

export default Main;
