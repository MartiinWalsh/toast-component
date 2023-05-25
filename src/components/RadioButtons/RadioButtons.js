import React from "react";
import { memo } from "react";
import styles from "../ToastPlayground/ToastPlayground.module.css";

function RadioButtons({ id, buttonOptions, value, setValue }) {
  return (
    <>
      <div className={styles.label}>Variant</div>
      {buttonOptions.map((iterValue) => {
        return (
          <div
            key={iterValue}
            className={`${styles.inputWrapper} ${styles.radioWrapper}`}
          >
            <label htmlFor={`${id}-${iterValue}`}>
              <input
                id={`${id}-${iterValue}`}
                type="radio"
                name={`${id}`}
                value={iterValue}
                checked={value === iterValue}
                onChange={() => setValue(iterValue)}
              />
              {iterValue}
            </label>
          </div>
        );
      })}
    </>
  );
}

export default memo(RadioButtons);
