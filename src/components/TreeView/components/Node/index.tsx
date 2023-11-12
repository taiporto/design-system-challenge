import React, { ChangeEvent } from "react";

import { Collapsible } from "../../../Collapsible";
import { Checkbox } from "../../../Checkbox";
import { NodeData } from "../../types";

import styles from "../../style.module.scss";

type NodeProps = {
  nodeData: NodeData;
  onChange: (event: ChangeEvent<HTMLInputElement>) => void;
};

export const Node = ({ nodeData, onChange }: NodeProps) => {

  const isCheckboxDisabled = nodeData.disabled ?? false;

  if (!nodeData.childrenNodes) {
    return (
      <Checkbox
        {...nodeData}
        value={nodeData.value ?? nodeData.id}
        onChange={onChange}
        classNames={styles["my-baseh"]}
      />
    );
  }

  return (
    <Collapsible
      isOpen={false}
      trigger={
        <Checkbox
          {...nodeData}
          value={nodeData.value ?? nodeData.id}
          onChange={onChange}
        />
      }
    >
      <ul className={`${styles["br-list"]} ${styles["mb-0"]}`}>
        {nodeData.childrenNodes.map((node) => {
          if (isCheckboxDisabled) node.disabled = true;
          return (
            <li
              className={`${styles["br-item"]} ${styles["pl-5x"]}`}
              key={node.id}
            >
              <Node nodeData={node} onChange={onChange} />
            </li>
          );
        })}
      </ul>
    </Collapsible>
  );
};
