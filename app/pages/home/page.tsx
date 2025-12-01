import styles from "./page.module.scss";
import Link from "next/link";
/* components */
/* import BannerSlider from "./components/Banner/BannerSlider"; */

import DefaultCarousel from "@/app/components/Carousels/DefaultCarousel";
import ReviewSlider from "./components/ReviewSlider/ReviewSlider";
import Players from "./components/Players/Players";
import Banner from "./components/Banner/components/Banner";
import BlogCarrousel from "./components/BlogCarrousel/BlogCarrousel";
import MessageForm from "./components/MessageForm/MessageForm";
import NewsLetter from "./components/NewsLetter/NewsLetter";
import MouseShadowEffect, {
  AnimatedElement,
} from "./components/MouseShadowEffect";
import GradientText from "@/app/styles/GradientText";

export default function HomePage() {
  return (
    <div className="flex flex-col" data-name="home-root">
      <Banner />
      <section className={styles.cases}>
        <h1 data-name="cases-title">Nossos cases de sucesso</h1>
        <DefaultCarousel />
      </section>
      <section className={styles.reviews}>
        <div className={styles.text} data-name="reviews-text">
          <GradientText as="h2">
            O que nossos clientes falam sobre nós?
          </GradientText>
          <p className={styles.intro} data-name="reviews-intro">
            Nossos clientes reconhecem a excelência de nossos processos e a
            qualidade dos serviços que oferecemos.
          </p>
        </div>

        <ReviewSlider />
      </section>
      <section className={styles.soluctions}>
        <MouseShadowEffect
          effectImage="/effects/blue-light.png"
          size={1600}
          opacity={1.0}
          blur={30}
        />
        <AnimatedElement className={styles.intro} direction="up" delay={0.1}>
          <h1 data-name="solutions-title">
            Soluções que se <br />
            adaptam ao seu ecossistema
          </h1>

          <p data-name="solutions-desc">
            Lorem ipsum dolor sit amet. Eum maxime quae et optio rerum sed
            laborum accusantium rem quia eaque. Lorem ipsum dolor sit amet. Eum
            maxime quae et optio rerum sed laborum accusantium rem quia eaque.
          </p>
        </AnimatedElement>

        <div className={styles.services} data-name="services">
          <AnimatedElement direction="left" delay={0.2}>
            <div className={styles.services_box} data-name="service-infra-box">
              <div
                className={`${styles.services_view} ${styles.infraestrutura}`}
                data-name="service-infra-view"
              >
                <div
                  className={styles.view_name}
                  data-name="service-infra-view-name"
                >
                  <img
                    src="/icons/shadow_blue_dot.png"
                    data-name="icon-shadow-blue"
                  />
                  <h1 data-name="infra-title">Infraestrutura</h1>
                </div>
              </div>

              <div
                className={styles.services_text}
                data-name="service-infra-text"
              >
                <div data-name="service-infra-text-inner">
                  <p data-name="infra-desc">
                    Otimize sua infraestrutura de TI para alcançar o máximo
                    desempenho do seu operacional.
                  </p>
                </div>

                <button data-name="infra-cta">
                  <h1 data-name="infra-cta-title">Saiba Mais</h1>
                  <img src="/icons/arrow.png" data-name="icon-arrow" />
                </button>
              </div>
            </div>
          </AnimatedElement>

          <AnimatedElement direction="right" delay={0.3}>
            <div
              className={styles.services_box}
              data-name="service-consultoria-box"
            >
              <div
                className={styles.services_text}
                data-name="service-consultoria-text"
              >
                <div data-name="service-consultoria-text-inner">
                  <p data-name="consultoria-desc">
                    Amplie o horizonte dos seus serviços. Descubra o potencial
                    da tecnologia através da nossa consultoria personalizada,
                    adaptada especialmente para o seu tipo de negócio
                  </p>
                </div>

                <button data-name="consultoria-cta">
                  <h1 data-name="consultoria-cta-title">Saiba Mais</h1>
                  <img src="/icons/arrow.png" data-name="icon-arrow" />
                </button>
              </div>

              <div
                className={`${styles.services_view_variant} ${styles.consultoria}`}
                data-name="service-consultoria-view"
              >
                <div
                  className={styles.view_name}
                  data-name="service-consultoria-view-name"
                >
                  <img
                    src="/icons/shadow_blue_dot.png"
                    data-name="icon-shadow-blue"
                  />
                  <h1 data-name="consultoria-title">Consultoria</h1>
                </div>
              </div>
            </div>
          </AnimatedElement>

          <AnimatedElement direction="left" delay={0.4}>
            <div className={styles.services_box} data-name="service-gestao-box">
              <div
                className={`${styles.services_view} ${styles.gestao}`}
                data-name="service-gestao-view"
              >
                <div
                  className={styles.view_name}
                  data-name="service-gestao-view-name"
                >
                  <img
                    src="/icons/shadow_blue_dot.png"
                    data-name="icon-shadow-blue"
                  />
                  <h1 data-name="gestao-title">Gestão de TI</h1>
                </div>
              </div>

              <div
                className={styles.services_text}
                data-name="service-gestao-text"
              >
                <div data-name="service-gestao-text-inner">
                  <p data-name="gestao-desc">
                    Maximize a eficiência e segurança da sua infraestrutura de
                    TI hoje mesmo.
                  </p>
                </div>

                <button data-name="gestao-cta">
                  <h1 data-name="gestao-cta-title">Saiba Mais</h1>
                  <img src="/icons/arrow.png" data-name="icon-arrow" />
                </button>
              </div>
            </div>
          </AnimatedElement>

          <AnimatedElement direction="right" delay={0.5}>
            <div
              className={styles.services_box}
              data-name="service-manutencao-box"
            >
              <div
                className={styles.services_text}
                data-name="service-manutencao-text"
              >
                <div data-name="service-manutencao-text-inner">
                  <p data-name="manutencao-desc">
                    Evite despesas adicionais com a compra de equipamentos
                    novos.
                  </p>
                </div>

                <Link href="/manutencao">
                  <button data-name="manutencao-cta">
                    <h1 data-name="manutencao-cta-title">Saiba Mais</h1>
                    <img src="/icons/arrow.png" data-name="icon-arrow" />
                  </button>
                </Link>
              </div>

              <div
                className={`${styles.services_view_variant} ${styles.manutencao}`}
                data-name="service-manutencao-view"
              >
                <div
                  className={styles.view_name}
                  data-name="service-manutencao-view-name"
                >
                  <img
                    src="/icons/shadow_blue_dot.png"
                    data-name="icon-shadow-blue"
                  />
                  <h1 data-name="manutencao-title">Manutenção</h1>
                </div>
              </div>
            </div>
          </AnimatedElement>
        </div>

        <AnimatedElement direction="up" delay={0.6}>
          <div className={styles.guarantee} data-name="guarantee">
            <div data-name="guarantee-text">
              <h2 data-name="guarantee-title">
                A melhor TI <br />
                com garantia de:
              </h2>

              <div className={styles.guarantee_list} data-name="guarantee-list">
                <div data-name="guarantee-item-1">
                  <img
                    src="/icons/blue_dot.png"
                    alt=""
                    data-name="icon-blue-dot"
                  />
                  <p data-name="guarantee-1">Constância operacional;</p>
                </div>
                <div data-name="guarantee-item-2">
                  <img
                    src="/icons/blue_dot.png"
                    alt=""
                    data-name="icon-blue-dot"
                  />
                  <p data-name="guarantee-2">Reparos duradouros;</p>
                </div>
                <div data-name="guarantee-item-3">
                  <img
                    src="/icons/blue_dot.png"
                    alt=""
                    data-name="icon-blue-dot"
                  />
                  <p data-name="guarantee-3">Corte de gastos desnecessários;</p>
                </div>
                <div data-name="guarantee-item-4">
                  <img
                    src="/icons/blue_dot.png"
                    alt=""
                    data-name="icon-blue-dot"
                  />
                  <p data-name="guarantee-4">Eficiência de equipe;</p>
                </div>
              </div>
            </div>

            <div className={styles.guarantee_img} data-name="guarantee-img">
              <img
                src="img/soluctions/man.png"
                className=" "
                data-name="guarantee-img-man"
              />
            </div>
          </div>
        </AnimatedElement>
      </section>

      <section className={styles.players}>
        <Players />
      </section>

      <div className={styles.blog_carrousel}>
        <BlogCarrousel />
      </div>

      <div className={styles.message_form}>
        <MessageForm />
      </div>

      <div className={styles.newsletter}>
        <NewsLetter />
      </div>
    </div>
  );
}
