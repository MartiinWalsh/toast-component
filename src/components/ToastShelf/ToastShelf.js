import React from "react";

import Toast from "../Toast";
import styles from "./ToastShelf.module.css";

function ToastShelf({ toastObjects, handleCloseToast }) {
  return (
    <ol className={styles.wrapper}>
      {toastObjects &&
        toastObjects.map(({ message, variant, id }) => (
          <li className={styles.toastWrapper}>
            <Toast id={id} variant={variant} handleCloseToast={handleCloseToast}>{message}</Toast>
          </li>
        ))}
    </ol>
  );
}

export default ToastShelf;
