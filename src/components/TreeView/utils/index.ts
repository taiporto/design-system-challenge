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

const cloneForest = (forest: NodeData[]): NodeData[] => {
  return forest.map((tree) => ({
    ...tree,
    childrenNodes: tree.childrenNodes
      ? cloneForest(tree.childrenNodes)
      : undefined,
  }));
};

export const handleNodeWasIndeterminate = (
  nodeId: NodeData["id"],
  tree: NodeData[]
) => {
  const newTree = cloneForest(tree);
  const node = findNode(nodeId, newTree);

  if (node) {
    node.checked = false;
    node.indeterminate = undefined;

    node.childrenNodes!.forEach((node) => {
      node.checked = false;
      node.indeterminate = undefined;
    });
  }
  return newTree;
};

export const handleNodeWasChecked = (
  nodeId: NodeData["id"],
  tree: NodeData[]
) => {
  const newTree = cloneForest(tree);
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

export const handleNodeWasUnchecked = (
  nodeId: NodeData["id"],
  tree: NodeData[]
) => {
  const newTree = cloneForest(tree);
  const node = findNode(nodeId, newTree);

  if (node) {
    node.checked = false;

    if (node.childrenNodes) {
      node.childrenNodes.forEach((node) => {
        node.checked = false;
        node.indeterminate = false;
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
