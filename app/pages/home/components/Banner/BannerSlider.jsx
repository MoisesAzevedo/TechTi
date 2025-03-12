"use client";

import styles from "./BannerSlider.module.scss";
import React, { useState, useEffect, useRef } from "react";

const BannerSlider = () => {
  const [checked, setChecked] = useState(1);
  const [count, setCount] = useState(7000);

  //counter
  useEffect(() => {
    const intervalo = setInterval(() => {
      proximaImg();
    }, count);

    return () => clearInterval(intervalo);
  }, [count]);

  const proximaImg = () => {
    setChecked((check) => (check === 6 ? 1 : check + 1));
  };

  return (
    <section className={styles.slider}>
      <div className={styles.slider_content}>
        <input
          type="radio"
          name="btn-radio"
          id="radio1"
          className={styles.radio1}
          checked={checked === 1}
          onChange={() => {
            setChecked(1);
          }}
        />
        <input
          type="radio"
          name="btn-radio"
          id="radio2"
          className={styles.radio2}
          checked={checked === 2}
          onChange={() => {
            setChecked(2);
          }}
        />
        <input
          type="radio"
          name="btn-radio"
          id="radio3"
          className={styles.radio3}
          checked={checked === 3}
          onChange={() => {
            setChecked(3);
          }}
        />
        <input
          type="radio"
          name="btn-radio"
          id="radio4"
          className={styles.radio4}
          checked={checked === 4}
          onChange={() => {
            setChecked(4);
          }}
        />
        <input
          type="radio"
          name="btn-radio"
          id="radio5"
          className={styles.radio5}
          checked={checked === 5}
          onChange={() => {
            setChecked(5);
          }}
        />
        <input
          type="radio"
          name="btn-radio"
          id="radio6"
          className={styles.radio6}
          checked={checked === 6}
          onChange={() => {
            setChecked(6);
          }}
        />

        <div className={styles.primeiro}>
          <img
            className="w-[100%] top-0 z-[-1] "
            src="/img/Banner.jpg"
            alt=""
          />
        </div>
        <div className={styles.slide_box}>
          <img
            className="w-[100%] top-0 z-[-1] "
            src="/img/Banner2.jpg"
            alt=""
          />
        </div>
        <div className={styles.slide_box}>
          <img
            className="w-[100%] top-0 z-[-1] "
            src="/img/Banner3.jpg"
            alt=""
          />
        </div>

        <div className={styles.slide_box}>
          <img
            className="w-[100%] top-0 z-[-1] "
            src="/img/Banner.jpg"
            alt=""
          />
        </div>
        <div className={styles.slide_box}>
          <img
            className="w-[100%] top-0 z-[-1] "
            src="/img/Banner2.jpg"
            alt=""
          />
        </div>
        <div className={styles.slide_box}>
          <img
            className="w-[100%] top-0 z-[-1] "
            src="/img/Banner3.jpg"
            alt=""
          />
        </div>

        {/* automatic navigation */}
        <div className={styles.nav_auto}>
          <div className={styles.auto_btn1}> </div>
          <div className={styles.auto_btn2}></div>
          <div className={styles.auto_btn3}></div>
          <div className={styles.auto_btn4}></div>
          <div className={styles.auto_btn5}></div>
          <div className={styles.auto_btn6}></div>
        </div>

        {/* manual navigation */}
        <div className={styles.nav_manual}>
          <div
            onMouseEnter={() => {
              setCount(6000000);
            }}
            onMouseLeave={() => {
              setCount(7000);
            }}
          >
            <label htmlFor="radio1" className={styles.manual_btn}></label>
            <label htmlFor="radio2" className={styles.manual_btn}></label>
            <label htmlFor="radio3" className={styles.manual_btn}></label>
            <label htmlFor="radio4" className={styles.manual_btn}></label>
            <label htmlFor="radio5" className={styles.manual_btn}></label>
            <label htmlFor="radio6" className={styles.manual_btn}></label>
          </div>
        </div>
      </div>
    </section>
  );
};

export default BannerSlider;
