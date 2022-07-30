import { Link } from "react-router-dom";

import { useCart } from "../../context/cart-context";
import "../WishListCard/wishListPage.css";
import { updateQuantity, addToCart } from "../../services/cart-services/cart-functions";
import { removeFromWishlist } from "../../services/wishlist-services/wishlist-functions";
import { useAuth } from "../../context/auth-context";

export default function WishListCard({ product }) {
  const {auth} =useAuth();
  const {authToken} = auth;
  const { cartState, cartDispatch } = useCart();
  const {wishlistProducts, cartProducts} = cartState;
  return (
    <div className="cards productPage">
      <div className="img_text">
        <span className="top-left-badge">On Sale</span>
        {/* <i className="fas fa-heart fa-lg top-right-badge"></i> */}

        <img className="cards-image" src={product.image} />
        <div className="cards-title vertical-card">
          <p>{product.title}</p>
          <small> {product.subtitle} </small>
          <small>₹{product.price}</small>
        </div>
      </div>
      <div className="buttons_icons flex_c">
        {cartProducts.find((prods) => prods._id === product._id) ? (
          <button
          onClick={() =>
            updateQuantity("increment",product, cartDispatch, authToken)
          }
           className="btn-card vertical-card">
            <p>Increase Item Quantity in Cart</p>
          </button>
        ) : (
          <button
            onClick={() =>
              addToCart(product, cartDispatch, authToken)
            }
            className="btn-card vertical-card"
          >
            {" "}
            Add to cart{" "}
          </button>
        )}
        <button 
        onClick={() => removeFromWishlist(product, cartDispatch, authToken)}
        className="bg-none btn-card vertical-card">
          Remove from Wishlist
        </button>
      </div>
    </div>
  );
}
