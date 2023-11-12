import { ChangeEvent } from "react";

type Element = keyof HTMLElementTagNameMap;

type ElementProps<T> = T extends Element
  ? Partial<HTMLElementTagNameMap[T]>
  : never;

export type PlainNode<T> = {
  label: string;
  tag?: T;
  childrenNodes?: PlainNode<T>[];
} & ElementProps<T>;

export type CheckboxNode = {
  id: string;
  label: string;
  parentId?: string;
  value?: string;
  checked?: boolean;
  disabled?: boolean;
  indeterminate?: boolean;
  childrenNodes?: CheckboxNode[];
};

export type TreeViewProps<T = Element> =
  | {
      /**
       * The type of TreeView to be rendered. Alters the type of data that can be passed to the component
       */
      type: "checkbox";
      /**
       * The data to be rendered. If it is a checkbox tree, the data nodes in the array must have at least an id and a label. Otherwise, they must have at least a label
       * @type CheckboxNode: { id: string; label: string; parentId?: string; value?: string;  checked?: boolean; disabled?: boolean; indeterminate?: boolean; childrenNodes?: CheckboxNode[]; }
       */
      data: CheckboxNode[];
      /**
       * Triggers when any node is clicked and receives the event of the change as a parameter
       */
      onNodeChange?: (event: ChangeEvent<HTMLInputElement>) => void;
      /**
       * Triggers when the tree is clicked and receives the changed tree as a parameter
       */
      onTreeChange?: (tree: CheckboxNode[]) => void;
    }
  | {
      type: "plain";
      /**
       * @type PlainNode: { label: string; tag?: ElementTag; childrenNodes: PlainNode[], ...ElementProps<ElementTag> }
       */
      data: PlainNode<T>[];
      onNodeChange?: never;
      onTreeChange?: never;
    };
