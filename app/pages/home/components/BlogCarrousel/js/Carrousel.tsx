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

const SLIDES = BlogArticle.map((article, index) => (
  <Card
    key={index}
    imageUrl={article.image}
    category={article.category}
    title={article.title}
    description={article.description}
    date={article.date}
    article={article.article || ""}
  />
));

const SlideView = SLIDES.reduce<JSX.Element[][]>((result, slide, index) => {
  const chunkIndex = Math.floor(index / 3);

  if (!result[chunkIndex]) {
    result[chunkIndex] = []; // Cria um novo grupo
  }

  result[chunkIndex].push(slide);

  return result;
}, []);

const Carrousel = () => {
  return <EmblaCarousel slides={SlideView} options={OPTIONS} />;
};

export default Carrousel;
