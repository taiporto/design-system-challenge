import { NodeData } from "../types";
import { cloneTree } from "./cloneTree";
import { findNode } from "./findNode";

export const handleNodeWasIndeterminate = (
  nodeId: NodeData["id"],
  tree: NodeData[]
) => {
  const newTree = cloneTree(tree);
  const node = findNode(nodeId, newTree);

  if (node) {
    node.checked = false;
    node.indeterminate = undefined;

    node.childrenNodes!.forEach((node: NodeData) => {
      node.checked = false;
      node.indeterminate = undefined;
    });
  }
  return newTree;
};
