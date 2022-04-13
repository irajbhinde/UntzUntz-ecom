import react from "react";
import PdNav from "../../components/ProductListing/Nav/PdNav";
import Sidebar from "../../components/ProductListing/Sidebar/Sidebar";
import "../product-listing/productListing.css"
import ProductCard from "../../components/ProductListing/Cards/ProductCard";

export default function ProductListing() {
  return (
    <>
      <PdNav />
      <div class="doc-product flex_r">
      <Sidebar />
      <div class="product-cards flex_r">
        <ProductCard />
      </div>
      </div>
    </>
  );
}
