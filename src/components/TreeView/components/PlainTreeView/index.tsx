import React from "react";

import { PlainNode } from "../PlainNode";
import { PlainNode as PlainNodeProps } from "../../types";

import styles from "../../style.module.scss";

type PlainTreeViewProps = {
  data: PlainNodeProps[];
};

export const PlainTreeView = ({ data }: PlainTreeViewProps) => {
  return (
    <ul className={`${styles["br-list"]} ${styles["treeViewList"]}`}>
      {data.map((node) => {
        return (
          <li className={styles["br-item"]} key={node.label}>
            <PlainNode nodeData={node} />
          </li>
        );
      })}
    </ul>
  );
};
