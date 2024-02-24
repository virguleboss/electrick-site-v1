import { useCallback } from "react";
import { useNavigate } from "react-router-dom";
import styles from "./Bottom1.module.css";

const Bottom1 = () => {
  const navigate = useNavigate();

  const onPolitiqueDeConfidentialitClick = useCallback(() => {
    navigate("/page-politique-de-confidentialit");
  }, [navigate]);

  const onMentionsLgalesTextClick = useCallback(() => {
    navigate("/page-mentions-lgales");
  }, [navigate]);

  const onAccueilTextClick = useCallback(() => {
    navigate("/");
  }, [navigate]);

  const onAProposText1Click = useCallback(() => {
    navigate("/a-propos");
  }, [navigate]);

  const onNousContacterTextClick = useCallback(() => {
    navigate("/nous-contacter");
  }, [navigate]);

  return (
    <footer className={styles.bottom}>
      <div className={styles.infoFrames}>
        <img
          className={styles.logoBottomIcon}
          loading="eager"
          alt=""
          src="/rectangle-8432@2x.png"
        />
        <div className={styles.infoBlock}>
          <div className={styles.subFrameIL}>
            <div className={styles.infoLgales}>
              <b className={styles.informationsLgales}>Informations Légales</b>
            </div>
            <b className={styles.conditionsGnralesDutilisa}>
              Conditions générales d’utilisation(CGU)
            </b>
          </div>
          <div
            className={styles.politiqueDeConfidentialit}
            onClick={onPolitiqueDeConfidentialitClick}
          >
            Politique de Confidentialité
          </div>
          <div className={styles.mentionsText}>
            <div
              className={styles.mentionsLgales}
              onClick={onMentionsLgalesTextClick}
            >
              Mentions Légales
            </div>
          </div>
        </div>
      </div>
      <div className={styles.homepageFrame}>
        <div className={styles.contactFrame}>
          <div className={styles.infoLgales1}>
            <b className={styles.pages}>Pages</b>
          </div>
          <div className={styles.accueil} onClick={onAccueilTextClick}>
            Accueil
          </div>
        </div>
        <div className={styles.aPFrame}>
          <div className={styles.aPropos} onClick={onAProposText1Click}>
            A Propos
          </div>
          <div className={styles.nousLabel}>
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

export default Bottom1;
