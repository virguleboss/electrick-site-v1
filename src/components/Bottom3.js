import { useMemo } from "react";
import styles from "./Bottom3.module.css";

const Bottom3 = ({
  propHeight,
  onConditionsGnralesDutilisaClick,
  onPolitiqueDeConfidentialitClick,
  onAccueilTextClick,
  onAProposText1Click,
  onNousContacterTextClick,
  logoFooter,
  bottomFlex,
  onMentionsLgalesTextClick,
}) => {
  const nousContacterStyle = useMemo(() => {
    return {
      height: propHeight,
    };
  }, [propHeight]);

  const bottomStyle = useMemo(() => {
    return {
      flex: bottomFlex,
    };
  }, [bottomFlex]);

  return (
    <footer className={styles.bottom} style={bottomStyle}>
      <div className={styles.bottomFrame}>
        <img
          className={styles.logoFooterIcon}
          loading="eager"
          alt=""
          src={logoFooter}
        />
        <div className={styles.frameParent}>
          <div className={styles.infoLgalesParent}>
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
          <div className={styles.politiqueDeConfidentialitParent}>
            <div
              className={styles.politiqueDeConfidentialit}
              onClick={onPolitiqueDeConfidentialitClick}
            >
              Politique de Confidentialité
            </div>
            <div className={styles.mentionsLgales}>
              <div className={styles.mentionsLgalesWrapper}>
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
      <div className={styles.frameGroup}>
        <div className={styles.infoLgalesGroup}>
          <div className={styles.infoLgales1}>
            <b className={styles.pages}>Pages</b>
          </div>
          <div className={styles.accueil} onClick={onAccueilTextClick}>
            Accueil
          </div>
        </div>
        <div className={styles.contactInfo}>
          <div className={styles.aPropos} onClick={onAProposText1Click}>
            A Propos
          </div>
          <div className={styles.contactForm}>
            <div
              className={styles.nousContacter}
              style={nousContacterStyle}
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

export default Bottom3;
