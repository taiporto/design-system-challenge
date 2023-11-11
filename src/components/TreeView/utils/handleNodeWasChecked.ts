import { NodeData } from "../types";
import { cloneTree } from "./cloneTree";
import { findNode } from "./findNode";

export const handleNodeWasChecked = (
  nodeId: NodeData["id"],
  tree: NodeData[]
) => {
  const newTree = cloneTree(tree);
  const node = findNode(nodeId, newTree);

  if (node) {
    node.checked = true;

    if (node.childrenNodes) {
      node.childrenNodes.forEach((node) => {
        node.checked = true;
        node.indeterminate = undefined;
      });
    }

    if (node.parentId) {
      const nodeParent = findNode(node.parentId, newTree);
      nodeParent!.checked = true;

      const nodeSiblings = nodeParent?.childrenNodes!.filter(
        (node) => node.id !== nodeId
      );
      const uncheckedSiblings = nodeSiblings?.filter((node) => node.checked);

      if (nodeSiblings?.length === uncheckedSiblings?.length) {
        nodeParent!.indeterminate = undefined;
      } else {
        nodeParent!.indeterminate = true;
      }
    }
  }

  return newTree;
};
