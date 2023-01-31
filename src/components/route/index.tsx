import React from "react";
import { BrowserRouter as Router, Routes, Route, Navigate } from "react-router-dom";
import { Login } from "../../pages/login/Login";
import AccountType from "../accountType/AccountType";
import NotFound from "../notfound/NotFound";
import { CreateAccount } from "../onboarding/create_account/CreateAccount";
import LandingPage from "../onboarding/loading/LandingPage";
import SplashScreen from "../onboarding/splashscreen/SplashScreen";
import { APPNAVIGATIONROUTES } from "./apiRoutes";
import InputRegisterDetails from "./../inputregisterdetails/index";
import { SuccessReg } from "./../../pages/success/successreg/index";
import { SignupWelcome } from "../email/welcomeemail";
import Profile from "../../pages/profile";
import WithoutAuthDashBoard from "../../pages/dashboard/withoutauth";
import Sidebar from "./../../pages/dashboard/sidebar/Sidebar";
import Main from "../../pages/dashboard/main/Main";
import RightSidebar from "../../pages/dashboard/rightside/RightSidebar";
import { useSelector } from "react-redux";
import { RootState } from "../../store/index";
import { PromotionAndFeatures } from "../../pages/dashboard/rightside/PromotionAndFeatures";
import { MainDashboard } from "../../pages/dashboard/main/MainDashboard";
import { authMenu, riderMenu, userMenu } from "../../assets/JsonData/menu";
import { UserDashboad } from "../../pages/dashboard/main/UserDashboad";
import RiderDashboard from "../../pages/dashboard/main/RiderDashboard";
import VendorDashboard from "../../pages/dashboard/main/VendorDashboard";
import VendorRightSidebar from "../../pages/dashboard/rightside/VendorRightSidebar";

const { home } = APPNAVIGATIONROUTES;

export const AppRoutes = () => {
    const {
        user: {
            data: { name, role }
        },
        rightSidebarReducer: {
            data: { index, type }
        }
    } = useSelector((state: RootState) => state);

    return (
        <Router>
            <Routes>
                <Route path={home} element={<LandingPage />} />
                <Route
                    path="dashboard"
                    element={
                        <WithoutAuthDashBoard
                            rightbar={
                                <RightSidebar
                                    component={<PromotionAndFeatures type={type} index={index} />}
                                />
                            }
                            main={<Main component={<MainDashboard />} />}
                            sidebar={<Sidebar menuData={authMenu} />}
                        />
                    }
                />
                <Route
                    path="user"
                    element={
                        name && role?.toLowerCase() === "user" ? (
                            <WithoutAuthDashBoard
                                rightbar={
                                    <RightSidebar
                                        component={
                                            <PromotionAndFeatures type={type} index={index} />
                                        }
                                    />
                                }
                                main={<Main component={<MainDashboard />} isUserDashboard={true} />}
                                sidebar={<Sidebar menuData={authMenu} />}
                            />
                        ) : (
                            <Navigate to="/auth/login" state="/user" replace={true} />
                        )
                    }
                />
                <Route
                    path="vendor"
                    element={
                        name && role?.toLowerCase() === "vendor" ? (
                            <WithoutAuthDashBoard
                                rightbar={<RightSidebar component={<VendorRightSidebar />} />}
                                main={
                                    <Main component={<VendorDashboard />} isUserDashboard={true} />
                                }
                                sidebar={<Sidebar menuData={userMenu} />}
                            />
                        ) : (
                            <Navigate to="/auth/login" state="/user" replace={true} />
                        )
                    }
                />
                <Route
                    path="rider"
                    element={
                        name && role?.toLowerCase() === "rider" ? (
                            <WithoutAuthDashBoard
                                rightbar={
                                    <RightSidebar
                                        component={
                                            <PromotionAndFeatures type={type} index={index} />
                                        }
                                    />
                                }
                                main={
                                    <Main component={<RiderDashboard />} isUserDashboard={true} />
                                }
                                sidebar={<Sidebar menuData={riderMenu} />}
                            />
                        ) : (
                            <Navigate to="/auth/login" state="/user" replace={true} />
                        )
                    }
                />
                <Route path="splashscreen" element={<SplashScreen />} />
                <Route path="successfulreg" element={<SuccessReg />} />
                <Route path="profile" element={<Profile />} />
                <Route
                    path="email"
                    element={
                        <SignupWelcome
                            subject="Welcome to CRESTERS"
                            userName="Ali David"
                            confirmationUrl="https://cresters.com"
                        />
                    }
                />
                <Route path="auth" element={<CreateAccount />}>
                    <Route index element={<AccountType />} />
                    <Route path="login" element={<Login />} />
                    <Route path="create" element={<InputRegisterDetails />} />
                </Route>
                <Route path="*" element={<NotFound />} />
            </Routes>
        </Router>
    );
};

export default AppRoutes;
