import MockmanEs from "mockman-js";
import { Routes, Route } from "react-router-dom";

import { LandingPage, HomePage, ProductListing, CartPage, WishListPage} from "../index.js";
import LoginPage from "../login/LoginPage.jsx";
import SignUpPage from "../signup/SignupPage.jsx";

const RouterPage = () => {
  return (
    <Routes>
      <Route path="/" element={<LandingPage />} />
      <Route path="/home" element={<HomePage />} />
      <Route path="/productlisting" element={<ProductListing />} />
      <Route path="/cart" element={<CartPage />} />
      <Route path="/wishlist" element={<WishListPage />} />
      <Route path="/login" element={<LoginPage />} />
      <Route path="/signup" element={<SignUpPage />} />
      <Route path="/mockman" element={<MockmanEs />} />
    </Routes>
  );
};

export { RouterPage };