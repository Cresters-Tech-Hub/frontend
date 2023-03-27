import React, { useState } from "react";
import "./style.scss";
import { AiOutlineMinus, AiOutlinePlus } from "react-icons/ai";
import { useSelector, useDispatch } from 'react-redux';
import { RootState } from '../../store/index';
import { setCartCounter } from "../../reducer/cartReducer";


interface Props {
    instock: number;
    shownInstock?: boolean;
    isProductPage?:boolean
    amount?:number
}

const StockCounter = ({ instock, shownInstock, isProductPage, amount }: Props) => {
    const {cartSlice:{count}} = useSelector((state:RootState)=>state)
    const dispatch = useDispatch()
    const [quantity, setQuantity] = useState<number>(isProductPage ? count! : 0);
    const [calAmount, setCalAmount] = useState(amount!)

    const cartDecrement=()=>{
        if (quantity < 1) return;
        setQuantity((prev) => prev - 1);
        setCalAmount(calAmount * quantity)
        dispatch(setCartCounter({amount:calAmount * quantity}));
    }
    const cartIncrement=()=>{
        if (quantity > instock - 1) return;
        setQuantity((prev) => prev + 1);
        setCalAmount(calAmount * quantity)
        dispatch(setCartCounter({amount:calAmount * quantity}));
    }
    const decrementQuantity = () => {
        dispatch(setCartCounter({count:quantity-1}));
        if (quantity < 1) return;
        setQuantity((prev) => prev - 1);
        dispatch(setCartCounter({count:quantity-1}));
    };
    const incrementQuantity = () => {
        if (quantity > instock - 1) return;
        setQuantity((prev) => prev + 1);
        dispatch(setCartCounter({count:quantity+1}));
    };
    const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
        let { value } = e.target;
        let val = Number(value);
        if (isNaN(val)) setQuantity(0);
        if (val < 0) {
            setQuantity(0);
            return;
        }
        if (val > instock) return;
        setQuantity(Number(value));
    };
    return (
        <div className="stock_counter">
            <div className="btns">
                <button onClick={isProductPage ? decrementQuantity : cartDecrement}>
                    <AiOutlineMinus />
                </button>
                <input type="text" value={quantity} onChange={handleChange} />
                <button onClick={isProductPage ? incrementQuantity : cartIncrement}>
                    <AiOutlinePlus />
                </button>
            </div>
            {shownInstock && (
                <div className="text" style={{ color: instock < 1 ? "red" : "#0abe75" }}>
                    {instock > 0 ? "in stock" : "not in stock"}
                </div>
            )}
        </div>
    );
};

export default StockCounter;
