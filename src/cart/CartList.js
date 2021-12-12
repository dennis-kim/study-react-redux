import React from "react";
import { useSelector } from "react-redux";


const CartList = () => {
    const list = useSelector(store => store.cartReducer);

    return (
        list.map((item, index) => {
            return <div key={index}>{item}</div>
        })
    )
}

export default CartList;