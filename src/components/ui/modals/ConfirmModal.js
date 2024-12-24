import React from "react";
import Alert from "../alert-container/Alert";
import ReactDom from "react-dom";
import styles from "./ConfirmModal.module.css";

const ConfirmModal = ({
  isOpen,
  title,
  message,
  onConfirm: handleConfirm,
  onCancel: handleCancel,
}) => {
  if (!isOpen) return null;

  return ReactDom.createPortal(
    <Alert>
      <h4 className={styles["confirm-title"]}>{title}</h4>
      <p className={styles["confirm-message"]}>{message}</p>
      <button
        className={`${styles["btn"]} ${styles["btn-cancel"]}`}
        onClick={handleCancel}
      >
        No
      </button>
      <button
        className={`${styles["btn"]} ${styles["btn-confirm"]}`}
        onClick={handleConfirm}
      >
        Yes
      </button>
    </Alert>,
    document.querySelector("#modal-root")
  );
};

export default ConfirmModal;
