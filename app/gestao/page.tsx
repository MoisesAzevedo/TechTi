"use client";

import styles from "./page.module.scss";
import ServiceButton from "@/app/components/Buttons/ServiceButton";
import DefaultButton from "@/app/components/Buttons/DefaultButton";
import { PhoneInput } from "@/components/Inputs";

import React, { useState } from "react";

import GradientText from "@/app/styles/GradientText";
import FAQ from "@/app/components/FAQ";
import { faqItems } from "../manutencao/components/utils/faqItems";

export default function GestaoPage() {
  const [nome, setNome] = useState("");
  const [telefone, setTelefone] = useState("");
  const [email, setEmail] = useState("");
  const [empresa, setEmpresa] = useState("");
  const [funcionarios, setFuncionarios] = useState("");

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    console.log({ nome, telefone, email, empresa, funcionarios });
  };

  return (
    <div
      data-name="gestao-page-root"
      className="flex flex-col justify-center items-center w-full mb-40"
    >
      <section data-name="gestao-hero" className={styles.hero}>
        <div
          data-name=" gestao-videoBackground"
          className={styles.videoBackground}
        >
          <video
            data-name=" gestao-background-video"
            className={styles.backgroundVideo}
            autoPlay
            muted
            loop
            playsInline
            preload="auto"
          >
            <source src="/videos/background/ondas.mp4" type="video/mp4" />
            Seu navegador não suporta a tag de vídeo.
          </video>
        </div>

        <div data-name=" gestao-blueFilter" className={styles.blueFilter}></div>
        <div
          data-name=" gestao-videoOverlay"
          className={styles.videoOverlay}
        ></div>

        <div data-name=" gestao-heroContainer" className={styles.heroContainer}>
          <div data-name=" gestao-heroContent" className={styles.heroContent}>
            <h1 data-name=" gestao-hero-title">Gestão</h1>
            <p data-name=" gestao-hero-description">
              Lorem ipsum dolor sit amet. Eum maxime quae et optio rerum sed
              laborum accusantium rem quia eaque. Lorem ipsum dolor sit amet.
            </p>
            <ServiceButton text="Lorem Ipsum" />

            <div data-name=" gestao-logoSection" className={styles.logoSection}>
              <div data-name=" gestao-logoItem" className={styles.logoItem}>
                LOGO
              </div>
              <div data-name=" gestao-logoItem" className={styles.logoItem}>
                LOGO
              </div>
              <div data-name=" gestao-logoItem" className={styles.logoItem}>
                LOGO
              </div>
            </div>
          </div>

          <div data-name=" gestao-formSection" className={styles.formSection}>
            <form
              data-name=" gestao-contactForm"
              className={styles.contactForm}
              onSubmit={handleSubmit}
            >
              <div data-name=" gestao-formRow-1" className={styles.formRow}>
                <input
                  data-name="input-nome"
                  type="text"
                  placeholder="Nome*"
                  value={nome}
                  onChange={(e) => setNome(e.target.value)}
                  required
                  className={styles.formInput}
                />
                <PhoneInput
                  value={telefone}
                  onChange={setTelefone}
                  placeholder="Telefone*"
                  required
                  className={styles.formInput}
                />
              </div>

              <input
                data-name="input-email"
                type="email"
                placeholder="Email*"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                required
                className={`${styles.formInput} ${styles.fullWidth}`}
              />

              <div data-name=" gestao-formRow-2" className={styles.formRow}>
                <input
                  data-name="input-empresa"
                  type="text"
                  placeholder="Empresa*"
                  value={empresa}
                  onChange={(e) => setEmpresa(e.target.value)}
                  required
                  className={styles.formInput}
                />
                <div
                  data-name=" gestao-numberInputContainer"
                  className={styles.numberInputContainer}
                >
                  <select
                    data-name="select-funcionarios"
                    value={funcionarios}
                    onChange={(e) => setFuncionarios(e.target.value)}
                    required
                    className={`${styles.formInput} ${styles.select}`}
                  >
                    <option value="">Número de Funcionários*</option>
                    <option value="1-10">1-10</option>
                    <option value="11-50">11-50</option>
                    <option value="51-100">51-100</option>
                    <option value="101-500">101-500</option>
                    <option value="500+">500+</option>
                  </select>
                </div>
              </div>

              <button
                data-name="button-submit"
                type="submit"
                className={styles.submitButton}
              >
                Enviar
              </button>
            </form>
          </div>
        </div>
      </section>

      <section
        data-name="faq-content"
        className="flex flex-col items-center gap-[60px]"
      >
        <div data-name="faq-button-wrapper" className="  flex justify-center">
          <DefaultButton value="FAQ" />
        </div>

        <div
          data-name="faq-title-wrapper"
          className={`${styles.faqTitleWrapper} flex justify-center mt-8`}
        >
          <GradientText
            data-name="faq-title"
            className={styles.faqTitle}
            as="h1"
          >
            Perguntas Frequentes
          </GradientText>
        </div>
        <div className="w-full max-w-main-phone tablet:max-w-main-tablet desktop:max-w-main-desktop mx-auto mt-6 px-6">
          <FAQ items={faqItems} singleOpen={false} />
        </div>

        <section className="flex flex-col justify-center items-center gap-8">
          <div
            data-name="cta-subtitle-wrapper"
            className="flex justify-center  mt-4 w-[450px]"
          >
            <GradientText
              as="h1"
              className="text-xl text-center"
              variant="grey-gradient"
            >
              Mergulhe no mundo da Tecnologia.
            </GradientText>
          </div>
          <p className="flex items-center justify-center w-[590px] text-center">
            Lorem ipsum dolor sit amet. Eum maxime quae et optio rerum sed
            laborum accusantium rem quia eaque. Lorem ipsum dolor sit amet.
          </p>

          <div className="flex justify-center mt-4">
            <DefaultButton
              value="Solicite seu orçamento"
              className="bg-primary  border-none hover:bg-[#CCD6FF] hover:shadow-[0_0_6px_#CCD6FF] min-w-[137px] w-max h-[39px] px-4 text-[#030B4D] text-[16px] font-bold whitespace-nowrap"
            />
          </div>
        </section>
      </section>
    </div>
  );
}
