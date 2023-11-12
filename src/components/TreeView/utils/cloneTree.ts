import { CheckboxNode } from "../types";

export const cloneTree = (forest: CheckboxNode[]): CheckboxNode[] => {
  return forest.map((tree) => ({
    ...tree,
    childrenNodes: tree.childrenNodes
      ? cloneTree(tree.childrenNodes)
      : undefined,
  }));
};
