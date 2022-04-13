import { useCart } from "../../context/cart-context";

export default function CartCard({ product }) {
  const { cartState, cartDispatch } = useCart();
  const { wishlistProducts } = cartState;
  return (
    <>
      <div className="cards horizontal">
        <div className="img_txt_onside">
          <img src={product.image} />
          <div className="cards-title-horizontal">
            <span className="cards-qty">
              ₹{product.price}
              <i
                onClick={() =>
                  cartDispatch({ type: "DECREASE_QTY", payload: product })
                }
                className="fa-solid fa-minus"
              ></i>{" "}
              {product.quantity}
              <i
                onClick={() =>
                  cartDispatch({ type: "INCREASE_QTY", payload: product })
                }
                className="fa-solid fa-plus"
              ></i>
            </span>

            <div className="buttons_icons flex_c">
              <button 
              onClick={()=> cartDispatch({type: "REMOVE_FROM_CART", payload: product})}className="bg-none btn-card vertical-card">
                Remove from cart
              </button>
              <button 
              onClick={()=>cartDispatch({type:"ADD_TO_WISHLIST", payload: product})}
              className="bg-gray btn-card vertical-card">
                Move to Wishlist
              </button>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export { CartCard };
