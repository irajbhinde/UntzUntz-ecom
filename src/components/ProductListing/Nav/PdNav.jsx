import { Link, useNavigate } from "react-router-dom";
import { useAuth,useCart } from "../../context/index";


export default function PdNav() {
  const { auth, setAuth } = useAuth();
  const {authStatus, authToken} = auth
  const navigate = useNavigate();
  const { cartState } = useCart();
  const { cartProducts, wishlistProducts } = cartState;
  const signoutHandler = () => {
    
    localStorage.clear()
    setAuth({
        authToken : null,
        authStatus : false
    })
    navigate("/home")
}

  return (
    <nav>
      <div className="nav-bar">
        <div className="left-navbar">
          <h2>
            <Link to="/">
              <span className="primary-highlight">Untz</span>Untz!
            </Link>
          </h2>
        </div>
        {/* <div className="search-bar flex_r">
          <i className="search-icon fa-solid fa-magnifying-glass"></i>
          <input
            type="search"
            placeholder="Search for products, brands & more"
          />
        </div> */}
        <div className="right-navbar">
          <Link to="/home">
            <i className="fa-solid fa-arrow-left-long"></i>Back to Home
          </Link>
          {auth.authStatus ? (
            <p onClick={signoutHandler}>Logout</p>
          ) : (
            <>
              <Link to="/login">Login</Link>
              <Link to="/signup">Signup</Link>
            </>
          )}
          <Link to="/cart">
            <i className="fa-solid fa-cart-shopping"></i>
            <span class="cart-badge">{authStatus ? cartProducts.length : 0 }</span>
          </Link>
          <Link to="/wishlist">
            <i className="fa-solid fa-heart"></i>
            <span class="wishlist-badge">{authStatus ? wishlistProducts.length : 0 }</span>
          </Link>
        </div>
      </div>
    </nav>
  );
}
