import { useState, useCallback, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import Drawer from "../components/Drawer";
import PortalDrawer from "../components/PortalDrawer";
import ContactUs1 from "../components/ContactUs1";
import Bottom3 from "../components/Bottom3";
import styles from "./NousContacter.module.css";

const NousContacter = () => {
  const navigate = useNavigate();
  const [isDrawerOpen, setDrawerOpen] = useState(false);

  const onConditionsGnralesDutilisaClick = useCallback(() => {
    navigate("/cgu");
  }, [navigate]);

  const onPolitiqueDeConfidentialitClick = useCallback(() => {
    navigate("/page-politique-de-confidentialit");
  }, [navigate]);

  const onAccueilTextClick = useCallback(() => {
    navigate("/");
  }, [navigate]);

  const onAProposText1Click = useCallback(() => {
    navigate("/a-propos");
  }, [navigate]);

  const onMentionsLgalesTextClick = useCallback(() => {
    navigate("/page-mentions-lgales");
  }, [navigate]);

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

  const onNouTextClick = useCallback(() => {
    navigate("/");
  }, [navigate]);

  const onAProposTextClick = useCallback(() => {
    navigate("/a-propos");
  }, [navigate]);

  const openDrawer = useCallback(() => {
    setDrawerOpen(true);
  }, []);

  const closeDrawer = useCallback(() => {
    setDrawerOpen(false);
  }, []);

  return (
    <>
      <div className={styles.nousContacter} data-animate-on-scroll>
        <header className={styles.nousContactFrame}>
          <div className={styles.logoTitre}>
            <img
              className={styles.groupIcon}
              loading="eager"
              alt=""
              src="/group2@2x.png"
            />
            <b className={styles.electrick}>Electrick</b>
          </div>
          <div className={styles.groupFrame}>
            <div className={styles.menuBar}>
              <b className={styles.nou} onClick={onNouTextClick}>
                Acceuil
              </b>
              <b
                className={styles.aPropos}
                onClick={onAProposTextClick}
              >{`A Propos `}</b>
            </div>
          </div>
          <div className={styles.menutoggleInstance} onClick={openDrawer}>
            <div className={styles.menuToggle}>
              <div className={styles.contactFields} />
              <div className={styles.contactFields1} />
              <div className={styles.contactFields2} />
            </div>
          </div>
        </header>
        <ContactUs1 />
        <Bottom3
          onConditionsGnralesDutilisaClick={onConditionsGnralesDutilisaClick}
          onPolitiqueDeConfidentialitClick={onPolitiqueDeConfidentialitClick}
          onAccueilTextClick={onAccueilTextClick}
          onAProposText1Click={onAProposText1Click}
          logoFooter="/rectangle-8432@2x.png"
          onMentionsLgalesTextClick={onMentionsLgalesTextClick}
        />
      </div>
      {isDrawerOpen && (
        <PortalDrawer placement="Left" onOutsideClick={closeDrawer}>
          <Drawer onClose={closeDrawer} />
        </PortalDrawer>
      )}
    </>
  );
};

export default NousContacter;
