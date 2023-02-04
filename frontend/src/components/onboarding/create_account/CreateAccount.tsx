import React from "react";
import { Outlet } from "react-router-dom";
import { carouselitems } from "../../../utils/constants";
import Card from "../../card/Card";
import "./createAccount.scss";
import { useSelector } from "react-redux";
import { RootState } from "../../../store";

export const CreateAccount = () => {
    const indexState = useSelector((state: RootState) => state.cardIndex.index);
    return (
        <div className="create_account">
            <div className="left">
                <Card
                    //TODO: props will be supplied by redux from the splash screen component
                    text={carouselitems[indexState].text}
                    imgUri={carouselitems[indexState].imgUri}
                    title={carouselitems[indexState].title}
                    variant="md"
                    page={1}
                    showBtn={false}
                />
            </div>
            <div className="right">
                <Outlet />
            </div>
        </div>
    );
};
