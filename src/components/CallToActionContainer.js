import Container from "./Container";
import styles from "./CallToActionContainer.module.css";

const CallToActionContainer = () => {
  return (
    <section className={styles.callToActionContainer}>
      <div className={styles.bouttonNousContacter}>
        <Container />
      </div>
    </section>
  );
};

export default CallToActionContainer;
