"use client";

import React, { useState, useEffect } from "react";
import styles from "./ExampleSlider.module.scss";

import VerticalSlider from "@/app/components/Slider/VerticalSlider/VerticalSlider";
import { useAppSelector } from "@/lib/hooks";

const ExampleSlider = () => {
  //to get the manual value
  const [enabledSlide, setEnabledSlide] = useState(0);
  console.log(enabledSlide);
  console.log("enabledSlide");
  //to get the automatic value, defined on VerticalSlider
  const activeSlide = useAppSelector((state) => state.slideChecked.checked);

  const [definitiveActivationValue, setDefinitiveActivationValue] = useState(0);

  useEffect(() => {
    setDefinitiveActivationValue(activeSlide);
  }, [activeSlide]);
  useEffect(() => {
    setDefinitiveActivationValue(enabledSlide);
  }, [enabledSlide]);

  const autoSlide = true;
  //to indentify inputs
  const slideName = "review";

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
                definitiveActivationValue === 0
                  ? styles.auto_radio
                  : styles.autoradio1
              }
            />

            {slideContent.map((_, index) => {
              const activeSlideCorrect = definitiveActivationValue - 1;

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
                onClick={() => {
                  setEnabledSlide(0);
                }}
              ></label>

              {/*  //label for other inputs */}
              {slideContent.map((_, index) => (
                <label
                  key={index + 1}
                  htmlFor={`${slideName}-radio${index + 1}`}
                  className={styles.manual_radio}
                  onClick={() => {
                    setEnabledSlide(index + 1);
                  }}
                ></label>
              ))}
            </div>
          </div>
        </section>
      )
    }
  ];

  return (
    <div className={styles.player_slide}>
      <VerticalSlider
        autoSlide={autoSlide}
        namePrefix={slideName}
        firstContent={firstSlideContent}
        content={slideContent}
        navigationRadios={radios}
        enabledSlide={definitiveActivationValue}
      />
    </div>
  );
};

export default ExampleSlider;
