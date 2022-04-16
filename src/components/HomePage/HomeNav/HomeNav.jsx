import { Link, useNavigate } from "react-router-dom";
import { useAuth } from "../../context/auth-context";
import { useCart } from "../../context/cart-context";

export default function HomeNav() {
  const navigate = useNavigate();
  const { auth, setAuth } = useAuth();
  const {authStatus} = auth;
  const {cartState} = useCart();
  const {cartProducts, wishlistProducts} = cartState

  const signoutHandler = () => {
    localStorage.removeItem("token");
    setAuth({
      authToken: null,
      authStatus: false,
    });
    navigate("/home");
  };

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
        <div className="search-bar flex_r">
          <i className="search-icon fa-solid fa-magnifying-glass"></i>
          <input
            type="search"
            placeholder="Search for products, brands & more"
          />
        </div>
        <div className="home_nav right-navbar">
          <Link to="/productlisting">Explore All</Link>
          {auth.authStatus ? (
            <div className="right-navbar" onClick={signoutHandler}>
              Logout
            </div>
          ) : (
            <>
              <div className="right-navbar">
                <Link to="/login">Login</Link>
                <Link to="/signup">Signup</Link>
              </div>
            </>
          )}

          <Link to="/cart">
            <i className="fa-solid fa-cart-shopping"></i>
            <span class="home_c cart-badge">
              {authStatus ? cartProducts.length : 0}
            </span>
          </Link>
          <Link to="/wishlist">
            <i className="fa-solid fa-heart"></i>
            <span class="home_w wishlist-badge">
              {authStatus ? wishlistProducts.length : 0}
            </span>
          </Link>
        </div>
      </div>
    </nav>
  );
}
