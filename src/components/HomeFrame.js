import { useState, useCallback, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import Drawer from "./Drawer";
import PortalDrawer from "./PortalDrawer";
import styles from "./HomeFrame.module.css";

const HomeFrame = () => {
  const navigate = useNavigate();
  const [isDrawerOpen, setDrawerOpen] = useState(false);
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

  const onAProposTextClick = useCallback(() => {
    navigate("/a-propos");
  }, [navigate]);

  const openDrawer = useCallback(() => {
    setDrawerOpen(true);
  }, []);

  const closeDrawer = useCallback(() => {
    setDrawerOpen(false);
  }, []);

  const onBouttonNousContacterClick = useCallback(() => {
    navigate("/nous-contacter");
  }, [navigate]);

  return (
    <>
      <div className={styles.homeFrame}>
        <header className={styles.frameCParent} data-animate-on-scroll>
          <div className={styles.frameC}>
            <div className={styles.logoTitre}>
              <img
                className={styles.groupIcon}
                loading="eager"
                alt=""
                src="/group@2x.png"
              />
              <div className={styles.componentF}>
                <b className={styles.electrick}>Electrick</b>
              </div>
            </div>
          </div>
          <div className={styles.menuBar}>
            <b className={styles.nou}>Acceuil</b>
            <div
              className={styles.aPropos}
              onClick={onAProposTextClick}
            >{`A Propos `}</div>
          </div>
          <div className={styles.frameK}>
            <div className={styles.contactFrame}>
              <div className={styles.menuToggle} onClick={openDrawer}>
                <div className={styles.reactJSText} />
                <div className={styles.reactJSText1} />
                <div className={styles.reactJSText2} />
              </div>
            </div>
            <button
              className={styles.bouttonNousContacter}
              onClick={onBouttonNousContacterClick}
            >
              <b className={styles.nousContacter}>Nous contacter</b>
            </button>
          </div>
        </header>
      </div>
      {isDrawerOpen && (
        <PortalDrawer placement="Left" onOutsideClick={closeDrawer}>
          <Drawer onClose={closeDrawer} />
        </PortalDrawer>
      )}
    </>
  );
};

export default HomeFrame;
