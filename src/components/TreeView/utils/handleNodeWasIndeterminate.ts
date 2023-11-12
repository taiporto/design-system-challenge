import { CheckboxNode } from "../types";
import { cloneTree } from "./cloneTree";
import { findNode } from "./findNode";

export const handleNodeWasIndeterminate = (
  nodeId: CheckboxNode["id"],
  tree: CheckboxNode[]
) => {
  let newTree = cloneTree(tree);
  const node = findNode(nodeId, newTree);

  if (node) {
    node.checked = false;
    node.indeterminate = false;

    if (node.childrenNodes) {
      node.childrenNodes.forEach((node: CheckboxNode) => {
        newTree = handleNodeWasIndeterminate(node.id, newTree);
      });
    }
  }
  return newTree;
};
