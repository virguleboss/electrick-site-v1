import { useCallback, useEffect } from "react";
import HomeFrame from "../components/HomeFrame";
import MidFrame from "../components/MidFrame";
import CallToActionContainer from "../components/CallToActionContainer";
import { useNavigate } from "react-router-dom";
import styles from "./Acceuil.module.css";

const Acceuil = () => {
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

  const onConditionsGnralesDutilisaClick = useCallback(() => {
    navigate("/cgu");
  }, [navigate]);

  const onPolitiqueDeConfidentialitClick = useCallback(() => {
    navigate("/page-politique-de-confidentialit");
  }, [navigate]);

  const onMentionsLgalesTextClick = useCallback(() => {
    navigate("/page-mentions-lgales");
  }, [navigate]);

  const onAProposText1Click = useCallback(() => {
    navigate("/a-propos");
  }, [navigate]);

  const onNousContacterText1Click = useCallback(() => {
    navigate("/nous-contacter");
  }, [navigate]);

  return (
    <div className={styles.acceuil} data-animate-on-scroll>
      <HomeFrame />
      <div className={styles.frameQ}>
        <div className={styles.ourExpertiseText} data-animate-on-scroll>
          <h1 className={styles.crezVotreSiteContainer}>
            <p className={styles.crezVotreSite}>{`Créez votre site `}</p>
            <p className={styles.quiVousRessemble}>
              {`qui `}
              <span className={styles.vous}>VOUS</span> ressemble
            </p>
          </h1>
          <h3 className={styles.votreVitrineVirtuelleContainer}>
            <p className={styles.votreVitrineVirtuelle}>
              Votre vitrine virtuelle , notre expertise
            </p>
            <p className={styles.desSitesWeb}>
              {" "}
              Des sites web sur mesure , conçu pour exceller.
            </p>
            <p className={styles.dcouvrezLesSolutions}>
              Découvrez les solutions abordables d’Electrick.
            </p>
          </h3>
        </div>
      </div>
      <div className={styles.manualBuiltFrames} data-animate-on-scroll>
        <div className={styles.frameContainer}>
          <h1 className={styles.desSitesConusContainer}>
            <p className={styles.desSitesConus}>Des sites conçus à la main</p>
            <p className={styles.avecPassionEtPatience}>
              <span>{`Avec `}</span>
              <span className={styles.passion}>passion</span>
              <span className={styles.et}>{` et `}</span>
              <span className={styles.patience}>patience</span>
              <span className={styles.span}>.</span>
            </p>
          </h1>
          <div className={styles.pasDeWordpress}>
            Pas de Wordpress ni de Shopify.
          </div>
        </div>
      </div>
      <MidFrame />
      <CallToActionContainer />
      <footer className={styles.bottom}>
        <div className={styles.infoFrame}>
          <img
            className={styles.logoBottomIcon}
            loading="eager"
            alt=""
            src="/rectangle-843@2x.png"
          />
          <div className={styles.rectangleFrame}>
            <div className={styles.legalPages}>
              <div className={styles.infoLgales}>
                <b className={styles.informationsLgales}>
                  Informations Légales
                </b>
              </div>
              <div
                className={styles.conditionsGnralesDutilisa}
                onClick={onConditionsGnralesDutilisaClick}
              >
                Conditions générales d’utilisation(CGU)
              </div>
            </div>
            <div
              className={styles.politiqueDeConfidentialit}
              onClick={onPolitiqueDeConfidentialitClick}
            >
              Politique de Confidentialité
            </div>
            <div className={styles.contactLink}>
              <div
                className={styles.mentionsLgales}
                onClick={onMentionsLgalesTextClick}
              >
                Mentions Légales
              </div>
            </div>
          </div>
        </div>
        <div className={styles.rootFrame}>
          <div className={styles.infoBox}>
            <div className={styles.infoLgales1}>
              <b className={styles.pages}>Pages</b>
            </div>
            <b className={styles.accueil}>Accueil</b>
          </div>
          <div className={styles.contactPage}>
            <div className={styles.aPropos} onClick={onAProposText1Click}>
              A Propos
            </div>
            <div className={styles.expertiseFrame}>
              <div
                className={styles.nousContacter}
                onClick={onNousContacterText1Click}
              >
                Nous contacter
              </div>
            </div>
          </div>
        </div>
      </footer>
    </div>
  );
};

export default Acceuil;
