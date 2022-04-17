export const cartReducer = (state, action) => {
    const {type, payload} = action
    switch(type){
        case "ADD_TO_CART":
            return{
                ...state,
                cartProducts : [...state.cartProducts, {...payload, quantity: 1}]
            }
        case "REMOVE_FROM_CART":
            return{
                ...state,
                cartProducts : [...state.cartProducts.filter((item) => item._id !== payload._id)]
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
        case "increment":
            return{
                ...state,
                cartProducts : state.cartProducts.map((item) => item._id === payload ? {...item, quantity : item.quantity +1 } : item) 
            }
        case "decrement":
            return{
                ...state,
                cartProducts : state.cartProducts.map((item) => item._id === payload ? {...item, quantity : item.quantity > 1 ? item.quantity - 1 : item.quantity } : item )
            }
    }
}