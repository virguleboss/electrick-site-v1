import { useMemo } from "react";
import styles from "./FrameComponent1.module.css";

const FrameComponent1 = ({
  frame,
  expertiseTechnique,
  matriseDesDerniresTechnol,
  propWidth,
}) => {
  const expertiseTechniqueIconStyle = useMemo(() => {
    return {
      width: propWidth,
    };
  }, [propWidth]);

  return (
    <div className={styles.technologyMastery}>
      <img
        className={styles.expertiseTechniqueIcon}
        alt=""
        src={frame}
        style={expertiseTechniqueIconStyle}
      />
      <div className={styles.expertiseTechniqueTexte}>
        <div className={styles.expertiseTechnique}>{expertiseTechnique}</div>
        <div className={styles.matriseDesDernires}>
          {matriseDesDerniresTechnol}
        </div>
      </div>
    </div>
  );
};

export default FrameComponent1;
