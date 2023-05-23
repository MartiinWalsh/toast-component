import React, { useState } from "react";

import Button from "../Button";

import styles from "./ToastPlayground.module.css";
import RadioButtons from "../RadioButtons/RadioButtons";
import TextArea from "../TextArea/TextArea";
import ToastShelf from "../ToastShelf/ToastShelf";

const VARIANT_OPTIONS = ["notice", "warning", "success", "error"];

function ToastPlayground() {
  const [message, setMessage] = useState("");
  const [variant, setVariant] = useState("notice");
  const [showToast, setShowToast] = useState(false);
  const [toastObjects, setToastObjects] = useState([]);
  console.log(showToast);

  function handlePopToast(event) {
    event.preventDefault();
    const toastObject = {
      message,
      variant,
      id: crypto.randomUUID(),
    };

    setToastObjects((prevToastList) => {
      return [...prevToastList, toastObject];
    });

    setMessage("");
    setVariant("notice");

    setShowToast(true);
  }

  function handleCloseToast(id) {
    const nextToasts = toastObjects.filter((toast) => {
      return toast.id !== id;
    });

    setToastObjects(nextToasts);
  }

  return (
    <form onSubmit={handlePopToast} className={styles.wrapper}>
      <header>
        <img alt="Cute toast mascot" src="/toast.png" />
        <h1>Toast Playground</h1>
      </header>
      {showToast && (
        <ToastShelf
          toastObjects={toastObjects}
          handleCloseToast={handleCloseToast}
        />
      )}

      <div className={styles.controlsWrapper}>
        <div className={styles.row}>
          <TextArea input={message} setInput={setMessage} label={"Message"} />
        </div>

        <div className={styles.row}>
          <RadioButtons
            id={"variant"}
            buttonOptions={VARIANT_OPTIONS}
            value={variant}
            setValue={setVariant}
          />
        </div>

        <div className={styles.row}>
          <div className={styles.label} />
          <div className={`${styles.inputWrapper} ${styles.radioWrapper}`}>
            <Button>Pop Toast!</Button>
          </div>
        </div>
      </div>
    </form>
  );
}

export default ToastPlayground;
