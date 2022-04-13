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
                <div className="homecards horizontal homePage">
                  <div className="img_txt_onside">
                    <div className="image_div">
                      <img src={image} />
                    </div>
                    <div className="homecards-title-horizontal">
                      <p className="horizontal-card-title">{categoryName}</p>
                      <small>{description}</small>
                    </div>
                  </div>
                </div>
              </div>
            </Link>
          )
      )}
    </>
  );
}
