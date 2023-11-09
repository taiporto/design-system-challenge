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
}: CheckboxProps): React.ReactElement => {
  const htmlFor = id || name;

  return (
    <div className={styles["br-checkbox"]}>
      <CheckboxInput
        id={htmlFor}
        value={value}
        name={name}
        disabled={disabled}
        checked={checked}
        onChange={onChange}
        indeterminate={indeterminate ? indeterminate.toString() : undefined}
      />
      <label className={styles.checkboxLabel} htmlFor={htmlFor}>
        {label}
      </label>
    </div>
  );
};
