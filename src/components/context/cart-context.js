import { createContext, useContext, useReducer } from "react";
import { cartReducer } from "../reducer/cartReducer";
import { v4 as uuid } from "uuid";

const initialState = {
  cartProducts: [],
  wishlistCount: 0,
  cartPrice: 0,
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
  const [cartState, cartDispatch] = useReducer(cartReducer, initialState);
  return (
    <CartContext.Provider value={{ cartState, cartDispatch }}>
      {children}
    </CartContext.Provider>
  );
};

export { useCart, CartProvider };
