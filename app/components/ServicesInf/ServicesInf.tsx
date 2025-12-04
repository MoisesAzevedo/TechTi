import styles from "./ServicesInf.module.scss";

export default function ServicesInf() {
  return (
    <div className={styles.wrapper} data-name="services-wrapper">
      <figure
        data-name="services-images"
        className="flex relative w-full h-[240px] justify-center items-center gap-6"
      >
        <div
          className={`${styles.card} ${styles.left}`}
          data-name="service-item-1"
        >
          <div
            className={styles.cardTitleWrapper}
            data-name="service-1-title-wrapper"
          >
            <p className={styles.cardSubtitle} data-name="service-1-subtitle">
              GESTÃO
            </p>
            <h1 className={styles.cardTitle} data-name="service-1-title">
              Presencial
            </h1>
          </div>
          <img
            className={styles.serviceImg}
            src="/img/Atendimento/Rectangle%2028.png"
            alt="Serviço A"
            data-name="service-1-img"
          />
        </div>

        <div
          className={`${styles.card} ${styles.right}`}
          data-name="service-item-2"
        >
          <div
            className={styles.cardTitleWrapper}
            data-name="service-2-title-wrapper"
          >
            <p className={styles.cardSubtitle} data-name="service-2-subtitle">
              GESTÃO
            </p>
            <h1 className={styles.cardTitle} data-name="service-2-title">
              Remota
            </h1>
          </div>
          <img
            className={styles.serviceImg}
            src="/img/Atendimento/Rectangle%2029.png"
            alt="Serviço B"
            data-name="service-2-img"
          />
        </div>

        <div
          data-name="background-border"
          className={styles.backgroundBorder}
        />
      </figure>

      <div data-name="vertical-divider" className={styles.verticalDivider} />
      <div data-name="inclusions-container" className={styles.inclusions}>
        <div data-name="inclusions-text" className="pl-4">
          <p className={styles.inclusionsText} data-name="inclusions-text">
            Em ambas as modalidades estão inclusas:{" "}
          </p>
        </div>
        <div data-name="inclusions-list" className={styles.inclusionsList}>
          <div className={styles.inclusionItem} data-name="inclusion-1">
            Auditoria e documentação do ambiente
          </div>
          <div className={styles.inclusionItem} data-name="inclusion-2">
            Planejamento anual de investimento e TI
          </div>
          <div className={styles.inclusionItem} data-name="inclusion-3">
            Suporte N2 e N3
          </div>
        </div>
      </div>
    </div>
  );
}
