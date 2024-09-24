import styles from "./Button.module.css";
import React from "react";

interface Props {
  label: string;
}

const Select: React.FC<Props> = ({ label }: Props) => {
  return (
      <div className={styles.button}>{label}</div>
  );
};

export default Select;
