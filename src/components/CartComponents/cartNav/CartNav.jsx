import { Link } from "react-router-dom";
import { useCart } from "../../context/cart-context";

export default function CartNav (){
  const {cartState} = useCart();
  const {cartProducts, wishlistProducts} = cartState
    return(
        <nav>
      <div className="nav-bar">
        <div className="left-navbar">
          <h2>
            <Link to="/home">
              <span className="primary-highlight">Untz</span>Untz!</Link>
          </h2>
        </div>
        <div className="search-bar flex_r">
          <i className="search-icon fa-solid fa-magnifying-glass"></i>
          <input
            type="search"
            placeholder="Search for products, brands & more"
          />
        </div>
        <div className="right-navbar">
          <Link to="/productlisting"><i className="fa-solid fa-arrow-left-long"></i>Back to Products</Link>
          <Link to="/logout">Logout</Link>
          <Link to="/cart">
            <i className="fa-solid fa-cart-shopping"></i>
            <span class="cart-badge">{cartProducts.length}</span>
          </Link>
          <Link to="/wishlist">
            <i className="fa-solid fa-heart"></i>
            <span className="wishlist-badge">{wishlistProducts.length}</span>
            </Link>
        </div>
      </div>
      </nav>
    )
}

export {CartNav}