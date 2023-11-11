import React, { ChangeEvent, useEffect, useState } from "react";

import { Node } from "./components/Node";
import { NodeData } from "./types";
import {
  findNode,
  handleNodeWasChecked,
  handleNodeWasIndeterminate,
  handleNodeWasUnchecked,
} from "./utils";

export type TreeViewProps = {
  data: NodeData[];
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
