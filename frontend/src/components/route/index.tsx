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
import RiderDashboard from "../../pages/dashboard/main/RiderDashboard";
import VendorDashboard from "../../pages/dashboard/main/VendorDashboard";
import VendorRightSidebar from "../../pages/dashboard/rightside/VendorRightSidebar";
import RiderRightsidebar from "../../pages/dashboard/rightside/RiderRightsidebar";
import AcceptedRide from "../../pages/dashboard/main/AcceptedRide";
import AcceptRideRightSidebar from "../../pages/dashboard/rightside/AcceptRideRightSidebar";
import ViewProduct from "../../pages/dashboard/user/ViewProduct";
import ViewProductRightsidebar from "../../pages/dashboard/user/ViewProductRightsidebar";
import { rightSidebarItems } from "../../assets/JsonData/itemOptions";
import ViewStore from "../../pages/dashboard/vendor/ViewStore";
import viewStorePromoBg from "../../assets/images/seller_promo_img.png";
import rightsidebarclothfeatured from "../../assets/images/rightsidebarclothfeatured.png";
import Checkout from '../../pages/dashboard/checkout/Checkout';
import ViewOrders from '../../pages/dashboard/user/ViewOrders';
import ViewOrderRightSidebar from '../../pages/dashboard/rightside/ViewOrderRightSidebar';

const { home } = APPNAVIGATIONROUTES;

const availableRoles = ["user", "delivery agent", "vendor"];

export const AppRoutes = () => {
    const {
        user: {
            data: { name, role }
        },
        rightSidebarReducer: {
            data: { index, type }
        }
    } = useSelector((state: RootState) => state);

    let { promotion, feeatured } = rightSidebarItems[index][type];
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
                                    component={
                                        <PromotionAndFeatures
                                            promoImg={promotion}
                                            featuredImg={feeatured.img}
                                            featuredTitle={feeatured.name}
                                            featuredVendor={feeatured.vendor}
                                            statsTime={feeatured.rating.time}
                                            ratingStar={feeatured.rating.stars}
                                            amount={feeatured.amount}
                                        />
                                    }
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
                                            <PromotionAndFeatures
                                                promoImg={promotion}
                                                featuredImg={feeatured.img}
                                                featuredTitle={feeatured.name}
                                                featuredVendor={feeatured.vendor}
                                                statsTime={feeatured.rating.time}
                                                ratingStar={feeatured.rating.stars}
                                                amount={feeatured.amount}
                                            />
                                        }
                                    />
                                }
                                main={
                                    <Main
                                        component={<MainDashboard />}
                                        isUserDashboard={false}
                                        showWelcome={true}
                                    />
                                }
                                sidebar={<Sidebar menuData={authMenu} />}
                            />
                        ) : (
                            <Navigate to="/auth/login" state="/user" replace={true} />
                        )
                    }
                />
                <Route
                    path="view_product"
                    element={
                        name &&
                        availableRoles.includes(role?.toLowerCase() ? role?.toLowerCase() : "") ? (
                            <WithoutAuthDashBoard
                                rightbar={<RightSidebar component={<ViewProductRightsidebar />} />}
                                main={
                                    <Main
                                        component={
                                            <ViewProduct role={role?.toLowerCase()} cost="5000" />
                                        }
                                        isUserDashboard={false}
                                        showWelcome={false}
                                    />
                                }
                                sidebar={<Sidebar menuData={authMenu} />}
                            />
                        ) : (
                            <Navigate to="/auth/login" state="/user" replace={true} />
                        )
                    }
                />
                <Route
                    path="view_store"
                    element={
                        name &&
                        availableRoles.includes(role?.toLowerCase() ? role?.toLowerCase() : "") ? (
                            <WithoutAuthDashBoard
                                rightbar={
                                    <RightSidebar
                                        component={
                                            <PromotionAndFeatures
                                                promoImg={viewStorePromoBg}
                                                featuredImg={rightsidebarclothfeatured}
                                                featuredTitle={"Bridal Combo"}
                                                featuredVendor={feeatured.vendor}
                                                statsTime={feeatured.rating.time}
                                                ratingStar={feeatured.rating.stars}
                                                amount={"52800"}
                                            />
                                        }
                                    />
                                }
                                main={
                                    <Main
                                        component={<ViewStore />}
                                        isUserDashboard={false}
                                        showWelcome={false}
                                    />
                                }
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
                                    <Main
                                        component={<VendorDashboard />}
                                        isUserDashboard={true}
                                        showWelcome={true}
                                    />
                                }
                                sidebar={<Sidebar menuData={userMenu} />}
                            />
                        ) : (
                            <Navigate to="/auth/login" state="/user" replace={true} />
                        )
                    }
                />
                <Route
                    path="checkout"
                    element={
                        name &&  availableRoles.includes(role?.toLowerCase() ? role?.toLowerCase() : "")  ? (
                            <WithoutAuthDashBoard
                                main={
                                    <Main
                                        component={<Checkout />}
                                        isUserDashboard={false}
                                        showWelcome={false}
                                    />
                                }
                                sidebar={<Sidebar menuData={authMenu} />}
                            />
                        ) : (
                            <Navigate to="/auth/login" state="/user" replace={true} />
                        )
                    }
                />
                <Route
                    path="rider"
                    element={
                        name && role?.toLowerCase() === "delivery agent" ? (
                            <WithoutAuthDashBoard
                                rightbar={<RightSidebar component={<RiderRightsidebar />} />}
                                main={
                                    <Main
                                        component={<RiderDashboard />}
                                        isUserDashboard={false}
                                        showWelcome={true}
                                    />
                                }
                                sidebar={<Sidebar menuData={riderMenu} />}
                            />
                        ) : (
                            <Navigate to="/auth/login" state="/user" replace={true} />
                        )
                    }
                />
                <Route
                    path="accepted_ride"
                    element={
                        name && role?.toLowerCase() === "delivery agent" ? (
                            <WithoutAuthDashBoard
                                rightbar={<RightSidebar component={<AcceptRideRightSidebar title="Receiver Information" paymentMode="Online Payment" role="User" paid userName="Adegoke Fola"/>} />}
                                main={<Main component={<AcceptedRide />} isUserDashboard={false} />}
                                sidebar={<Sidebar menuData={riderMenu} />}
                            />
                        ) : (
                            <Navigate to="/auth/login" state="/user" replace={true} />
                        )
                    }
                />
                <Route
                    path="View_orders"
                    element={
                        name && availableRoles.includes(role?.toLowerCase() ? role?.toLowerCase() : "") ? (
                            <WithoutAuthDashBoard
                                rightbar={<RightSidebar component={<AcceptRideRightSidebar title="Rider Information" paymentMode="Online Payment" role="Rider" paid userName="Martins Adetola"/>} />}
                                main={<Main component={<ViewOrders />} isUserDashboard={false} />}
                                sidebar={<Sidebar menuData={authMenu} />}
                            />
                        ) : (
                            <Navigate to="/auth/login" state="/user" replace={true} />
                        )
                    }
                />
                <Route path="splashscreen" element={<SplashScreen />} />
                <Route path="successfulreg" element={<SuccessReg />} />
                <Route path="profile" element={<Profile />} />

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
