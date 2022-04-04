export const cartReducer = (state, action) => {
    const {type, payload} = action
    console.log(action.type)
    switch(type){
        case "ADD_TO_CART":
            return{
                ...state,
                cartProducts : [...state.cartProducts, {...payload, quantity: 1}]
            }
        case "REMOVE_FROM_WISHLIST":
            return{
                ...state,
                wishlistProducts : [...state.wishlistProducts.filter((prod) => prod._id !== payload._id)]
            }
        case "ADD_TO_WISHLIST":
            return{
                ...state,
                wishlistProducts : [...state.wishlistProducts, payload]
            }
    }
}