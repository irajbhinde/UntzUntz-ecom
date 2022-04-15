import axios from "axios";

const addToCart = async (product, cartDispatch, authToken) => {
  try {
    const response = await axios.post(
      `/api/user/cart`,
      { product },
      {
        headers: {
          authorization: authToken,
        },
      }
    );
    cartDispatch({ type: "ADD_TO_CART", payload: product });
  } catch (error) {
    console.log(error);
  }
};

const deleteFromCart = async (product, cartDispatch, authToken) => {
  try {
    const response = await axios.delete(`/api/user/cart/${product._id}`, {
      headers: {
        authorization: authToken,
      },
    });
    cartDispatch({ type: "REMOVE_FROM_CART", payload: product });
  } catch (error) {
    console.log(error);
  }
};

const updateQuantity = async (type, product, cartDispatch, authToken) => {
  try {
    const response = await axios.post(
        `/api/user/cart/${product._id}`,
        { action: { type: type } },
        {
          headers: { authorization: authToken },
        }
      );
      cartDispatch({ type : type , payload: product._id });
      console.log("update resp", response);
  } 
  catch (error) {
    console.log(error);
  }
};


export { addToCart, deleteFromCart, updateQuantity };
