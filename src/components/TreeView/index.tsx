import React, { ChangeEvent, useEffect, useState } from "react";

import { Node } from "./components/Node";
import { NodeData } from "./types";

export type TreeViewProps = {
  data: NodeData[];
};

const findNode = (
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

const handleNodeWasIndeterminate = (
  nodeId: NodeData["id"],
  tree: NodeData[]
) => {
  const newTree = cloneForest(tree);
  const node = findNode(nodeId, newTree);

  if (node) {
    node.checked = false;
    node.indeterminate = false;

    node.childrenNodes!.forEach((node) => {
      node.checked = false;
      node.indeterminate = false;
    });
  }
  return newTree;
};

const handleNodeWasChecked = (nodeId: NodeData["id"], tree: NodeData[]) => {
  const newTree = cloneForest(tree);
  const node = findNode(nodeId, newTree);

  if (node) {
    node.checked = true;

    if (node.childrenNodes) {
      node.childrenNodes.forEach((node) => {
        node.checked = true;
        node.indeterminate = false;
      });
    }

    if (node.parentId) {
      const nodeParent = findNode(node.parentId, newTree);

      const nodeSiblings = nodeParent?.childrenNodes!.filter(
        (node) => node.id !== nodeId
      );
      const uncheckedSiblings = nodeSiblings?.filter((node) => node.checked);

      if (nodeSiblings?.length === uncheckedSiblings?.length) {
        nodeParent!.checked = true;
        nodeParent!.indeterminate = false;
      } else {
        nodeParent!.checked = undefined;
        nodeParent!.indeterminate = true;
      }
    }
  }

  return newTree;
};

const handleNodeWasUnchecked = (nodeId: NodeData["id"], tree: NodeData[]) => {
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
        nodeParent!.indeterminate = false;
      } else {
        nodeParent!.checked = undefined;
        nodeParent!.indeterminate = true;
      }
    }
  }

  return newTree;
};

export const TreeView = ({ data }: TreeViewProps) => {
  const [treeViewData, setTreeViewData] = useState<NodeData[]>([]);

  useEffect(() => {
    setTreeViewData(data);
  }, [data]);

  const handleNodeChange = (event: ChangeEvent<HTMLInputElement>) => {
    const { target } = event;
    const hasBeenChecked = target.checked;

    setTreeViewData((prevTree) => {
      const node = findNode(target.id, treeViewData);

      if (!node) return prevTree;

      if (node.indeterminate) {
        target.indeterminate = true;
        return handleNodeWasIndeterminate(target.id, prevTree);
      } else if (hasBeenChecked) {
        return handleNodeWasChecked(target.id, prevTree);
      } else {
        return handleNodeWasUnchecked(target.id, prevTree);
      }
    });
  };

  return (
    <ul>
      {treeViewData.map((node) => {
        return (
          <Node nodeData={node} onChange={handleNodeChange} key={node.id} />
        );
      })}
    </ul>
  );
};
