import { useCallback, useEffect } from "react";
import FrameComponent2 from "../components/FrameComponent2";
import FrameComponent from "../components/FrameComponent";
import { useNavigate } from "react-router-dom";
import Bottom from "../components/Bottom";
import styles from "./APropos.module.css";

const APropos = () => {
  const navigate = useNavigate();
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

  const onButtonClick = useCallback(() => {
    navigate("/nous-contacter");
  }, [navigate]);

  return (
    <div className={styles.aPropos} data-animate-on-scroll>
      <FrameComponent2 />
      <div className={styles.frameHomeContact}>
        <div className={styles.home}>Home</div>
        <b className={styles.aboutUs}>About us</b>
        <div className={styles.contact}>Contact</div>
      </div>
      <div className={styles.homeFrame}>
        <h1 className={styles.aProposDeContainer}>
          <span>{`A Propos de `}</span>
          <span className={styles.nous}>nous</span>
        </h1>
        <div className={styles.jeSuisElectrickContainer}>
          <span>{`Je suis `}</span>
          <span className={styles.electrick}>ELECTRICK</span>
          <span>
            , un passionné du web et un créateur de sites web vitrine. Fort de
            mon expérience et de ma formation dans le domaine du développement
            web, je propose des solutions sur mesure pour aider les entreprises
            et les professionnels à établir une présence en ligne convaincante.
          </span>
        </div>
      </div>
      <FrameComponent />
      <div className={styles.subFrameA}>
        <h1 className={styles.contactezMoi}>Contactez-moi :</h1>
        <div className={styles.vousAvezUn}>
          Vous avez un projet de site web vitrine en tête ? N'hésitez pas à me
          contacter pour discuter de vos besoins et obtenir un devis
          personnalisé. Je serais ravi de mettre mon expertise à votre service
          et de vous accompagner dans la réalisation de votre projet web.
        </div>
      </div>
      <button className={styles.button} onClick={onButtonClick}>
        <b className={styles.cta}>Nous contacter</b>
      </button>
      <Bottom />
    </div>
  );
};

export default APropos;
