import React, { useState } from "react";

type CheckboxProps = {
  id: string;
  onChange: () => void;
  name?: string;
  label?: string;
  checked?: boolean;
  disabled?: boolean;
};

export const Checkbox = ({
  id,
  onChange,
  name,
  label,
  checked = false,
  disabled = false,
}: CheckboxProps) => {
  const [checkedState, setCheckedState] = useState(checked);
  const htmlFor = id || name;

  const handleChange = () => {
    setCheckedState(!checkedState);
  };

  return (
    <div>
      <input
        type="checkbox"
        name={name}
        id={htmlFor}
        disabled={disabled}
        aria-disabled={disabled}
        checked={checkedState}
        onChange={onChange || handleChange}
      />
      <label htmlFor={htmlFor}>{label}</label>
    </div>
  );
};
