import { useState, useEffect } from "react";

const useWindowSize = () => {
    const [state, setstate] = useState(window.innerWidth);
    const setWidth = () => {
        setstate(window.innerWidth);
    };
    useEffect(() => {
        window.addEventListener("resize", setWidth);
        return () => window.removeEventListener("resize", setWidth);
    });
    return state;
};

export default useWindowSize;
