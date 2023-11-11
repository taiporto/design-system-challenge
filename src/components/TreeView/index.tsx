import React, { ChangeEvent, useEffect, useState } from "react";

import styles from "./style.module.scss";

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
    const node = findNode(target.id, treeViewData);
    if (!node) return;

    setTreeViewData((prevTree) => {
      if (node.indeterminate) {
        return handleNodeWasIndeterminate(target.id, prevTree);
      }

      if (hasBeenChecked) {
        return handleNodeWasChecked(target.id, prevTree);
      }

      return handleNodeWasUnchecked(target.id, prevTree);
    });
  };

  return (
    <ul className={`${styles["br-list"]} ${styles["treeViewList"]}`}>
      {treeViewData.map((node) => {
        return (
          <li className={styles["br-item"]} key={node.id}>
            <Node nodeData={node} onChange={handleNodeChange} />
          </li>
        );
      })}
    </ul>
  );
};
