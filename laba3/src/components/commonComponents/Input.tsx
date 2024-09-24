import styles from "./Input.module.css";
import React from "react";

interface Props {
  label: string;
  placeholder: string;
}

const Input: React.FC<Props> = ({ label, placeholder }: Props) => {
  return (
    <div className={styles.formGroup}>
      <label htmlFor={`input-${label}`} className={styles.formControl}>
        {label}
      </label>
      <input
        type="text"
        id={`input-${label}`}
        className={styles.inputFormControl}
        placeholder={placeholder}
      />
    </div>
  );
};

export default Input;
