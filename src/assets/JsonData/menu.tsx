import { MdOutlineExplore } from "react-icons/md";
import { BsBag, BsHeart, BsQuestionCircle } from "react-icons/bs";
import { IoIosNotificationsOutline } from "react-icons/io";
import { HiOutlineUser } from "react-icons/hi";
import { FiSettings } from "react-icons/fi";
import { RiLogoutCircleLine } from "react-icons/ri";
import { BiCategory } from "react-icons/bi";
import { IoDocumentTextOutline } from "react-icons/io5";
import { BsClockHistory } from "react-icons/bs";

export const authMenu = [
    {
        id: 1,
        name: "Explore",
        icon: <MdOutlineExplore />
    },
    {
        id: 2,
        name: "My Orders",
        icon: <BsBag />
    },
    {
        id: 3,
        name: "Saved Items",
        icon: <BsHeart />
    }
];

export const menu = [
    {
        id: 1,
        name: "Explore",
        icon: <MdOutlineExplore />,
        auth: true
    }
];
export const userMenu = [
    {
        id: 1,
        name: "Dashboard",
        icon: <BiCategory />,
        auth: true
    },
    {
        id: 2,
        name: "Orders List",
        icon: <IoDocumentTextOutline />,
        auth: true
    },
    {
        id: 3,
        name: "History",
        icon: <BsClockHistory />,
        auth: true
    }
];
export const riderMenu = [
    {
        id: 1,
        name: "Dashboard",
        icon: <BiCategory />,
        auth: true
    },
    {
        id: 2,
        name: "Ride History",
        icon: <BsClockHistory />,
        auth: true
    },
    {
        id: 3,
        name: "Payment",
        icon: <IoDocumentTextOutline />,
        auth: true
    }
];

export const downMenu = [
    {
        id: 2,
        name: "FAQs",
        icon: <BsQuestionCircle />,
        auth: true
    }
];
export const authDownMenu = [
    {
        id: 4,
        name: "Notifications",
        icon: <IoIosNotificationsOutline />
    },
    {
        id: 5,
        name: "Profile",
        icon: <HiOutlineUser />
    },
    {
        id: 6,
        name: "FAQs",
        icon: <BsQuestionCircle />
    },
    {
        id: 7,
        name: "Settings",
        icon: <FiSettings />
    },
    {
        id: 8,
        name: "Log Out",
        icon: <RiLogoutCircleLine />
    }
];
