"use client";

import React, { useState, useEffect } from "react";
import styles from "./Players.module.scss";
import PLayersSlider from "../PlayersSlider/PlayersSlider";
import VerticalSlider from "@/app/components/Slider/VerticalSlider/VerticalSlider";

import { useAppDispatch, useAppSelector } from "@/lib/hooks";

const Players = () => {
  //to indentify inputs
  const slideName = "review";

  const activeSlide = useAppSelector((state) => state.slideChecked.checked);

  //first slide
  const firstSlideContent = [
    {
      item: (
        <div className={styles.primeiro}>
          <div className={styles.card1}>
            <div className="flex items-center text-[10px] gap-[10px] mt-[120px]">
              <img src="/icons/dot.png" className="w-[8px] h-[8px]" />
              <p className="text-[10px]">Serviço</p>
            </div>
            <p className="text-[14px] w-[170px] h-[105px]">
              Lorem ipsum dolor sit amet. Eum maxime quae et optio rerum sed
              laborum accusantium rem quia eaque.
            </p>
            <h1 className="text-[14px] text-white">Nome Sobrenome</h1>
            <div className="flex text-[10px] gap-[5px]">
              <p>Cargo</p>
              <p>|</p>
              <p>Empresa</p>
            </div>
          </div>
          <div className={styles.card2}>
            <video
              src="/videos/depoimento.mp4"
              controls
              className="h-[250px] mt-[5px]"
            ></video>

            <div className="pl-[10px]">
              <div className="flex items-center text-[10px] gap-[10px] ">
                <img
                  src="/icons/dot_secondary.png"
                  className="w-[8px] h-[8px]"
                />
                <p className="text-[10px]">Serviço</p>
              </div>
              <h3 className="text-[14px] text-[rgba(0, 34, 176, 1)] font-normal">
                Nome Sobrenome
              </h3>
              <div className="flex text-[10px] gap-[5px]">
                <p>Cargo</p>
                <p>|</p>
                <p>Empresa</p>
              </div>
            </div>
          </div>
        </div>
      )
    }
  ];

  //other slides
  const slideContent = Array.from({ length: 4 }, (_, index) => ({
    item: (
      <div key={index} className={styles.slide_box}>
        <div className={styles.card1}>
          <div className="flex items-center text-[10px] gap-[10px] mt-[120px]">
            <img src="/icons/dot.png" className="w-[8px] h-[8px]" />
            <p className="text-[10px]">Serviço</p>
          </div>
          <p className="text-[14px] w-[170px] h-[105px]">
            Lorem ipsum dolor sit amet. Eum maxime quae et optio rerum sed
            laborum accusantium rem quia eaque.
          </p>
          <h1 className="text-[14px] text-white">Nome Sobrenome</h1>
          <div className="flex text-[10px] gap-[5px]">
            <p>Cargo</p>
            <p>|</p>
            <p>Empresa</p>
          </div>
        </div>

        <div className={styles.card2}>
          <video
            src="/videos/depoimento.mp4"
            controls
            className="h-[250px] mt-[5px]"
          />
          <div className="pl-[10px]">
            <div className="flex items-center text-[10px] gap-[10px] ">
              <img src="/icons/dot_secondary.png" className="w-[8px] h-[8px]" />
              <p className="text-[10px]">Serviço</p>
            </div>
            <h3 className="text-[14px] text-[rgba(0, 34, 176, 1)] font-normal">
              Nome Sobrenome
            </h3>
            <div className="flex text-[10px] gap-[5px]">
              <p>Cargo</p>
              <p>|</p>
              <p>Empresa</p>
            </div>
          </div>
        </div>
      </div>
    )
  }));

  //radios styles
  const radios = [
    {
      item: (
        <section className={styles.navigation_area}>
          {/* automatic navigation */}
          <div className={styles.nav_auto}>
            <div
              className={
                activeSlide === 0 ? styles.auto_radio : styles.autoradio1
              }
            />

            {slideContent.map((_, index) => {
              console.log("activeSlide:", activeSlide);
              console.log("index:", index);

              const activeSlideCorrect = activeSlide - 1;

              return (
                <div
                  key={index}
                  className={
                    activeSlideCorrect === index
                      ? styles.auto_radio
                      : styles.autoradio1
                  }
                />
              );
            })}
          </div>

          {/* manual navigation */}
          <div className={styles.nav_manual}>
            <div>
              {/* //label for input 1 */}
              <label
                key={0}
                htmlFor={`${slideName}-radio0`}
                className={styles.manual_radio}
              ></label>

              {/*  //label for other inputs */}
              {slideContent.map((_, index) => (
                <label
                  key={index + 1}
                  htmlFor={`${slideName}-radio${index + 1}`}
                  className={styles.manual_radio}
                ></label>
              ))}
            </div>
          </div>
        </section>
      )
    }
  ];

  return (
    /*    <div className={styles.players_container}>
      <div className={styles.pLayers_text}>
        <h2>Contamos com os melhores player’s</h2>
        <p>
          Lorem ipsum dolor sit amet. Eum maxime quae et optio rerum sed laborum
          accusantium.
        </p>
      </div> */

    <div className={styles.player_slide}>
      {/* <PLayersSlider /> */}
      <VerticalSlider
        namePrefix={slideName}
        firstContent={firstSlideContent}
        content={slideContent}
        navigationRadios={radios}
      />
    </div>
    //</div>
  );
};

export default Players;
