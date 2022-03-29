import { v4 as uuid } from "uuid";

import grouptherapy from "../../assets/home_page_images/image_gt.jpg";
import clothing from "../../assets/home_page_images/image_lane8_model.jpg";
import vinyl from "../../assets/home_page_images/image_hp_vinyl.png";
import poster from "../../assets/home_page_images/poster.png";
import cds from "../../assets/home_page_images/image_cd.png";
import newarrivals from "../../assets/home_page_images/bottom_1.jpg";
import trending from "../../assets/home_page_images/bottom_2.jpg";

/**
 * Category Database can be added here.
 * You can add category of your wish with different attributes
 * */

export const categories = [
  {
    _id: uuid(),
    categoryName: "Digital Download",
    image: grouptherapy,
    bottom: false,
  },
  {
    _id: uuid(),
    categoryName: "Clothing",
    image: clothing,
    bottom: false,
  },
  {
    _id: uuid(),
    categoryName: "Vinyl",
    image: vinyl,
    bottom: false,
  },
  {
    _id: uuid(),
    categoryName: "Posters",
    image: poster,
    bottom: false,
  },
  {
    _id: uuid(),
    categoryName: "CDs",
    image: cds,
    bottom: false,
  },
  {
    _id: uuid(),
    categoryName: "New Arrivals",
    image: newarrivals,
    bottom: true,
    description:
      "All the latest music releases from around the world as soon as they drop!",
  },
  {
    _id: uuid(),
    categoryName: "Trending",
    image: trending,
    bottom: true,
    description:
      "Viral, trending & taking off! A combination of top chart & viral trends, all your favorites in one place.",
  },
];
