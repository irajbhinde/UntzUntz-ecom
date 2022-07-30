import MockmanEs from "mockman-js";
import { Routes, Route } from "react-router-dom";
import RequiresAuth from "../../components/services/login-services/RequiresAuth.js";
import CheckoutPage from "../Checkout Page/CheckoutPage.jsx";

import {
  LandingPage,
  HomePage,
  ProductListing,
  CartPage,
  WishListPage,
  NotFound,
} from "../index.js";
import LoginPage from "../login/LoginPage.jsx";
import SignUpPage from "../signup/SignupPage.jsx";

const RouterPage = () => {
  return (
    <Routes>
      <Route path="/" element={<LandingPage />} />
      <Route path="/home" element={<HomePage />} />
      <Route path="/productlisting" element={<ProductListing />} />
      <Route
        path="/cart"
        element={
          <RequiresAuth>
            <CartPage />
          </RequiresAuth>
        }
      />
      <Route
        path="/checkout"
        element={
          <RequiresAuth>
            <CheckoutPage />
          </RequiresAuth>
        }
      />
      <Route
        path="/wishlist"
        element={
          <RequiresAuth>
            <WishListPage />
          </RequiresAuth>
        }
      />
      <Route path="/login" element={<LoginPage />} />
      <Route path="/signup" element={<SignUpPage />} />
      <Route path="/mockman" element={<MockmanEs />} />
      <Route path="*" element={<NotFound />} />
    </Routes>
  );
};

export { RouterPage };
