import axios from "axios";
import { useEffect, useState } from "react";
import { useProduct } from "../../context/product-context";
import {
  getSortedData,
  getSortByRatingData,
  getFilteredData,
} from "../../utils/index";

export default function ProductCard() {
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
      {filteredData.map(({ title, image, subtitle, price, rating }) => (
        <div className="cards">
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
            <button className="btn-card vertical-card">Add to cart</button>
            <button className="bg-none btn-card vertical-card">
              Add to Wishlist
            </button>
          </div>
        </div>
      ))}
    </>
  );
}


