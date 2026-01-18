"use client";
import React from "react";
import styles from "./carrousel.module.scss";
import ClientSlider from "../../../../pages/home/components/ClientSlider/ClientSlider";

const Carrousel: React.FC = () => {
  return (
    <section
      data-name="manutencao-carrousel-section"
      className={styles.reviews}
    >
      <div data-name="carrousel-text" className={styles.text}>
        <h2 data-name="carrousel-title" className="text-[32px] ">
          Quem confiou seus equipamentos a nós.
        </h2>
        <p data-name="carrousel-intro" className={styles.intro}>
          {" "}
          Lorem ipsum dolor sit amet. Eum maxime quae et optio rerum sed laborum
          accusantium rem quia eaque.
        </p>
      </div>
      <div data-name="slider" className="ml-auto">
        <ClientSlider />
      </div>
    </section>
  );
};

export default Carrousel;
