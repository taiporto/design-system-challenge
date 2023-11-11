export type NodeData = {
  id: string;
  label: string;
  value?: string;
  checked?: boolean;
  disabled?: boolean;
  indeterminate?: boolean;
  childrenNodes?: NodeData[];
  parentId?: string;
};
