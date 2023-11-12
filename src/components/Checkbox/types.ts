import { ChangeEvent } from "react";

export type CheckboxProps = {
  /**
   * Unique identifier for the checkbox
   */
  id: string;
  /**
   * The checkbox's value
   */
  value: string;
  /**
   * The text to be shown on the right side of the checkbox
   */
  label?: string;
  /**
   *If the checkbox is checked, checked styles will be applied to it
   */
  checked?: boolean;
  /**
   *If the checkbox is indeterminate, indeterminate styles will be applied to it
   */
  indeterminate?: boolean;
  /**
   *If the checkbox is disabled, disabled styles will be applied to it
   */
  disabled?: boolean;
  /**
   * The class names passed here will be applied to the external container div that encompasses the checkbox and the label
   */
  classNames?: string;
  /**
   * Custom onChange handler
   */
  onChange?: (event: ChangeEvent<HTMLInputElement>) => void;
};
