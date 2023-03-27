import "./style.scss";
import { useSelector } from "react-redux";
import { RootState } from "../../../store";
import { useWindowSize } from "../../../hooks";

interface IDashBoard {
    sidebar: React.ReactNode;
    main: React.ReactNode;
    rightbar?: React.ReactNode;
}

export default function WithoutAuthDashBoard({ sidebar, main, rightbar }: IDashBoard) {
    const width = useWindowSize();
    const mobileMenuStatus = useSelector((state: RootState) => state.mobileMenuStatus.status);
    return (
        <div className="without_auth_dashboard">
            <div className="container">
                <div
                    className={`left ${
                        width < 821 && mobileMenuStatus ? "isMobileMenuLeft" : null
                    }`}
                >
                    {sidebar}
                </div>
                <div className="main">{main}</div>
                <div
                    className={`right ${
                        width < 821 && mobileMenuStatus ? "isMobileMenuRight" : null
                    }`}
                >
                    {rightbar}
                </div>
            </div>
        </div>
    );
}
