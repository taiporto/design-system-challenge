import React, { InputHTMLAttributes } from "react";

export const CheckboxInput = (
  props: InputHTMLAttributes<HTMLInputElement> & { indeterminate: boolean }
): React.ReactElement => {
  return <input type="checkbox" aria-disabled={props.disabled} {...props} />;
};
