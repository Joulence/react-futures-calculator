import { useState } from "react";

import styles from "./InputDataPositionButtons.module.scss";

function InputDataPositionButtons() {
  const [inputPosition, setInputPosition] = useState("");

  const inputPositionHandler = (event) => {
    setInputPosition(event.target.textContent);
  };

  return (
    <div className={styles.buttons}>
      <button
        className={
          inputPosition === "Long"
            ? `${styles["buttons-btn"]} ${styles["active-long"]}`
            : `${styles["buttons-btn"]}`
        }
        onClick={inputPositionHandler}
      >
        Long
      </button>
      <button
        className={
          inputPosition === "Short"
            ? `${styles["buttons-btn"]} ${styles["active-short"]}`
            : `${styles["buttons-btn"]}`
        }
        onClick={inputPositionHandler}
      >
        Short
      </button>
    </div>
  );
}

export default InputDataPositionButtons;
