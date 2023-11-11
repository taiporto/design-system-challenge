import React, { InputHTMLAttributes } from "react";

export const CheckboxInput = (
  props: InputHTMLAttributes<HTMLInputElement> & { indeterminate?: string }
): React.ReactElement => {
  return (
    <input
      type="checkbox"
      aria-disabled={props.disabled}
      checked={props.checked}
      onChange={props.onChange}
      {...props}
    />
  );
};
