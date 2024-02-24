import FrameComponent1 from "./FrameComponent1";
import styles from "./FrameComponent.module.css";

const FrameComponent = () => {
  return (
    <section className={styles.heroPropose}>
      <div className={styles.technologies}>
        <h1 className={styles.ceQueJe}>Ce que je Propose :</h1>
        <img
          className={styles.scratchIcon}
          loading="eager"
          alt=""
          src="/frame.svg"
        />
      </div>
      <div className={styles.lesTechnologies}>
        <FrameComponent1
          frame="/frame-1.svg"
          expertiseTechnique="Expertise Technique"
          matriseDesDerniresTechnol="Maîtrise des dernières technologies web, y compris HTML5, CSS3, JavaScript et React.js, pour des sites web modernes et performants."
        />
        <FrameComponent1
          frame="/frame-2.svg"
          expertiseTechnique="Approche Personnalisée"
          matriseDesDerniresTechnol="Chaque projet est traité individuellement, avec une écoute attentive des besoins du client et une collaboration étroite tout au long du processus de développement."
          propWidth="129.6px"
        />
        <FrameComponent1
          frame="/frame-3.svg"
          expertiseTechnique="Qualité et Fiabilité"
          matriseDesDerniresTechnol="Engagée à fournir des solutions de haute qualité dans les délais impartis, avec un souci constant de la satisfaction du client."
          propWidth="131.5px"
        />
      </div>
    </section>
  );
};

export default FrameComponent;
