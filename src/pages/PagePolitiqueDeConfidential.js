import { useState, useCallback, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import Drawer from "../components/Drawer";
import PortalDrawer from "../components/PortalDrawer";
import Bottom2 from "../components/Bottom2";
import styles from "./PagePolitiqueDeConfidential.module.css";

const PagePolitiqueDeConfidential = () => {
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
      <div
        className={styles.pagePolitiqueDeConfidential}
        data-animate-on-scroll
      >
        <section className={styles.pageFrame}>
          <header className={styles.frameParent}>
            <div className={styles.groupParent}>
              <img
                className={styles.groupIcon}
                loading="eager"
                alt=""
                src="/group2@2x.png"
              />
              <div className={styles.electrickText}>
                <b className={styles.electrick}>Electrick</b>
              </div>
            </div>
            <div className={styles.nouFrame}>
              <div className={styles.aProposText}>
                <div className={styles.menuBar}>
                  <div className={styles.nou} onClick={onNouTextClick}>
                    Accueil
                  </div>
                  <b
                    className={styles.aPropos}
                    onClick={onAProposTextClick}
                  >{`A Propos `}</b>
                </div>
                <div className={styles.collecteInformationsFrame}>
                  <div className={styles.politiqueDeConfidentialit}>
                    Politique de Confidentialité
                  </div>
                </div>
              </div>
            </div>
            <div className={styles.menutoggleInstance}>
              <div className={styles.menuToggle} onClick={openDrawer}>
                <div className={styles.rectangleRectangleRectangle} />
                <div className={styles.rectangleRectangleRectangle1} />
                <div className={styles.rectangleRectangleRectangle2} />
              </div>
            </div>
          </header>
          <div className={styles.collecteDinformationsNousRWrapper}>
            <div className={styles.collecteDinformationsNousContainer}>
              <p className={styles.collecteDinformations}>
                1. Collecte d'informations
              </p>
              <p className={styles.nousRecueillonsDes}>
                Nous recueillons des informations lorsque vous naviguez sur
                notre site ou effectuez une action telle que remplir un
                formulaire. Les informations collectées peuvent inclure votre
                nom, adresse e-mail, numéro de téléphone et d'autres données
                nécessaires aux fins spécifiques pour lesquelles elles sont
                collectées.
              </p>
              <p className={styles.utilisationDesInformations}>
                2. Utilisation des informations
              </p>
              <p className={styles.lesInformationsQue}>
                Les informations que nous recueillons peuvent être utilisées
                pour personnaliser votre expérience, traiter vos demandes et
                améliorer notre site. Nous ne vendrons, n'échangerons ni ne
                transférerons vos informations personnelles à des tiers sans
                votre consentement, sauf dans les cas expressément décrits dans
                cette politique.
              </p>
              <p className={styles.scuritDesInformations}>
                3. Sécurité des informations
              </p>
              <p className={styles.nousMettonsEn}>
                Nous mettons en œuvre des mesures de sécurité pour protéger vos
                informations personnelles contre tout accès non autorisé,
                altération, divulgation ou destruction.
              </p>
              <p className={styles.cookies}>4. Cookies</p>
              <p className={styles.nousUtilisonsDes}>
                Nous utilisons des cookies pour améliorer votre expérience de
                navigation. Vous pouvez configurer votre navigateur pour refuser
                tous les cookies ou pour vous avertir lorsqu'un cookie est
                envoyé.
              </p>
            </div>
          </div>
        </section>
        <Bottom2 />
      </div>
      {isDrawerOpen && (
        <PortalDrawer placement="Left" onOutsideClick={closeDrawer}>
          <Drawer onClose={closeDrawer} />
        </PortalDrawer>
      )}
    </>
  );
};

export default PagePolitiqueDeConfidential;
