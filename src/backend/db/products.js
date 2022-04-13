import { v4 as uuid } from "uuid";
import {
  icarus,
  myon,
  orion,
  dosem,
  ab,
  myon2,
  bohmer,
  arty
} from "../../assets/index"

/**
 * Product Database can be added here.
 * You can add products of your wish with different attributes
 * */

export const products = [
  {
    _id: uuid(),
    title: "Icasuras",
    subtitle: "Only",
    price: 1000,
    categoryName: "Anjunadeep",
    rating: "4",
    image: icarus
  },
  {
    _id: uuid(),
    title: "Myon feat. Alissa Feudo",
    subtitle: "Moon",
    price: 200,
    categoryName: "Anjunabeats",
    rating: "3.5",
    image: myon
  },
  {
    _id: uuid(),
    title: "Orion",
    subtitle: "Your love",
    price: 500,
    categoryName: "Anjunabeats",
    rating: "4.5",
    image: orion
  },
  {
    _id: uuid(),
    title: "Dosem",
    subtitle: "Digital Futures EP",
    price: 550,
    categoryName: "Anjunadeep",
    rating: "4.1",
    image: dosem
  },
  {
    _id: uuid(),
    title: "Above & Beyond",
    subtitle: "Group Therapy",
    price: 3000,
    categoryName: "Above_And_Beyond",
    rating: "5",
    image: ab
  },
  {
    _id: uuid(),
    title: "Myon",
    subtitle: "Moon EP",
    price: 540,
    categoryName: "Anjunabeats",
    Anjunadeep:true,
    rating: "1",
    image: myon2
  },
  {
    _id: uuid(),
    title: "Ben Bohmer",
    subtitle: "Home Appariton EP",
    price: 2000,
    categoryName: "Anjunadeep",
    Anjunadeep:true,
    rating: "5",
    image: bohmer
  },
  {
    _id: uuid(),
    title: "Arty & Matt Zoo",
    subtitle: "Rebound",
    price: 1500,
    categoryName: "Anjunabeats",
    rating: "2",
    image: arty
  }
];
