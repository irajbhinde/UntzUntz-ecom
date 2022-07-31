import { createContext, useContext, useReducer, useState } from "react";
import { cartReducer } from "../reducer/cartReducer";
import { v4 as uuid } from "uuid";

const initialState = {
  cartProducts: [],
  wishlistCount: 0,
  wishlistProducts: [],
  userAddress: [
    {
      _id: uuid(),
      userName: "Raj Bhinde",
      phoneNumber: "9933113311",
      addressLineOne: "B/1, XYZ Tower, XYZ Town",
      addressLineTwo: "opp Dwarka Hotel",
      pincode: 40031,
      city: "Mumbai",
      town: "Bandra West",
      state: "Maharashtra",
    },
  ],
};

const CartContext = createContext(null);
const useCart = () => useContext(CartContext);
const CartProvider = ({ children }) => {
  const [razorpayId, setRazorpayId] = useState();
  const [cartPrice, setCartPrice] = useState(0);
  const [cartState, cartDispatch] = useReducer(cartReducer, initialState);
  return (
    <CartContext.Provider value={{ cartState, cartDispatch, razorpayId, setRazorpayId, cartPrice, setCartPrice }}>
      {children}
    </CartContext.Provider>
  );
};

export { useCart, CartProvider };
