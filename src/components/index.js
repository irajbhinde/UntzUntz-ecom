import  Nav  from "./Nav/Nav";
import  HomePageCard  from "./HomePage/HomePageCard/HomePageCard";
import  HomePageHero  from "./HomePage/HomePageHero/HomePageHero";
import  HomePageContainer  from "./HomePage/HomeBottomContainer/HomePageContainer";
import  PdNav  from "./ProductListing/Nav/PdNav";
import  Sidebar  from "./ProductListing/Sidebar/Sidebar";
import  ProductCard  from "./ProductListing/Cards/ProductCard";
import  {ProductProvider}  from "../components/context/product-context";
import  CartNav  from "./CartComponents/cartNav/CartNav"
import  CartCard  from "./CartComponents/CartCard/CartCard";
import  BillCard  from "./CartComponents/CartCard/BillCard";
import LoginCard from "./login_signup/LoginCard";
import SignUpCard from "./login_signup/SignupCard";
import { addToCart, deleteFromCart, updateQuantity } from "./services/cart-services/cart-functions";
import { addToWishlist, removeFromWishlist } from "./services/wishlist-services/wishlist-functions";

export {
  Nav,
  HomePageCard,
  HomePageHero,
  HomePageContainer,
  PdNav,
  Sidebar,
  ProductCard,
  ProductProvider,
  CartNav,
  CartCard,
  BillCard,
  LoginCard,
  SignUpCard,
  addToCart,
  deleteFromCart,
  updateQuantity,
  addToWishlist,
  removeFromWishlist
};