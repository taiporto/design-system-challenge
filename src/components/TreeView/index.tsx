import React, { ChangeEvent, useState } from "react";

import { Node } from "./components/Node";
import { NodeData } from "./types";
import { TreeViewProvider } from "./context/treeView";

export type TreeViewProps = {
  data: NodeData[];
};

const nodeHasParent = (node: NodeData) => !!node.parentId;

const nodeHasChildren = (node: NodeData) => !!node.childrenNodes;

const handleNodeWasIndeterminate = (
  nodeId: NodeData["id"],
  tree: NodeData[]
) => {
  let newTree = [...tree];
  const indeterminateNode = newTree.find(
    (node: NodeData) => node.id === nodeId
  );

  if (!indeterminateNode) return newTree;

  indeterminateNode.checked = false;
  indeterminateNode.indeterminate = false;

  if (nodeHasParent(indeterminateNode)) {
    const parentNode = newTree.find(
      (node: NodeData) => node.id === indeterminateNode.parentId
    );
    if (!parentNode) return newTree;

    newTree = handleNodeWasIndeterminate(parentNode.id, newTree);
  }

  return newTree;
};

const handleNodeWasChecked = (nodeId: NodeData["id"], tree: NodeData[]) => {
  let newTree = [...tree];
  const checkedNode = newTree.find((node) => node.id === nodeId);
  if (!checkedNode) return newTree;

  if (nodeHasParent(checkedNode)) {
    const parentNode = newTree.find((node) => node.id === checkedNode.parentId);
    if (!parentNode || parentNode.checked) return newTree;

    const siblingNodes = newTree.filter(
      (node) => node.parentId === parentNode.id && node.id !== checkedNode.id
    );

    const checkedSiblingNodes = siblingNodes.filter((node) => node.checked);

    // If all sibling nodes are checked
    if (siblingNodes.length === checkedSiblingNodes.length) {
      parentNode.checked = true;
    } else {
      // If not all sibling nodes are checked
      parentNode.checked = undefined;
      parentNode.indeterminate = true;
    }

    newTree = handleNodeWasChecked(parentNode.id, newTree);
  }

  if (nodeHasChildren(checkedNode)) {
    checkedNode.childrenNodes!.forEach((childNode) => {
      childNode.checked = true;
      newTree = handleNodeWasChecked(childNode.id, newTree);
    });
  }

  return newTree;
};

const handleNodeWasUnchecked = (nodeId: NodeData["id"], tree: NodeData[]) => {
  let newTree = [...tree];
  const uncheckedNode = newTree.find((node) => node.id === nodeId);

  if (!uncheckedNode) return newTree;

  if (nodeHasParent(uncheckedNode)) {
    const parentNode = newTree.find(
      (node) => node.id === uncheckedNode.parentId
    );
    if (!parentNode || !parentNode.checked) return newTree;

    const siblingNodes = newTree.filter(
      (node) => node.parentId === parentNode.id && node.id !== uncheckedNode.id
    );

    const uncheckedSiblingNodes = siblingNodes.filter((node) => !node.checked);

    // If all sibling nodes are unchecked
    if (siblingNodes.length === uncheckedSiblingNodes.length) {
      parentNode.checked = false;
    } else {
      // If not all sibling nodes are unchecked
      parentNode.checked = undefined;
      parentNode.indeterminate = true;
    }

    newTree = handleNodeWasChecked(parentNode.id, newTree);
  }

  return newTree;
};

export const TreeView = ({ data }: TreeViewProps) => {
  const [treeViewData, setTreeViewData] = useState<NodeData[]>(data);

  const handleNodeChange = (event: ChangeEvent<HTMLInputElement>) => {
    const { target } = event;

    if (target.indeterminate) {
      const newTree = handleNodeWasIndeterminate(target.id, treeViewData);
      setTreeViewData(newTree);
    } else if (target.checked) {
      const newTree = handleNodeWasChecked(target.id, treeViewData);
      setTreeViewData(newTree);
    } else {
      const newTree = handleNodeWasUnchecked(target.id, treeViewData);
      setTreeViewData(newTree);
    }
  };

  return (
    <TreeViewProvider data={treeViewData}>
      <ul>
        {treeViewData.map((node) => {
          return (
            <li key={node.id}>
              <Node nodeData={node} onChange={handleNodeChange} />
            </li>
          );
        })}
      </ul>
    </TreeViewProvider>
  );
};
