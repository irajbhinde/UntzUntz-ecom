import { createContext, useContext, useReducer } from "react";
import {cartReducer} from "../reducer/cartReducer"

const initialState = {
    cartProducts : [],
    wishlistCount: 0,
    cartPrice : 0,
    wishlistProducts : []
}

const CartContext = createContext(null);
const useCart = () => useContext(CartContext);
const CartProvider = ({children}) => {
    const [cartState, cartDispatch] = useReducer(cartReducer,initialState)
    return (
        
        <CartContext.Provider value={{ cartState, cartDispatch }} >
            {children} 
        </CartContext.Provider >
    )
}

export {useCart, CartProvider}