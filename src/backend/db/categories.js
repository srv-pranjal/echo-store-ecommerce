import { v4 as uuid } from "uuid";
import {
  mobile,
  headphone,
  smartwatch,
  laptop,
  speaker,
  storage,
} from "assets";

/**
 * Category Database can be added here.
 * You can add category of your wish with different attributes
 * */

export const categories = [
  {
    _id: uuid(),
    categoryName: "Mobiles",
    image: mobile,
    altText: "Mobiles",
  },
  {
    _id: uuid(),
    categoryName: "Laptops",
    image: laptop,
    altText: "Laptops",
  },
  {
    _id: uuid(),
    categoryName: "Headphones",
    image: headphone,
    altText: "Headphones",
  },
  {
    _id: uuid(),
    categoryName: "Speakers",
    image: speaker,
    altText: "Speakers",
  },
  {
    _id: uuid(),
    categoryName: "Smartwatches",
    image: smartwatch,
    altText: "Smartwatches",
  },
  {
    _id: uuid(),
    categoryName: "Storage Devices",
    image: storage,
    altText: "Storage Devices",
  },
];
