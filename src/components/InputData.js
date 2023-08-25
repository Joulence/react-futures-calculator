import { useState } from "react";
import styles from "./InputData.module.scss";

function InputData() {
  const [inputPosition, setInputPosition] = useState("");

  const inputPositionHandler = (event) => {
    setInputPosition(event.target.textContent);
    console.log(inputPosition);
  };

  return (
    <div className={styles["input-data"]}>
      <div>
        <button
          className={
            inputPosition === "Long"
              ? `${styles["input-data__btn"]} ${styles["active-long"]}`
              : ""
          }
          onClick={inputPositionHandler}
        >
          Long
        </button>
        <button
          className={
            inputPosition === "Short"
              ? `${styles["input-data__btn"]} ${styles["active-short"]}`
              : ""
          }
          onClick={inputPositionHandler}
        >
          Short
        </button>
      </div>
      <div>
        <input type="range" />
      </div>
      <div>data</div>
      <button>Calculate</button>
    </div>
  );
}

export default InputData;
