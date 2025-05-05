import React from "react";
/* component */
import Card from "../components/Card";
import EmblaCarousel from "./EmblaCarousel";
import { EmblaOptionsType } from "embla-carousel";

/* service */
import { BlogArticle } from "@/app/utils/BlogArticles";

/* style */
import "../css/base.css";
import "../css/sandbox.css";
import "../css/embla.css";

const OPTIONS: EmblaOptionsType = { loop: true, duration: 30 };

// Gerando JSX diretamente para os slides
const SLIDES = BlogArticle.map((article, index) => (
  <Card
    key={index}
    imageUrl={article.image}
    category={article.category}
    title={article.title}
    description={article.description}
    date={article.date}
  />
));

const Carrousel = () => {
  return <EmblaCarousel slides={SLIDES} options={OPTIONS} />;
};

export default Carrousel;
