import React from "react";
import { useDispatch } from "react-redux";
import { addCart, deleteCart, refreshCart } from "./actions";

const CartControll = () => {
    const dispatch = useDispatch();

    const addItem = (item) => {
        dispatch(addCart(item));
    }
    
    const refreshItems = () => {
        const initItems = [
            "refresh item"
            , "refresh item"
            , "refresh item"
            , "refresh item"
            , "refresh item"
            , "refresh item"
        ];
        dispatch(refreshCart(initItems));
    }

    const deleteItems = () => {
        dispatch(deleteCart())
    }

    return (
        <div>
            <button onClick={
                () => addItem("add item")
            }>추가</button>

            <button onClick={deleteItems}>삭제</button>

            <button onClick={refreshItems}>초기화</button>
        </div>
    )
}

export default CartControll;