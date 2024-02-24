import { useCallback } from "react";
import { useNavigate } from "react-router-dom";
import styles from "./Bottom2.module.css";

const Bottom2 = () => {
  const navigate = useNavigate();

  const onConditionsGnralesDutilisaClick = useCallback(() => {
    navigate("/cgu");
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
      <div className={styles.mentionsLegalesText}>
        <img
          className={styles.logoBottomIcon}
          loading="eager"
          alt=""
          src="/rectangle-8432@2x.png"
        />
        <div className={styles.rectangleFrame}>
          <div className={styles.infoFrame}>
            <div className={styles.subInfoFrame}>
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
            <b className={styles.politiqueDeConfidentialit}>
              Politique de Confidentialité
            </b>
          </div>
          <div className={styles.footerFrame}>
            <div
              className={styles.mentionsLgales}
              onClick={onMentionsLgalesTextClick}
            >
              Mentions Légales
            </div>
          </div>
        </div>
      </div>
      <div className={styles.homeInfoFrame}>
        <div className={styles.aboutTitle}>
          <div className={styles.infoLgales1}>
            <b className={styles.pages}>Pages</b>
          </div>
          <div className={styles.accueil} onClick={onAccueilTextClick}>
            Accueil
          </div>
        </div>
        <div className={styles.aboutUsText}>
          <div className={styles.aPropos} onClick={onAProposText1Click}>
            A Propos
          </div>
          <div className={styles.aPrintableFrame}>
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

export default Bottom2;
