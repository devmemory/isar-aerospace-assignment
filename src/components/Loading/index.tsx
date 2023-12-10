import React from "react";
import styles from "./loading.module.css";

const Loading = ({ background = true }: { background?: boolean }) => {
  return background ? (
    <div className={styles.div_bg}>
      <div className={styles.div_loading}>
        <div />
      </div>
    </div>
  ) : (
    <div className={styles.div_loading}>
      <div />
    </div>
  );
};

export default Loading;
