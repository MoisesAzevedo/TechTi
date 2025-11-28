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
    <div className="flex flex-col">
      <Banner />
      <section className={styles.cases}>
        <h1>Nossos cases de sucesso</h1>
        <DefaultCarousel />
      </section>
      <section className={styles.reviews}>
        <div className={styles.text}>
          <GradientText as="h2">
            O que nossos clientes falam sobre nós?
          </GradientText>
          <p className={styles.intro}>
            {" "}
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
          <h1>
            Soluções que se <br />
            adaptam ao seu ecossistema
          </h1>

          <p>
            Lorem ipsum dolor sit amet. Eum maxime quae et optio rerum sed
            laborum accusantium rem quia eaque. Lorem ipsum dolor sit amet. Eum
            maxime quae et optio rerum sed laborum accusantium rem quia eaque.{" "}
          </p>
        </AnimatedElement>

        <div className={styles.services}>
          <AnimatedElement direction="left" delay={0.2}>
            <div className={styles.services_box}>
              <div
                className={`${styles.services_view} ${styles.infraestrutura}`}
              >
                <div className={styles.view_name}>
                  <img src="/icons/shadow_blue_dot.png" />
                  <h1>Infraestrutura</h1>
                </div>
              </div>

              <div className={styles.services_text}>
                <div>
                  <p>
                    Otimize sua infraestrutura de TI para alcançar o máximo
                    desempenho do seu operacional.
                  </p>
                </div>

                <button>
                  <h1>Saiba Mais</h1>
                  <img src="/icons/arrow.png" />
                </button>
              </div>
            </div>
          </AnimatedElement>

          <AnimatedElement direction="right" delay={0.3}>
            <div className={styles.services_box}>
              <div className={styles.services_text}>
                <div>
                  <p>
                    Amplie o horizonte dos seus serviços. Descubra o potencial
                    da tecnologia através da nossa consultoria personalizada,
                    adaptada especialmente para o seu tipo de negócio
                  </p>
                </div>

                <button>
                  <h1>Saiba Mais</h1>
                  <img src="/icons/arrow.png" />
                </button>
              </div>

              <div
                className={`${styles.services_view_variant} ${styles.consultoria}`}
              >
                <div className={styles.view_name}>
                  <img src="/icons/shadow_blue_dot.png" />
                  <h1>Consultoria</h1>
                </div>
              </div>
            </div>
          </AnimatedElement>

          <AnimatedElement direction="left" delay={0.4}>
            <div className={styles.services_box}>
              <div className={`${styles.services_view} ${styles.gestao}`}>
                <div className={styles.view_name}>
                  <img src="/icons/shadow_blue_dot.png" />
                  <h1>Gestão de TI</h1>
                </div>
              </div>

              <div className={styles.services_text}>
                <div>
                  <p>
                    Maximize a eficiência e segurança da sua infraestrutura de
                    TI hoje mesmo.
                  </p>
                </div>

                <button>
                  <h1>Saiba Mais</h1>
                  <img src="/icons/arrow.png" />
                </button>
              </div>
            </div>
          </AnimatedElement>

          <AnimatedElement direction="right" delay={0.5}>
            <div className={styles.services_box}>
              <div className={styles.services_text}>
                <div>
                  <p>
                    Evite despesas adicionais com a compra de equipamentos
                    novos.
                  </p>
                </div>

                <Link href="/manutencao">
                  <button>
                    <h1>Saiba Mais</h1>
                    <img src="/icons/arrow.png" />
                  </button>
                </Link>
              </div>

              <div
                className={`${styles.services_view_variant} ${styles.manutencao}`}
              >
                <div className={styles.view_name}>
                  <img src="/icons/shadow_blue_dot.png" />
                  <h1>Manutenção</h1>
                </div>
              </div>
            </div>
          </AnimatedElement>
        </div>

        <AnimatedElement direction="up" delay={0.6}>
          <div className={styles.guarantee}>
            <div>
              <h2>
                A melhor TI <br />
                com garantia de:
              </h2>

              <div className={styles.guarantee_list}>
                <div>
                  <img src="/icons/blue_dot.png" alt="" />
                  <p>Constância operacional;</p>
                </div>
                <div>
                  <img src="/icons/blue_dot.png" alt="" />
                  <p>Reparos duradouros;</p>
                </div>
                <div>
                  <img src="/icons/blue_dot.png" alt="" />
                  <p>Corte de gastos desnecessários;</p>
                </div>
                <div>
                  <img src="/icons/blue_dot.png" alt="" />
                  <p>Eficiência de equipe;</p>
                </div>
              </div>
            </div>

            <div className={styles.guarantee_img}>
              <img src="img/soluctions/man.png" className=" " />
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
