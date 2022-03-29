import { Link } from "react-router-dom";
import { categories } from "../../../backend/db/categories";

export default function HomePageCard() {
  return (
    <>
      {categories.map(
        ({ categoryName, image, bottom }) =>
          !bottom && (
            <Link to="/productlisting">
              <div className="cards textovermedia">
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
