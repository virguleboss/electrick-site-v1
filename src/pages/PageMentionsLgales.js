import { useState, useCallback, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import Drawer from "../components/Drawer";
import PortalDrawer from "../components/PortalDrawer";
import Bottom3 from "../components/Bottom3";
import styles from "./PageMentionsLgales.module.css";

const PageMentionsLgales = () => {
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

  const onNousContacterTextClick = useCallback(() => {
    navigate("/nous-contacter");
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
      <div className={styles.pageMentionsLgales} data-animate-on-scroll>
        <header className={styles.pageMentions}>
          <div className={styles.fRAME}>
            <div className={styles.groupParent}>
              <img
                className={styles.groupIcon}
                loading="eager"
                alt=""
                src="/group2@2x.png"
              />
              <b className={styles.electrick}>Electrick</b>
            </div>
            <div className={styles.electrick1}>
              <div className={styles.menuBar}>
                <div className={styles.nou} onClick={onNouTextClick}>
                  Accueil
                </div>
                <b
                  className={styles.aPropos}
                  onClick={onAProposTextClick}
                >{`A Propos `}</b>
              </div>
            </div>
            <div className={styles.menutoggle}>
              <div className={styles.menuToggle} onClick={openDrawer}>
                <div className={styles.menuToggleChild} />
                <div className={styles.menuToggleItem} />
                <div className={styles.menuToggleInner} />
              </div>
            </div>
          </div>
        </header>
        <section className={styles.mentionsLgalesParent}>
          <div className={styles.mentionsLgales}>Mentions Légales</div>
          <div className={styles.gomesDeMirandaContainer}>
            <p className={styles.gomesDeMiranda}>
              GOMES DE MIRANDA - 889089504
            </p>
            <p className={styles.sigeSocial}>Siège social :</p>
            <p className={styles.rueDeHirschau}>
              68 rue de hirschau , 68260 Kingersheim
            </p>
            <p className={styles.numroSiret}>Numéro SIRET :</p>
            <p className={styles.p}>889089504 88908950400019</p>
            <p className={styles.directeurDeLa}>
              Directeur de la publication :
            </p>
            <p className={styles.gomesDeMiranda1}>GOMES DE MIRANDA Virgile</p>
            <p className={styles.contact}>Contact :</p>
            <p className={styles.electrick68gmailcom06}>
              electrick68@gmail.com - 06 01 25 40 43
            </p>
            <p className={styles.hbergeurDuSite}>Hébergeur du site :</p>
            <p className={styles.nomEtCoordonnes}>
              [Nom et coordonnées de l'hébergeur]
            </p>
            <p className={styles.rcs}>RCS :</p>
            <p className={styles.mulhouseA889}>Mulhouse A 889 089 504</p>
            <p className={styles.tvaIntracommunautaire}>
              TVA intracommunautaire :
            </p>
            <p className={styles.fr63889089504}>FR63889089504</p>
            <p className={styles.cettePageConstitue}>
              Cette page constitue les mentions légales régissant l'utilisation
              de notre site. En utilisant ce site, vous acceptez ces mentions
              légales. Toute reproduction totale ou partielle du site est
              interdite sans autorisation préalable.
            </p>
          </div>
        </section>
        <Bottom3
          propHeight="unset"
          onConditionsGnralesDutilisaClick={onConditionsGnralesDutilisaClick}
          onPolitiqueDeConfidentialitClick={onPolitiqueDeConfidentialitClick}
          onAccueilTextClick={onAccueilTextClick}
          onAProposText1Click={onAProposText1Click}
          onNousContacterTextClick={onNousContacterTextClick}
          logoFooter="/rectangle-8432@2x.png"
          bottomFlex="1"
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

export default PageMentionsLgales;
