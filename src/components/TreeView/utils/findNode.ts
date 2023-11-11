import { NodeData } from "../types";

export const findNode = (
  nodeId: NodeData["id"],
  tree: NodeData[]
): NodeData | undefined => {
  let foundNode;
  if (tree == null) return;

  if (foundNode) {
    return foundNode;
  }

  for (const node of tree) {
    if (node.id === nodeId) {
      return node;
    }
    if (node.childrenNodes) {
      foundNode = findNode(nodeId, node.childrenNodes);
      if (foundNode) return foundNode;
    }
  }
};
