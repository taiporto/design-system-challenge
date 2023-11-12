import { NodeData } from "../types";
import { cloneTree } from "./cloneTree";
import { findNode } from "./findNode";

export const handleNodeWasChecked = (
  nodeId: NodeData["id"],
  tree: NodeData[]
): NodeData[] => {
  let newTree = cloneTree(tree);
  const node = findNode(nodeId, newTree);

  if (node) {

    if (node.disabled) return newTree;
    
    node.checked = true;
    node.indeterminate = false;

    if (node.childrenNodes) {
      node.childrenNodes.forEach((node) => {
        newTree = handleNodeWasChecked(node.id, newTree);
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
