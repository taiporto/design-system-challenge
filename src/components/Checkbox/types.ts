import { ChangeEvent } from "react";

export type CheckboxProps = {
  id: string;
  value: string;
  onChange: (event: ChangeEvent<HTMLInputElement>) => void;
  name?: string;
  label?: string;
  checked?: boolean;
  disabled?: boolean;
  indeterminate?: boolean;
};
