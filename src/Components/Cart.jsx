import React, { useContext } from "react";
import Context from "./Context";

function Cart () {
    const {cart, setCart } = useContext(Context)
    
    return(
        <>
            {cart.map((item, index)=>{
                return(
                <div key={index}>
                     {item.title}
                </div>
            )
        })}
    </>
    )
}

export default Cart