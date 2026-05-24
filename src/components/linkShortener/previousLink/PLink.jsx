import { useState } from "react";
import styles from "./pLink.module.css";
import Button from "../../button/Button";

const PLink = ({ original, shortened }) => {
  const [copied, setCopied] = useState(false);
  const onClick = async () => {
    try {
      await navigator.clipboard.writeText(shortened);
      setCopied(true);
      const timeout = setTimeout(() => {
        setCopied(false);
      }, 3500);
    } catch (err) {
      alert("Failed to copy");
    }
  };

  return (
    <div className={styles.card}>
      <div className={styles.linksContainer}>
        <span className={styles.original}>{original}</span>
        <hr className={styles.hr} />
        <span className={styles.shortened}>{shortened}</span>
      </div>
      {shortened && (
        <Button
          onClick={onClick}
          variant={!copied ? "square" : "squareCopied"}
          className={styles.button}
        >
          {!copied ? "Copy" : "Copied!"}
        </Button>
      )}
    </div>
  );
};

const Loading = () => {
  return <span>Shortening...</span>;
};

export default PLink;
