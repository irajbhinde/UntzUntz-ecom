import { Link } from "react-router-dom";

import { useCart } from "../../context/cart-context";
import "../WishListCard/wishListPage.css";

export default function WishListCard({ product }) {
  const { cartState, cartDispatch } = useCart();
  const {wishlistProducts, cartProducts} = cartState
  console.log("WL", product);
  return (
    <div className="cards productPage">
      <div className="img_text">
        <span className="top-left-badge">On Sale</span>
        <i className="fas fa-heart fa-lg top-right-badge"></i>

        <img className="cards-image" src={product.image} />
        <div className="cards-title vertical-card">
          <p>{product.title}</p>
          <small> {product.subtitle} </small>
          <small>₹{product.price}</small>
        </div>
      </div>
      <div className="buttons_icons flex_c">
        {cartProducts.find((prods) => prods._id === product._id) ? (
          <button className="bg-gray btn-card vertical-card">
            <Link to="/cart">Go to cart</Link>
          </button>
        ) : (
          <button
            onClick={() =>
              cartDispatch({ type: "ADD_TO_CART", payload: product })
            }
            className="btn-card vertical-card"
          >
            {" "}
            Add to cart{" "}
          </button>
        )}
        <button 
        onClick={() => cartDispatch({type:"REMOVE_FROM_WISHLIST", payload: product})}
        className="bg-none btn-card vertical-card">
          Remove from Wishlist
        </button>
      </div>
    </div>
  );
}
