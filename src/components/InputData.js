import InputDataPositionButtons from "./InputDataPositionButtons";
import styles from "./InputData.module.scss";
import InputDataRange from "./InputDataRange";
import InputDataAmount from "./InputDataAmount";

function InputData() {
  return (
    <div className={styles["input-data"]}>
      <InputDataPositionButtons />
      <InputDataRange />
      <InputDataAmount />
      <button>Calculate</button>
    </div>
  );
}

export default InputData;
