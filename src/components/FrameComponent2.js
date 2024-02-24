import { useState, useCallback } from "react";
import { useNavigate } from "react-router-dom";
import Drawer from "./Drawer";
import PortalDrawer from "./PortalDrawer";
import styles from "./FrameComponent2.module.css";

const FrameComponent2 = () => {
  const navigate = useNavigate();
  const [isDrawerOpen, setDrawerOpen] = useState(false);

  const onElectrickTextClick = useCallback(() => {
    navigate("/");
  }, [navigate]);

  const onNouTextClick = useCallback(() => {
    navigate("/");
  }, [navigate]);

  const openDrawer = useCallback(() => {
    setDrawerOpen(true);
  }, []);

  const closeDrawer = useCallback(() => {
    setDrawerOpen(false);
  }, []);

  return (
    <>
      <div className={styles.webpassionCreatorFrame}>
        <header className={styles.proposalFrame}>
          <div className={styles.logoTitre}>
            <img
              className={styles.groupIcon}
              loading="eager"
              alt=""
              src="/group2@2x.png"
            />
            <b className={styles.electrick} onClick={onElectrickTextClick}>
              Electrick
            </b>
          </div>
          <div className={styles.menuBarFrame}>
            <div className={styles.menuBar}>
              <div className={styles.nou} onClick={onNouTextClick}>
                Acceuil
              </div>
              <b className={styles.aPropos}>{`A Propos `}</b>
            </div>
          </div>
          <div className={styles.toggleRectangle}>
            <div className={styles.menuToggle} onClick={openDrawer}>
              <div className={styles.rectangles} />
              <div className={styles.rectangles1} />
              <div className={styles.rectangles2} />
            </div>
          </div>
        </header>
      </div>
      {isDrawerOpen && (
        <PortalDrawer placement="Left" onOutsideClick={closeDrawer}>
          <Drawer onClose={closeDrawer} />
        </PortalDrawer>
      )}
    </>
  );
};

export default FrameComponent2;
