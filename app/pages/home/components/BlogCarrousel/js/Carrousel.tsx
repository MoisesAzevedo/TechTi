import React from "react";
import EmblaCarousel from "./EmblaCarousel";
import { EmblaOptionsType } from "embla-carousel";

/* service */
import { BlogArticle } from "@/app/utils/BlogArticles";
import Card from "../components/Card";

import "../css/base.css";
import "../css/sandbox.css";
import "../css/embla.css";

const OPTIONS: EmblaOptionsType = { loop: true, duration: 30 };

// Gerando JSX diretamente para os slides
const SLIDES = BlogArticle.map((article, index) => (
  <Card
    key={index}
    title={article.title}
    description={article.description}
    date={article.date}
  />
));

const Carrousel = () => {
  return <EmblaCarousel slides={SLIDES} options={OPTIONS} />;
};

export default Carrousel;
