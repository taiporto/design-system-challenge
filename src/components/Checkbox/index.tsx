import React, { useState } from "react";

import { CheckboxInput } from "./components/CheckboxInput";

import styles from "./style.module.scss";
import { CheckboxProps } from "./types";

export const Checkbox: React.FC<CheckboxProps> = ({
  id,
  value,
  name,
  label,
  checked = false,
  disabled = false,
  onChange,
  indeterminate = false,
  classNames,
}: CheckboxProps): React.ReactElement => {
  const [controlledChecked, setControlledChecked] = useState(checked);
  const htmlFor = id || name;

  const handleChange = () => {
    setControlledChecked((prevChecked) => !prevChecked);
  };

  return (
    <div className={`${styles["br-checkbox"]} ${classNames}`}>
      <CheckboxInput
        id={htmlFor}
        value={value}
        name={name}
        disabled={disabled}
        checked={onChange ? checked : controlledChecked}
        onChange={onChange ?? handleChange}
        indeterminate={indeterminate ? indeterminate.toString() : undefined}
      />
      <label className={styles.checkboxLabel} htmlFor={htmlFor}>
        {label}
      </label>
    </div>
  );
};
