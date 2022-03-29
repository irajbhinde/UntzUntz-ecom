import { Link } from "react-router-dom"

import tinlicker_hero from "../../../assets/home_page_images/tinlicker.png"
import benbohmer_hero from "../../../assets/home_page_images/ben_bohmer.png"

export default function HomePageHero(){
    return(
        <Link to="/productlisting">
                <div class="home-hero">
                    <img
                        class="padding-bottom"
                        src={benbohmer_hero}
                        alt="Error" />
                    <img src={tinlicker_hero} alt="Error" />
                </div>
        </Link>
    )
}