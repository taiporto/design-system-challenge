export type NodeData = {
  label: string;
  id?: string;
  value?: string;
  checked?: boolean;
  disabled?: boolean;
  indeterminate?: boolean;
  childrenNodes?: NodeData[];
  parentId?: string;
};
