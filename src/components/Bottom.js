import { useCallback } from "react";
import { useNavigate } from "react-router-dom";
import styles from "./Bottom.module.css";

const Bottom = () => {
  const navigate = useNavigate();

  const onConditionsGnralesDutilisaClick = useCallback(() => {
    navigate("/cgu");
  }, [navigate]);

  const onPolitiqueDeConfidentialitClick = useCallback(() => {
    navigate("/page-politique-de-confidentialit");
  }, [navigate]);

  const onMentionsLgalesTextClick = useCallback(() => {
    navigate("/page-mentions-lgales");
  }, [navigate]);

  const onAccueilTextClick = useCallback(() => {
    navigate("/");
  }, [navigate]);

  const onNousContacterTextClick = useCallback(() => {
    navigate("/nous-contacter");
  }, [navigate]);

  return (
    <footer className={styles.bottom}>
      <div className={styles.footerFrame}>
        <img
          className={styles.logoIcon}
          loading="eager"
          alt=""
          src="/rectangle-8432@2x.png"
        />
        <div className={styles.termsUse}>
          <div className={styles.privacyPolicy}>
            <div className={styles.infoLgales}>
              <b className={styles.informationsLgales}>Informations Légales</b>
            </div>
            <div
              className={styles.conditionsGnralesDutilisa}
              onClick={onConditionsGnralesDutilisaClick}
            >
              Conditions générales d’utilisation(CGU)
            </div>
          </div>
          <div className={styles.aboutUsPage}>
            <div
              className={styles.politiqueDeConfidentialit}
              onClick={onPolitiqueDeConfidentialitClick}
            >
              Politique de Confidentialité
            </div>
            <div className={styles.mentionsLgales}>
              <div className={styles.infoLegalesPage}>
                <b
                  className={styles.mentionsLgales1}
                  onClick={onMentionsLgalesTextClick}
                >
                  Mentions Légales
                </b>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className={styles.legalInfoContainerParent}>
        <div className={styles.legalInfoContainer}>
          <div className={styles.infoLgales1}>
            <b className={styles.pages}>Pages</b>
          </div>
          <div className={styles.accueil} onClick={onAccueilTextClick}>
            Accueil
          </div>
        </div>
        <div className={styles.aProposParent}>
          <div className={styles.aPropos}>A Propos</div>
          <div className={styles.contactSection}>
            <div
              className={styles.nousContacter}
              onClick={onNousContacterTextClick}
            >
              Nous contacter
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Bottom;
