import { useState } from "react";
import styles from "./linkInput.module.css";
import Button from "../button/Button";

const LinkInput = ({ onAdd }) => {
  const [inputValue, setInputValue] = useState("");
  const [isError, setIsError] = useState(false);
  const handleAdd = () => {
    if (!inputValue.trim()) {
      setIsError(true);
      return;
    }
    onAdd(inputValue);
    setInputValue("");
    setIsError(false);
  };
  return (
    <div className={styles.container}>
      <div className={styles.inputContainer}>
        <input
          placeholder="Shorten a link here..."
          className={!isError ? `${styles.input}` : `${styles.inputError}`}
          name="Input for link"
          id="Input for link"
          onChange={(e) => setInputValue(e.target.value)}
          value={inputValue}
        />
        <small
          className={
            isError ? `${styles.smallVisible}` : `${styles.smallInvisible}`
          }
        >
          Please add a link
        </small>{" "}
      </div>
      <Button variant="square" onClick={handleAdd} className={styles.button}>
        Shorten&nbsp;it!
      </Button>
    </div>
  );
};

export default LinkInput;
