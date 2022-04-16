import { useAuth } from "../../context/auth-context";
import { useCart } from "../../context/cart-context";
import { deleteFromCart, updateQuantity } from "../../services/cart-services/cart-functions";
import { addToWishlist } from "../../services/wishlist-services/wishlist-functions";

export default function CartCard({ product }) {
  const { cartState, cartDispatch } = useCart();
  const {auth} = useAuth();
  const {authToken, authStatus} = auth;
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
                updateQuantity("decrement",product, cartDispatch, authToken)
                }
                className="fa-solid fa-minus"
              ></i>{" "}
              {product.quantity}
              <i
                onClick={() =>
                  updateQuantity("increment",product, cartDispatch, authToken)
                }
                className="fa-solid fa-plus"
              ></i>
            </span>

            <div className="buttons_icons flex_c">
              <button 
              onClick={()=>deleteFromCart(product, cartDispatch, authToken)}className="bg-none btn-card vertical-card">
                Remove from cart
              </button>
              <button 
              onClick={()=>addToWishlist(product, cartDispatch, authToken)}
              className="bg-gray btn-card vertical-card">
                Add to Wishlist
              </button>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export { CartCard };
