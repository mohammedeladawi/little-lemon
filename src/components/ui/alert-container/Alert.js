import styles from "./Alert.module.css";

const Alert = ({ children }) => {
  return (
    <>
      <div className={styles["Overlay"]}></div>
      <div className={styles["Alert"]}>{children}</div>
    </>
  );
};

export default Alert;
