import { useCallback, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import styles from "./Container.module.css";

const Container = () => {
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
    <div className={styles.container} data-animate-on-scroll>
      <div className={styles.copy}>
        <h1 className={styles.heading}>
          Nos offres vous intéressent ? N’attendez plus !
        </h1>
        <div
          className={styles.description}
        >{`Des prix défiants la concurrences , demandez un devis en cliquant ici `}</div>
      </div>
      <button className={styles.button} onClick={onButtonClick}>
        <div className={styles.textContainer}>
          <b className={styles.cta}>Nous contacter</b>
        </div>
      </button>
    </div>
  );
};

export default Container;
