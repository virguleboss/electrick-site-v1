import { useState, useCallback } from "react";
import { useNavigate } from "react-router-dom";
import Drawer from "./Drawer";
import PortalDrawer from "./PortalDrawer";
import styles from "./FrameComponent3.module.css";

const FrameComponent3 = () => {
  const navigate = useNavigate();
  const [isDrawerOpen, setDrawerOpen] = useState(false);

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
      <header className={styles.cGUContainer}>
        <div className={styles.rootFrame}>
          <div className={styles.logoTitre}>
            <img
              className={styles.groupIcon}
              loading="eager"
              alt=""
              src="/group2@2x.png"
            />
            <div className={styles.electricText}>
              <b className={styles.electrick}>Electrick</b>
            </div>
          </div>
          <div className={styles.subFrame}>
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
          <div className={styles.toggleRectangle}>
            <div className={styles.menuToggle} onClick={openDrawer}>
              <div className={styles.condition} />
              <div className={styles.condition1} />
              <div className={styles.condition2} />
            </div>
          </div>
        </div>
      </header>
      {isDrawerOpen && (
        <PortalDrawer placement="Left" onOutsideClick={closeDrawer}>
          <Drawer onClose={closeDrawer} />
        </PortalDrawer>
      )}
    </>
  );
};

export default FrameComponent3;
