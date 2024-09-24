import styles from "./Select.module.css";
import React from "react";
import DownArrowIcon from "../../../public/icons/downArrow.svg";

interface Props {
  label: string;
  placeholder: string;
}

const Select: React.FC<Props> = ({ label, placeholder }: Props) => {
  return (
    <div className={styles.formGroup}>
      <label htmlFor={`input-${label}`} className={styles.formControl}>
        {label}
      </label>

      <label htmlFor={`input-${label}`} className={styles.inputFormControl}>
        <div>{placeholder}</div>
        <div>
          <DownArrowIcon />
        </div>
      </label>
    </div>
  );
};

export default Select;
