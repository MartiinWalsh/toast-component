import React, { useContext } from "react";

import Toast from "../Toast";
import styles from "./ToastShelf.module.css";
import { ToastContext } from "../ToastProvider";

function ToastShelf() {
  const { toasts } = useContext(ToastContext);
  console.log(toasts);
  return (
    <ol className={styles.wrapper}>
      
      {toasts &&
        toasts.map((toast) => (
          <li id={toast.id} className={styles.toastWrapper}>
            <Toast id={toast.id} variant={toast.variant}>
              {toast.message}
            </Toast>
          </li>
        ))}
    </ol>
  );
}

export default ToastShelf;
