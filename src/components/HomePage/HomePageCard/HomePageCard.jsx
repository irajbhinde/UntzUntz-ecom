import { Link } from "react-router-dom";
import { categories } from "../../../backend/db/categories";

export default function HomePageCard(){
    return(
        categories.map(({categoryName, image}) => (
            <div class="home-cards">
                   <Link to="/productlisting">
                        <div class="cards textovermedia">
                            <div class="img_text">
                                <div class="cards-image">
                                    <img src={image} />
                                </div>
                                <div class="cards-title onimage">
                                    <h4 class="strip">{categoryName}</h4>
                                </div>
                            </div>
                        </div>
                    </Link>
                    {/* <Link to="/productlisting">
                        <div class="cards textovermedia">
                            <div class="img_text">
                                <div class="cards-image">
                                    <img src={image} />
                                </div>
                                <div class="cards-title onimage">
                                    <h4 class="strip">{categoryName}</h4>
                                </div>
                            </div>
                        </div>
                    </Link>
                    <Link to="/productlisting">
                        <div class="cards textovermedia">
                            <div class="img_text">
                                <div class="cards-image">
                                    <img src={image} />
                                </div>
                                <div class="cards-title onimage">
                                    <h4 class="strip">{categoryName}</h4>
                                </div>
                            </div>
                        </div>
                    </Link>
                    <Link to="/productlisting">
                        <div class="cards textovermedia">
                            <div class="img_text">
                                <div class="cards-image">
                                    <img src={image} />
                                </div>
                                <div class="cards-title onimage">
                                    <h4 class="strip">{categoryName}</h4>
                                </div>
                            </div>
                        </div>
                    </Link>
                    <Link to="/productlisting">
                        <div class="cards textovermedia">
                            <div class="img_text">
                                <div class="cards-image">
                                    <img src={image} />
                                </div>
                                <div class="cards-title onimage">
                                    <h4 class="strip">{categoryName}</h4>
                                </div>
                            </div>
                        </div>
                    </Link> */}
                </div>
                ))
                
    )
    
}