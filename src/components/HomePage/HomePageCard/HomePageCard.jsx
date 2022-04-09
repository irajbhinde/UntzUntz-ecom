import { Link } from "react-router-dom";
import { categories } from "../../../backend/db/categories";
import { useProduct } from "../../context/product-context";

export default function HomePageCard({navigationByCategory}) {
  const {state,dispatch} = useProduct();
  return (
    <>
      {categories.map(
        ({ categoryName, image, bottom }) =>
          !bottom && (
            <Link to="/productlisting">
              <div 
              onClick={()=>navigationByCategory(categoryName)}
              className="textovermedia">
                <div className="img_text">
                  <div className="cards-image">
                    <img src={image} />
                  </div>
                  <div className="cards-title onimage">
                    <h4 className="strip">{categoryName}</h4>
                  </div>
                </div>
              </div>
            </Link>
          )
      )}
    </>
  );
}
