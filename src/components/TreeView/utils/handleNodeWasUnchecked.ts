import { CheckboxNode } from "../types";
import { cloneTree } from "./cloneTree";
import { findNode } from "./findNode";

export const handleNodeWasUnchecked = (
  nodeId: CheckboxNode["id"],
  tree: CheckboxNode[]
) => {
  let newTree = cloneTree(tree);
  const node = findNode(nodeId, newTree);

  if (node) {
    node.checked = false;

    if (node.childrenNodes) {
      node.childrenNodes.forEach((node) => {
        newTree = handleNodeWasUnchecked(node.id, newTree);
      });
    }

    if (node.parentId) {
      const nodeParent = findNode(node.parentId, newTree);

      const nodeSiblings = nodeParent?.childrenNodes!.filter(
        (node) => node.id !== nodeId
      );
      const checkedSiblings = nodeSiblings?.filter((node) => !node.checked);

      if (nodeSiblings?.length === checkedSiblings?.length) {
        nodeParent!.checked = false;
        nodeParent!.indeterminate = undefined;
      } else {
        nodeParent!.indeterminate = true;
      }
    }
  }

  return newTree;
};
