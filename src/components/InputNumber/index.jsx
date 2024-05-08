"use client";
import styles from "./styles.module.scss";

const InputNumber = ({
  label,
  value,
  onchange,
  styleName,
  disabled = false,
}) => {
  return (
    <label className={styles.label}>
      {label}
      <div className={styles.label_container}>
        <span>$</span>
        <input
          className={`${styleName && styles[styleName]}`}
          type="number"
          disabled={disabled}
          defaultValue={value}
          onChange={onchange}
        />
      </div>
    </label>
  );
};

export default InputNumber;
