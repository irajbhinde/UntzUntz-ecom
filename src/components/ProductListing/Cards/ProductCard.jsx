import { Link } from "react-router-dom";
import { useCart } from "../../context/cart-context";

export default function ProductCard({ product, key }) {
  const { _id, title, image, subtitle, price, rating } = product;
  const { cartState, cartDispatch } = useCart();
  const { cartProducts, wishlistProducts } = cartState;
  return (
    <>
      <div className="cards productPage">
        <div className="img_text">
          <span className="top-left-badge">On Sale</span>
          <i className="far fa-heart fa-lg top-right-badge"></i>

          <img className="cards-image" src={image} />
          <div className="cards-title vertical-card">
            <p>{title}</p>
            <small> {subtitle} </small>
            <small>₹{price}</small>
            <small>Rating : {rating}</small>
          </div>
        </div>
        <div className="buttons_icons flex_c">
          {cartProducts.find((prod) => prod._id === product._id) ? (
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
              Add to cart
            </button>
          )}
          {wishlistProducts.find((prod) => prod._id === product._id) ? (
            <button
              onClick={() =>
                cartDispatch({ type: "REMOVE_FROM_WISHLIST", payload: product })
              }
              className="bg-none btn-card vertical-card"
            >
              Remove from Wishlist
            </button>
          ) : (
            <button
              onClick={() =>
                cartDispatch({ type: "ADD_TO_WISHLIST", payload: product })
              }
              className="bg-none btn-card vertical-card"
            >
              Add to Wishlist
            </button>
          )}
        </div>
      </div>
    </>
  );
}
