import { ChangeEvent } from "react";

export type CheckboxNode = {
  id: string;
  label: string;
  value?: string;
  checked?: boolean;
  disabled?: boolean;
  indeterminate?: boolean;
  childrenNodes?: CheckboxNode[];
  parentId?: string;
};

type Element = keyof HTMLElementTagNameMap;

type ElementProps<T> = T extends Element
  ? Partial<HTMLElementTagNameMap[T]>
  : never;

export type PlainNode<T extends Element = "span"> = {
  label: string;
  tag?: T;
  childrenNodes?: PlainNode<T>[];
} & ElementProps<T>;

export type TreeViewProps =
  | {
      type: "checkbox";
      data: CheckboxNode[];
      onNodeChange?: (event: ChangeEvent<HTMLInputElement>) => void;
      onTreeChange?: (tree: CheckboxNode[]) => void;
    }
  | {
      type: "plain";
      data: PlainNode[];
      onNodeChange?: never;
      onTreeChange?: never;
    };
