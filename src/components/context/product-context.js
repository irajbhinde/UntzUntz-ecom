import { createContext, useContext, useReducer } from "react";
import { productReducer } from "../reducer/productReducer";

const initialState = {
  sortByPrice: null,
  sortByRating: null,
  categories: {
    Anjunadeep: false,
    Anjunabeats: false,
    Above_And_Beyond: false,
    CDs: false,
    Posters: false
  },
};

const ProductContext = createContext(null);
const useProduct = () => useContext(ProductContext);
const ProductProvider = ({ children }) => {
  const [state, dispatch] = useReducer(productReducer, initialState);
  return (
    <ProductContext.Provider value={{ state, dispatch }}>
      {children}
    </ProductContext.Provider>
  );
};

export { useProduct, ProductProvider };
