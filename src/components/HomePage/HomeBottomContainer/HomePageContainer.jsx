import { Link } from "react-router-dom";

import { categories } from "../../../backend/db/categories";

export default function HomePageContainer() {
  return (
    <>
      {categories.map(
        ({ categoryName, image, description, bottom }) =>
          bottom && (
            <Link to="/productlisting">
              <div className="bottom-container">
                <div className="cards horizontal">
                  <div className="img_txt_onside">
                    <div className="image_div">
                      <img src={image} />
                    </div>
                    <div className="cards-title-horizontal">
                      <p className="horizontal-card-title">{categoryName}</p>
                      <small>{description}</small>
                    </div>
                  </div>
                </div>
              </div>
            </Link>
          )
      )}

      {/* /* <Link to="/productlisting">
        <div className="bottom-container">
          <div className="cards horizontal">
            <div className="img_txt_onside">
              <div className="image_div">
                <img src={newarrivals} />
              </div>
              <div className="cards-title-horizontal">
                <p className="horizontal-card-title">New Arrivals</p>
                <small>
                  All the latest music releases from around the world as soon as
                  they drop!
                </small>
              </div>
            </div>
          </div>
        </div>
      </Link>  */}
      {/* <Link to="/productlisting">
        <div className="bottom-container">
          <div className="cards horizontal">
            <div className="img_txt_onside">
              <div className="image_div">
                <img src={trending} />
              </div>
              <div className="cards-title-horizontal">
                <p className="horizontal-card-title">Trending</p>
                <small>
                  Viral, trending & taking off! A combination of top chart &
                  viral trends, all your favorites in one place.
                </small>
              </div>
            </div>
          </div>
        </div>
      </Link> */}
    </>
  );
}
