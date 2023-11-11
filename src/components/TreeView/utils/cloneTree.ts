import { NodeData } from "../types";

export const cloneTree = (forest: NodeData[]): NodeData[] => {
  return forest.map((tree) => ({
    ...tree,
    childrenNodes: tree.childrenNodes
      ? cloneTree(tree.childrenNodes)
      : undefined,
  }));
};
