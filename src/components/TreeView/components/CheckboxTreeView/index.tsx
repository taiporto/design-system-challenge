import React, { ChangeEvent, useEffect, useState } from "react";

import styles from "../../style.module.scss";

import { CheckboxNode } from "../CheckboxNode";
import { CheckboxNode as CheckboxNodeProps, TreeViewProps } from "../../types";
import {
  findNode,
  handleNodeWasChecked,
  handleNodeWasIndeterminate,
  handleNodeWasUnchecked,
} from "../../utils";

export type CheckboxTreeViewProps = {
  data: CheckboxNodeProps[];
  onNodeChange?: TreeViewProps["onNodeChange"];
  onTreeChange?: TreeViewProps["onTreeChange"];
};

export const CheckboxTreeView = ({
  data,
  onNodeChange,
  onTreeChange,
}: CheckboxTreeViewProps) => {
  const [treeViewData, setTreeViewData] = useState<CheckboxNodeProps[]>([]);

  useEffect(() => {
    setTreeViewData(data);
  }, [data]);

  useEffect(() => {
    onTreeChange?.(treeViewData);
  }, [treeViewData, onTreeChange]);

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

    onNodeChange?.(event);
  };

  return (
    <ul className={`${styles["br-list"]} ${styles["treeViewList"]}`}>
      {treeViewData.map((node) => {
        return (
          <li className={styles["br-item"]} key={node.id}>
            <CheckboxNode nodeData={node} onChange={handleNodeChange} />
          </li>
        );
      })}
    </ul>
  );
};
