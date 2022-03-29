import { v4 as uuid } from "uuid";

import grouptherapy from "../../assets/home_page_images/image_gt.jpg";
import clothing from "../../assets/home_page_images/image_lane8_model.jpg";
import vinyl from "../../assets/home_page_images/image_hp_vinyl.png";
import poster from "../../assets/home_page_images/poster.png";
import cds from "../../assets/home_page_images/image_cd.png";

/**
 * Category Database can be added here.
 * You can add category of your wish with different attributes
 * */

export const categories = [
  {
    _id: uuid(),
    categoryName: "Digital Download",
    image: grouptherapy,
  },
  {
    _id: uuid(),
    categoryName: "Clothing",
    image: clothing,
  },
  {
    _id: uuid(),
    categoryName: "Vinyl",
    image: vinyl,
  },
  {
    _id: uuid(),
    categoryName: "Posters",
    image: poster,
  },
  {
    _id: uuid(),
    categoryName: "CDs",
    image: cds,
  },
];
