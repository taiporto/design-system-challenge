import React, { useState } from "react";

import { CheckboxInput } from "./components/CheckboxInput";

import styles from "./style.module.scss";
import { CheckboxProps } from "./types";

export const Checkbox: React.FC<CheckboxProps> = ({
  id,
  name,
  label,
  checked = false,
  disabled = false,
  onChange,
  indeterminate = false,
}: CheckboxProps): React.ReactElement => {
  const [checkedState, setCheckedState] = useState(checked);
  const htmlFor = id || name;

  const handleChange = () => {
    setCheckedState(!checkedState);
  };

  return (
    <div className={styles["br-checkbox"]}>
      <CheckboxInput
        id={htmlFor}
        name={name}
        disabled={disabled}
        checked={checkedState}
        onChange={onChange ?? handleChange}
        indeterminate={indeterminate}
      />
      <label className={styles.checkboxLabel} htmlFor={htmlFor}>
        {label}
      </label>
    </div>
  );
};
