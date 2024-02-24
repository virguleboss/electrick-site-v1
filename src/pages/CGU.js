import { useEffect } from "react";
import FrameComponent3 from "../components/FrameComponent3";
import Bottom1 from "../components/Bottom1";
import styles from "./CGU.module.css";

const CGU = () => {
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
    <div className={styles.cgu} data-animate-on-scroll>
      <FrameComponent3 />
      <section className={styles.usageInfo}>
        <div className={styles.acceptanceFrame}>
          <div className={styles.conditionsGnralesDutilisa}>
            Conditions Générales d’Utilisation
          </div>
        </div>
        <div className={styles.acceptationDesConditionsContainer}>
          <p className={styles.acceptationDesConditions}>
            1. Acceptation des conditions d'utilisation
          </p>
          <p className={styles.enAccdant}>
            En accédant à ce site web, vous acceptez d'être lié par ces
            Conditions Générales d'Utilisation (CGU). Si vous n'acceptez pas ces
            termes, veuillez ne pas utiliser notre site.
          </p>
          <p className={styles.utilisationAutorise}>
            2. Utilisation autorisée*
          </p>
          <p className={styles.vousTesAutoris}>
            Vous êtes autorisé à accéder à notre site pour votre usage
            personnel. Vous ne devez pas utiliser ce site d'une manière qui
            causerait un préjudice à nous-mêmes ou à d'autres parties. Toute
            utilisation non autorisée de ce site peut donner lieu à des
            réclamations pour des dommages et intérêts et/ou constituer une
            infraction pénale.
          </p>
          <p className={styles.propritIntellectuelle}>
            3. Propriété intellectuelle
          </p>
          <p className={styles.tousLesContenus}>
            Tous les contenus présents sur ce site, y compris, mais sans s'y
            limiter, le texte, les graphiques, les logos, les images et le code
            informatique, sont notre propriété exclusive ou celle de nos
            partenaires et sont protégés par les lois sur la propriété
            intellectuelle.
          </p>
          <p className={styles.modificationDesCgu}>4. Modification des CGU</p>
          <p className={styles.nousNousRservons}>
            Nous nous réservons le droit de modifier ces CGU à tout moment. Les
            modifications prendront effet dès leur publication sur le site. Il
            est de votre responsabilité de consulter régulièrement les CGU pour
            vous assurer que vous êtes conscient des modifications apportées.
          </p>
          <p className={styles.loisApplicables}>5. Lois applicables</p>
          <p className={styles.cesCguSont}>
            Ces CGU sont régies et interprétées conformément aux lois en
            vigueur. Tout litige découlant de ces termes et conditions sera
            soumis à la juridiction exclusive des tribunaux compétents.
          </p>
        </div>
      </section>
      <Bottom1 />
    </div>
  );
};

export default CGU;
