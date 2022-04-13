import PdNav from "../../components/ProductListing/Nav/PdNav";
import Sidebar from "../../components/ProductListing/Sidebar/Sidebar";
import "../product-listing/productListing.css"
import ProductCard from "../../components/ProductListing/Cards/ProductCard";
import { useEffect, useState } from "react";
import { useProduct } from "../../components/context/product-context";
import axios from "axios";
  

import {
  getSortedData,
  getSortByRatingData,
  getFilteredData,
} from "../../components/utils/index";

export default function ProductListing() {
  
  const {
    state: { sortByPrice, sortByRating, categories },
  } = useProduct();
  const [data, setData] = useState([]);


  useEffect(() => {
    async function getData() {
      try {
        const response = await axios("/api/products");
        setData(response.data.products);
      } catch (error) {
        console.log(error);
      }
    }
    getData();
  }, []);

  const sortedData = getSortedData(data, sortByPrice);

  const sortedDataRating = getSortByRatingData(sortedData, sortByRating);

  const filteredData = getFilteredData(sortedDataRating, categories);
  return (
    <>
      <PdNav />
      <div className="doc-product flex_r">
      <Sidebar />
      <div className="product-cards flex_r">
      {filteredData.map((product) => (
        <ProductCard product={product} key={product._id}/>
      ))}
      </div>
      </div>
    </>
  );
}
