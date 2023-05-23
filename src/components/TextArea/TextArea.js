import React from "react";
import { memo } from "react";
import styles from "../ToastPlayground/ToastPlayground.module.css";

function TextArea({ input, setInput, label }) {
  console.log(input);
  return (
    <>
      <label
        htmlFor="message"
        className={styles.label}
        style={{ alignSelf: "baseline" }}
      >
        {label}
      </label>
      <div className={styles.inputWrapper}>
        <textarea
          id={label}
          className={styles.messageInput}
          value={input}
          onChange={(event) => {
            setInput(event.target.value);
          }}
        />
      </div>
    </>
  );
}

export default memo(TextArea);
