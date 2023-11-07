export type CheckboxProps = {
  id: string;
  value: string;
  onChange?: () => void;
  name?: string;
  label?: string;
  checked?: boolean;
  disabled?: boolean;
  indeterminate?: boolean;
};
