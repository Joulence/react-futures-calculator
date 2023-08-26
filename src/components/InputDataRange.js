import { useState } from "react";

import styles from "./InputDataRange.module.scss";

function InputDataRange() {
  const [rangeNumber, setRangeNumber] = useState(0);

  const rangeNumberHandler = (event) => {
    setRangeNumber(event.target.value);
  };

  return (
    <div className={styles.range}>
      <label>{rangeNumber}</label>
      <input
        onChange={rangeNumberHandler}
        type="range"
        min="0"
        max="100"
        value={rangeNumber}
      />
    </div>
  );
}

export default InputDataRange;
