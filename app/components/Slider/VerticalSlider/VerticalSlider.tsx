"use client";

/* TUTORIAL IN docs/DOCS.TXT */

import styles from "./VerticalSlider.module.scss";
import React, { useState, useEffect, useRef } from "react";

import { useAppDispatch, useAppSelector } from "@/lib/hooks";
import { setChecked } from "@/lib/features/checkSlideSlice";

//type of props
interface SliderProps {
  autoSlide: boolean;
  namePrefix: string;
  firstContent: { item: React.ReactNode }[];
  content: { item: React.ReactNode }[];
  navigationRadios: { item: React.ReactNode }[];
  enabledSlide: number;
}

const Slider: React.FC<SliderProps> = ({
  autoSlide,
  namePrefix,
  firstContent,
  content,
  navigationRadios,
  enabledSlide
}) => {
  // radio input  on checked
  const dispatch = useAppDispatch();

  const activeSlide = useAppSelector((state) => state.slideChecked.checked);
  const autoSlideInterval = () => (autoSlide ? 7000 : 700000);

  const enabled = enabledSlide;

  const [sec, setSec] = useState(autoSlideInterval);

  const cardAreaRef = useRef<HTMLDivElement>(null);
  const moveItRef = useRef<HTMLDivElement>(null);
  const [cardHeight, setCardHeight] = useState<number>(0);

  //counter

  // o couter está muito conflitante entre multiplos sliders
  // ambos são atualizados ao mesmo tempo, pois é a mesma logica que os atualiza
  // ESSA LOGICA PRECISA SER ESCRITA AQUI, SENÃO ESSA COMPONENTIZAÇÃO NÃO FARÁ SENTIDO
  // ESTÁ MUITO POUCO COMPONENTIZADO, ESSE ARQUIVO TA QUASE REDUNDANTE TEM MUITA LOGICA
  // NOS NOVOS SLIDERS. ESSE ARQUIVO VAI SER MAIS RESOLUTIVO SE UTILIZARMOS
  // TODAS AS LOGICAS NELE, E DEIXARMOS OS NOVOS SLIDERS APENAS PARA CRIAR O JSX.
  // MELHOR UTILIZAR A LOGICA DE ATUALIZAÇÃO DE ESTADO AQUI, E ORIENTAR A CRIAÇÃO DE NOVOS SLICES
  // PARA CADA NOVO SLIDER, RECEBENDO O ESTADO DE SLIDE ATIVO.

  /* useEffect(() => {
    //content.legth get the legth of content + firstContent
    const interval = setInterval(() => {
      // setActiveSlide((prev) => (prev === content.length ? 0 : prev + 1));

      dispatch(setChecked(enabled === content.length ? 0 : enabled + 1));
    }, sec);

    return () => clearInterval(interval);
  }, [sec, content, dispatch]); */

  //get height of div move_it (to animation)
  useEffect(() => {
    if (moveItRef.current) {
      const height = moveItRef.current.getBoundingClientRect().height;
      setCardHeight(height);
    }
  }, []);

  return (
    <section className={styles.slider}>
      <div className={styles.slider_content}>
        {/* OS INVISBLE INPUTS ESTÃO INUTEIS AGORA, PODE REMOVER */}
        {/* these invisible inputs trigger styles defined in SCSS */}
        {/* <input
          type="radio"
          name={`${namePrefix}-radio`}
          id={`${namePrefix}-radio0`}
          className={styles[`radio0`]}
          checked={activeSlide === 0}
          onChange={() => {
            dispatch(setChecked(0));
            console.log(activeSlide);
          }}
        /> */}
        {/* {content.map((_, index) => {
          return (
            <input
              key={index}
              type="radio"
              name={`${namePrefix}-radio`}
              id={`${namePrefix}-radio${index + 1}`}
              className={styles[`radio${index + 1}`]}
              checked={activeSlide === index + 1}
              onChange={() => {
                dispatch(setChecked(index + 1));
                console.log(activeSlide);
              }}
            />
          );
        })}
 */}
        <section
          className={styles.card_area}
          onMouseEnter={() => {
            setSec(6000000);
          }}
          onMouseLeave={() => {
            setSec(autoSlideInterval);
          }}
          style={{ height: `${cardHeight + 10}px` }}
        >
          <div
            ref={moveItRef}
            className={styles.move_it}
            /* margin top animation (cardHeight + 10 due margin-top 10px ) */
            style={{
              marginTop: `-${enabled * (cardHeight + 10)}px`
            }}
          >
            {firstContent.map((slide, index) => (
              <React.Fragment key={index}>{slide.item}</React.Fragment>
            ))}
          </div>

          {content.map((slide, index) => (
            <>{slide.item} </>
          ))}
        </section>

        {navigationRadios.map((radios) => (
          <div
            className={styles.nav_container}
            onMouseEnter={() => {
              setSec(6000000);
            }}
            onMouseLeave={() => {
              setSec(autoSlideInterval);
            }}
          >
            {radios.item}
          </div>
        ))}
      </div>
    </section>
  );
};

export default Slider;
