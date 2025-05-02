import styles from "@/app/styles/page.module.scss";
/* import BannerSlider from "./components/Banner/BannerSlider"; */

import DefaultCarousel from "@/app/components/Carousels/DefaultCarousel";
import ReviewSlider from "./components/ReviewSlider/ReviewSlider";
import Players from "./components/Players/Players";
import Banner from "./components/Banner/components/Banner";

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
          <h2>O que nossos clientes falam sobre nós?</h2>
          <p className={styles.intro}>
            {" "}
            Nossos clientes reconhecem a excelência de nossos processos e a
            qualidade dos serviços que oferecemos.
          </p>
        </div>

        <ReviewSlider />
      </section>

      <section className={styles.soluctions}>
        <div className={styles.intro}>
          <h1>
            Soluções que se <br />
            adaptam ao seu ecossistema
          </h1>

          <p>
            Lorem ipsum dolor sit amet. Eum maxime quae et optio rerum sed
            laborum accusantium rem quia eaque. Lorem ipsum dolor sit amet. Eum
            maxime quae et optio rerum sed laborum accusantium rem quia eaque.{" "}
          </p>
        </div>

        <div className={styles.services}>
          <div className={styles.services_box}>
            <div className={styles.services_view}>
              <div className={styles.view_name}>
                <img src="/icons/shadow_blue_dot.png" />
                <h1>Serviço 01</h1>
              </div>
            </div>

            <div className={styles.services_text}>
              <div>
                <p>
                  Lorem ipsum dolor sit amet. Eum maxime quae et optio rerum sed
                  laborum accusantium rem quia eaque. Lorem ipsum dolor sit
                  amet.
                </p>
              </div>

              <button>
                <h1>Saiba Mais</h1>
                <img src="/icons/arrow.png" />
              </button>
            </div>
          </div>

          <div className={styles.services_box}>
            <div className={styles.services_text}>
              <div>
                <p>
                  Lorem ipsum dolor sit amet. Eum maxime quae et optio rerum sed
                  laborum accusantium rem quia eaque. Lorem ipsum dolor sit
                  amet.
                </p>
              </div>

              <button>
                <h1>Saiba Mais</h1>
                <img src="/icons/arrow.png" />
              </button>
            </div>

            <div className={styles.services_view_variant}>
              <div className={styles.view_name}>
                <img src="/icons/shadow_blue_dot.png" />
                <h1>Serviço 01</h1>
              </div>
            </div>
          </div>

          <div className={styles.services_box}>
            <div className={styles.services_view}>
              <div className={styles.view_name}>
                <img src="/icons/shadow_blue_dot.png" />
                <h1>Serviço 01</h1>
              </div>
            </div>

            <div className={styles.services_text}>
              <div>
                <p>
                  Lorem ipsum dolor sit amet. Eum maxime quae et optio rerum sed
                  laborum accusantium rem quia eaque. Lorem ipsum dolor sit
                  amet.
                </p>
              </div>

              <button>
                <h1>Saiba Mais</h1>
                <img src="/icons/arrow.png" />
              </button>
            </div>
          </div>

          <div className={styles.services_box}>
            <div className={styles.services_text}>
              <div>
                <p>
                  Lorem ipsum dolor sit amet. Eum maxime quae et optio rerum sed
                  laborum accusantium rem quia eaque. Lorem ipsum dolor sit
                  amet.
                </p>
              </div>

              <button>
                <h1>Saiba Mais</h1>
                <img src="/icons/arrow.png" />
              </button>
            </div>

            <div className={styles.services_view_variant}>
              <div className={styles.view_name}>
                <img src="/icons/shadow_blue_dot.png" />
                <h1>Serviço 1</h1>
              </div>
            </div>
          </div>
        </div>

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
      </section>

      <section className={styles.players}>
        <Players />
      </section>
    </div>
  );
}
