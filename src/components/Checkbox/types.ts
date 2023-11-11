import { ChangeEvent } from "react";

export type CheckboxProps = {
  id: string;
  value: string;
  checked?: boolean;
  onChange?: (event: ChangeEvent<HTMLInputElement>) => void;
  name?: string;
  label?: string;
  disabled?: boolean;
  indeterminate?: boolean;
  classNames?: string;
};
