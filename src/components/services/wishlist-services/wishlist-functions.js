import axios from "axios";

const addToWishlist = async (product, cartDispatch, authToken) => {
    try {
        const response = await axios.post(
            `/api/user/wishlist`,
            {product},
            {
                headers : {
                    authorization : authToken
                },
            }
        )
        cartDispatch({type : "ADD_TO_WISHLIST", payload : product})
    }
    catch (error){
        console.log(error);
    }
}

const removeFromWishlist = async (product, cartDispatch, authToken) => {
    try {
        const response = await axios.delete(`/api/user/wishlist/${product._id}`, {
            headers : {
                authorization : authToken
            }
        })
        cartDispatch({type : "REMOVE_FROM_WISHLIST", payload: product})
    }
    catch(error){
        console.log(error);
    }
}


export {addToWishlist, removeFromWishlist}