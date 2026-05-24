import styles from "./scard.module.css";

const SCard = ({ image, header, text, variant, className = "" }) => {
  const classes = [styles.card, styles[variant], className].join(" ").trim();
  return (
    <div className={classes}>
      <div className={styles.imageWrapper}>
        <img src={image} alt={header} />
      </div>
      <h3 className={styles.header}>{header}</h3>
      <p className={styles.paragraph}>{text}</p>
    </div>
  );
};

export default SCard;
