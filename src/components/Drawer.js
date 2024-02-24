import { useCallback, useEffect } from "react";
import {} from "@mui/material";
import { useNavigate } from "react-router-dom";
import styles from "./Drawer.module.css";

const Drawer = ({ onClose }) => {
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

  const onAcceuilClick = useCallback(() => {
    navigate("/");
  }, [navigate]);

  const onAProposContainerClick = useCallback(() => {
    navigate("/a-propos");
  }, [navigate]);

  const onNousContacterContainerClick = useCallback(() => {
    navigate("/nous-contacter");
  }, [navigate]);

  return (
    <div className={styles.drawer}>
      <section className={styles.drawer1} data-animate-on-scroll>
        <div className={styles.headerHeadlineBodyCopy}>
          <div className={styles.titreDrawer}>
            <h3 className={styles.headline6}>Electrick</h3>
            <div
              className={styles.body2}
            >{`Electriser votre présence en ligne `}</div>
          </div>
          <img className={styles.dividerIcon} loading="eager" alt="" />
        </div>
        <header className={styles.acceuil} onClick={onAcceuilClick}>
          <img className={styles.favorite24px1Icon} loading="eager" alt="" />
          <div className={styles.label}>Acceuil</div>
        </header>
        <div className={styles.aPropos} onClick={onAProposContainerClick}>
          <img className={styles.favorite24px1Icon1} loading="eager" alt="" />
          <div className={styles.label1}>A Propos</div>
        </div>
        <div
          className={styles.nousContacter}
          onClick={onNousContacterContainerClick}
        >
          <img className={styles.favorite24px1Icon2} loading="eager" alt="" />
          <div className={styles.label2}>Nous contacter</div>
        </div>
      </section>
    </div>
  );
};

export default Drawer;
