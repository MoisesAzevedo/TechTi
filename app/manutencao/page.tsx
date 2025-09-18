"use client";

import styles from "./page.module.scss";
import ServiceButton from "@/app/components/Buttons/ServiceButton";
import { PhoneInput } from "@/components/Inputs";
import { Beneficios } from "./components";
import React, { useState } from "react";

export default function ManutencaoPage() {
  const [nome, setNome] = useState("");
  const [telefone, setTelefone] = useState("");
  const [email, setEmail] = useState("");
  const [empresa, setEmpresa] = useState("");
  const [funcionarios, setFuncionarios] = useState('');

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    console.log({ nome, telefone, email, empresa, funcionarios });
  };

  return (
    <div>
      <section className={styles.hero}>
        <div className={styles.videoBackground}>
          <video 
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
        
        <div className={styles.blueFilter}></div>
        <div className={styles.videoOverlay}></div>
        
        <div className={styles.heroContainer}>
          <div className={styles.heroContent}>
            <h1>Manutenção</h1>
            <p>
              Lorem ipsum dolor sit amet. Eum maxime quae et 
              optio rerum sed laborum accusantium rem quia 
              eaque. Lorem ipsum dolor sit amet.
            </p>
            <ServiceButton text="Lorem Ipsum" />
            
            <div className={styles.logoSection}>
              <div className={styles.logoItem}>LOGO</div>
              <div className={styles.logoItem}>LOGO</div>
              <div className={styles.logoItem}>LOGO</div>
            </div>
          </div>
          
          <div className={styles.formSection}>
            <form className={styles.contactForm} onSubmit={handleSubmit}>
              <div className={styles.formRow}>
                <input 
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
                type="email" 
                placeholder="Email*" 
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                required
                className={`${styles.formInput} ${styles.fullWidth}`}
              />
              
              <div className={styles.formRow}>
                <input 
                  type="text" 
                  placeholder="Empresa*" 
                  value={empresa}
                  onChange={(e) => setEmpresa(e.target.value)}
                  required
                  className={styles.formInput}
                />
                <div className={styles.numberInputContainer}>
                  <select 
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
              
              <button type="submit" className={styles.submitButton}>
                Enviar
              </button>
            </form>
          </div>
        </div>
      </section>
      
      <Beneficios />
    </div>
  );
}
