import styles from "./ContactUs.module.css";

const ContactUs = () => {
  return (
    <div className={styles.contactUs}>
      <section className={styles.frameA}>
        <div className={styles.frameB}>
          <div className={styles.contactInfo}>
            <h1 className={styles.vousDsirezNous}>
              Vous désirez nous contacter ?
            </h1>
            <div className={styles.remplissezCeFormulaire}>
              Remplissez ce formulaire où contacter nous par téléphone !
            </div>
          </div>
          <form className={styles.inputGroup}>
            <div className={styles.textField}>
              <input
                className={styles.votreNom}
                placeholder="Votre Nom "
                type="text"
              />
              <img
                className={styles.textFieldChild}
                alt=""
                src="/vector-2.svg"
              />
            </div>
            <div className={styles.textField1}>
              <input
                className={styles.votreEMail}
                placeholder="Votre E-mail"
                type="text"
              />
              <img
                className={styles.textFieldItem}
                alt=""
                src="/vector-2.svg"
              />
            </div>
            <div className={styles.textField2}>
              <input
                className={styles.votreTlphone}
                placeholder="Votre Téléphone"
                type="text"
              />
              <img
                className={styles.textFieldInner}
                alt=""
                src="/vector-2.svg"
              />
            </div>
            <div className={styles.textField3}>
              <input
                className={styles.votreMessage}
                placeholder="Votre Message "
                type="text"
              />
              <img className={styles.vectorIcon} alt="" src="/vector-2.svg" />
            </div>
            <button className={styles.button}>
              <b className={styles.envoyerUnMessage}>Envoyer un message</b>
            </button>
          </form>
        </div>
        <div className={styles.phoneField}>
          <div className={styles.contactVia}>
            <img
              className={styles.telephoneLabelIcon}
              loading="eager"
              alt=""
              src="/frame-831.svg"
            />
            <div className={styles.parTelephone06Container}>
              <p className={styles.parTelephone}>PAR TELEPHONE</p>
              <p className={styles.p}>06 01 25 40 43</p>
            </div>
          </div>
          <div className={styles.emailLabel}>
            <img
              className={styles.emailIcon}
              loading="eager"
              alt=""
              src="/frame-833.svg"
            />
            <div className={styles.parEmailElectrick68gmailcoContainer}>
              <p className={styles.parEmail}>PAR EMAIL</p>
              <p className={styles.electrick68gmailcom}>
                ELECTRICK68@GMAIL.COM
              </p>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default ContactUs;
