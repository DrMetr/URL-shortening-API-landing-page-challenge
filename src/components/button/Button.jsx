import styles from "./button.module.css";

const Button = ({
  children,
  onClick,
  type = "button",
  className = "",
  variant = "default",
  ...props
}) => {
  const classes = [styles.base, styles[variant], className].join(" ").trim();

  return (
    <button {...props} type={type} className={classes} onClick={onClick}>
      {children}
    </button>
  );
};

export default Button;
