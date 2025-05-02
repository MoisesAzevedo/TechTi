"use client";

import React, { useRef, useState } from "react";
import { EmblaOptionsType } from "embla-carousel";
import useEmblaCarousel from "embla-carousel-react";
import Fade from "embla-carousel-fade";
import {
  NextButton,
  PrevButton,
  usePrevNextButtons
} from "./EmblaCarouselArrowButtons";
import { DotButton, useDotButton } from "./EmblaCarouselDotButton";
import Autoplay from "embla-carousel-autoplay";
import { useAutoplay } from "./EmblaCarouselAutoplay";

type PropType = {
  slides: number[];
  options?: EmblaOptionsType;
};

const EmblaCarousel: React.FC<PropType> = (props) => {
  const { slides, options } = props;
  const sec = 5000;
  const [delay, setDelay] = useState(sec);

  const [emblaRef, emblaApi] = useEmblaCarousel(options, [
    Fade(),
    Autoplay({ playOnInit: true, delay: delay })
  ]);

  const { autoplayIsPlaying, toggleAutoplay, onAutoplayButtonClick } =
    useAutoplay(emblaApi);

  console.log(autoplayIsPlaying);
  console.log("autoplayIsPlaying");

  const { selectedIndex, scrollSnaps, onDotButtonClick } =
    useDotButton(emblaApi);

  const {
    prevBtnDisabled,
    nextBtnDisabled,
    onPrevButtonClick,
    onNextButtonClick
  } = usePrevNextButtons(emblaApi);

  return (
    <div className="embla" onMouseUp={() => toggleAutoplay()}>
      <div className="embla__viewport" ref={emblaRef}>
        <div className="embla__container">
          {slides.map((index) => (
            <div className="embla__slide" key={index}>
              <img
                className="embla__slide__img"
                src={`https://picsum.photos/600/350?v=${index}`}
                alt="Your alt text"
              />
            </div>
          ))}
        </div>
      </div>

      <section className="controls_wrapper">
        <div className="embla__controls" onMouseEnter={() => setDelay(sec)}>
          <div className="embla__dots">
            {scrollSnaps.map((_, index) => (
              <DotButton
                key={index}
                onClick={() => onDotButtonClick(index)}
                className={"embla__dot".concat(
                  index === selectedIndex ? " embla__dot--selected" : ""
                )}
              />
            ))}
          </div>

          <div className="embla__buttons">
            <PrevButton
              onClick={onPrevButtonClick}
              disabled={prevBtnDisabled}
            />
            <NextButton
              onClick={onNextButtonClick}
              disabled={nextBtnDisabled}
            />
          </div>
        </div>
      </section>
    </div>
  );
};

export default EmblaCarousel;
