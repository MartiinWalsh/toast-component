import React, { useState, useContext } from "react";

import Button from "../Button";

import styles from "./ToastPlayground.module.css";
import RadioButtons from "../RadioButtons/RadioButtons";
import TextArea from "../TextArea/TextArea";
import ToastShelf from "../ToastShelf/ToastShelf";
import { ToastContext } from "../ToastProvider";

const VARIANT_OPTIONS = ["notice", "warning", "success", "error"];

function ToastPlayground() {
  const [message, setMessage] = useState("");
  const [variant, setVariant] = useState(VARIANT_OPTIONS[0]);
  const { createToast } = useContext(ToastContext);

  function handlePopToast(event) {
    event.preventDefault();
    createToast(message, variant);
    setMessage("");
    setVariant(VARIANT_OPTIONS[0]);
  }

  return (
    <div className={styles.wrapper}>
      <header>
        <img alt="Cute toast mascot" src="/toast.png" />
        <h1>Toast Playground</h1>
      </header>
      <ToastShelf />

      <form className={styles.controlsWrapper} onSubmit={handlePopToast}>
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
      </form>
    </div>
  );
}

export default ToastPlayground;
