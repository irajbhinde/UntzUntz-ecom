import React from "react";
import ReactDOM from "react-dom";
import "./index.css";
import App from "./App";
import { makeServer } from "./server";
import { BrowserRouter } from "react-router-dom";
import {ProductProvider} from "../src/components/context/product-context"
import { CartProvider, AuthProvider } from "./components/context/index"

// Call make Server
makeServer();

ReactDOM.render(
  <React.StrictMode>
    <BrowserRouter>
    <AuthProvider>
    <ProductProvider>
    <CartProvider>
    <App />
    </CartProvider>
    </ProductProvider>
    </AuthProvider>
    </BrowserRouter>
  </React.StrictMode>,
  document.getElementById("root")
);
