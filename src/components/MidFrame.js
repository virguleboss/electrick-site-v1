import { useEffect } from "react";
import styles from "./MidFrame.module.css";

const MidFrame = () => {
  useEffect(() => {
    const scrollAnimElements = document.querySelectorAll(
      "[data-animate-on-scroll]"
    );
    const observer = new IntersectionObserver(
      (entries) => {
        for (const entry of entries) {
          if (entry.isIntersecting || entry.intersectionRatio > 0) {
            const targetElement = entry.target;
            targetElement.classList.add(styles.animate);
            observer.unobserve(targetElement);
          }
        }
      },
      {
        threshold: 0.15,
      }
    );

    for (let i = 0; i < scrollAnimElements.length; i++) {
      observer.observe(scrollAnimElements[i]);
    }

    return () => {
      for (let i = 0; i < scrollAnimElements.length; i++) {
        observer.unobserve(scrollAnimElements[i]);
      }
    };
  }, []);
  return (
    <section className={styles.midFrame}>
      <div className={styles.mid}>
        <div className={styles.superiorJavaScriptSite}>
          <div className={styles.text} data-animate-on-scroll>
            <div
              className={styles.laPuissanceDeContainer}
              data-animate-on-scroll
            >
              <span className={styles.laPuissanceDe}>La Puissance de</span>
              <span>{` `}</span>
              <span className={styles.react}>React</span>
              <span>{` `}</span>
              <span className={styles.javascript}>JavaScript</span>
              <span>{` `}</span>
              <span className={styles.pourVotreSite}>pour Votre Site Web</span>
            </div>
            <div className={styles.vousAspirezContainer}>
              <span className={styles.vousAspirezContainer1}>
                <span>{`Vous aspirez à offrir une expérience utilisateur exceptionnelle sur votre site web? Ne cherchez pas plus loin, car `}</span>
                <span className={styles.react1}>React</span>
                <span>{` `}</span>
                <span className={styles.javascript1}>JavaScript</span>
                <span>
                  {" "}
                  est le moteur qui propulse les interfaces utilisateur modernes
                  vers de nouveaux sommets.
                </span>
              </span>
            </div>
            <div className={styles.chezElectrickLaContainer}>
              <span>{`Chez `}</span>
              <span className={styles.electrick}>Electrick</span>
              <span>
                , la qualité exceptionnelle ne signifie pas des prix
                exorbitants.
              </span>
            </div>
          </div>
        </div>
        <h1 className={styles.excellentNonContainer} data-animate-on-scroll>
          <span className={styles.span}>{`    `}</span>
          <span className={styles.excellent}>Excellent</span>
          <span> non ?</span>
        </h1>
      </div>
    </section>
  );
};

export default MidFrame;
