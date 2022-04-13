import { v4 as uuid } from "uuid";
import {
  trending,
  grouptherapy,
  newarrivals,
  cds,
  poster,
  vinyl,
  clothing } from "../../assets/index"
/**
 * Category Database can be added here.
 * You can add category of your wish with different attributes
 * */

export const categories = [
  {
    _id: uuid(),
    categoryName: "Anjunadeep",
    image: grouptherapy,
    bottom: false,
  },
  {
    _id: uuid(),
    categoryName: "Anjunabeats",
    image: clothing,
    bottom: false,
  },
  {
    _id: uuid(),
    categoryName: "Above And Beyond",
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
