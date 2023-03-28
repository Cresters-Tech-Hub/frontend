import React, { useState, useEffect } from "react";
import "./couponcode.scss";
import ep_price_tag from "../../assets/images/ep_price-tag.png";
import { BiCheckSquare } from "react-icons/bi";

interface Props{
  setDiscount:React.Dispatch<React.SetStateAction<number>>
  discount: number
  apply:boolean
  setApply:React.Dispatch<React.SetStateAction<boolean>>
}

const CouponCode = ({discount, setDiscount, apply, setApply}:Props) => {
    const [coupon, setCoupon] = useState("");
    const [filled, setFilled] = useState(false);
    const [isCorrect, setIsCorrect] = useState(false);



    const COUPONCODE = "WEE2BEE6";

    const handleCouponChange = (e: React.ChangeEvent<HTMLInputElement>) => {
        let val = e.target.value;
        setCoupon(val);

        if (val === COUPONCODE) setIsCorrect(true);
        else setIsCorrect(false);
    };

    const handleApply = () => {
        if (isCorrect) {
          setApply(true);
          setDiscount(400)
        }
    };

    useEffect(() => {
        if (coupon.length > 4) setFilled(true);
        else setFilled(false);
    }, [filled, coupon, isCorrect]);
    return (
        <div className="coupon_code">
            {coupon.length < 1 ? <img src={ep_price_tag} alt="" /> : null}
            <input
                type="text"
                placeholder="Enter Code"
                value={coupon}
                onChange={handleCouponChange}
            />
            <button
                onClick={handleApply}
                style={{
                    background: isCorrect && apply === false ? "#06c149" : isCorrect && apply ? "#eeeeee" : "#eeeeee",
                    color: isCorrect && apply === false ? "#fff" : isCorrect && apply ? "#06c149" : "#000"
                }}
            >
                {isCorrect ? (
                    apply ? (
                        <span
                            style={{ display: "flex", alignItems: "center", flexDirection: "row", justifyContent:"center", gap:"0.2rem" }}
                        >
                            <strong>Applied</strong>
                            <BiCheckSquare color="#06c149" fontWeight="bold" size="20px"/>
                        </span>
                    ) : (
                        "Apply"
                    )
                ) : (
                    "Apply"
                )}
            </button>
        </div>
    );
};

export default CouponCode;
