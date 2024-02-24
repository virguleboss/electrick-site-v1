import { useEffect } from "react";
import styles from "./ContactUs1.module.css";

const ContactUs1 = () => {
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
  return (
    <section className={styles.contactUs}>
      <div className={styles.phoneFrame}>
        <div className={styles.emailFrame}>
          <div className={styles.titreContacter}>
            <h1 className={styles.vousDsirezNous} data-animate-on-scroll>
              Vous désirez nous contacter ?
            </h1>
            <div className={styles.remplissezCeFormulaire}>
              Remplissez ce formulaire où contacter nous par téléphone !
            </div>
          </div>
          <form className={styles.zoneInput}>
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
        <div className={styles.bottomInput}>
          <div className={styles.div}>
            <img
              className={styles.child}
              loading="eager"
              alt=""
              src="/frame-831.svg"
            />
            <div className={styles.parTelephone06Container}>
              <p className={styles.parTelephone}>PAR TELEPHONE</p>
              <p className={styles.p}>06 01 25 40 43</p>
            </div>
          </div>
          <div className={styles.contactInfo}>
            <img
              className={styles.contactInfoChild}
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
      </div>
    </section>
  );
};

export default ContactUs1;
