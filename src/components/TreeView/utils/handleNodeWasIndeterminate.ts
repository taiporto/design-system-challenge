import { NodeData } from "../types";
import { cloneTree } from "./cloneTree";
import { findNode } from "./findNode";

export const handleNodeWasIndeterminate = (
  nodeId: NodeData["id"],
  tree: NodeData[]
) => {
  let newTree = cloneTree(tree);
  const node = findNode(nodeId, newTree);

  if (node) {
    node.checked = false;
    node.indeterminate = false;

    if (node.childrenNodes) {
      node.childrenNodes.forEach((node: NodeData) => {
        newTree = handleNodeWasIndeterminate(node.id, newTree);
      });
    }
  }
  return newTree;
};
