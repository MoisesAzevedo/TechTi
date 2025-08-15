//Create the banner

import React from "react";
import EmblaCarousel from "./EmblaCarousel";
import { EmblaOptionsType } from "embla-carousel";

import "../style/sandbox.css";
import "../style/embla.css";
const OPTIONS: EmblaOptionsType = { loop: true, duration: 30 };
const SLIDE_COUNT = 3;
const SLIDES = Array.from(Array(SLIDE_COUNT).keys());

const Banner = () => {
  return <EmblaCarousel slides={SLIDES} options={OPTIONS} />;
};

export default Banner;
