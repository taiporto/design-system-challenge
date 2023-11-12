import React, { HTMLAttributes } from "react";

import { Collapsible } from "../../../Collapsible";
import { PlainNode as PlainNodeProps } from "../../types";

import styles from "../../style.module.scss";

type NodeProps = {
  nodeData: PlainNodeProps;
};

export const PlainNode = ({
  nodeData: { tag, label, childrenNodes, ...rest },
}: NodeProps) => {
  const Tag = tag ?? "span";

  const leafComponent = (
    <Tag
      className={`${styles["my-2xh"]} ${styles["p-0"]}`}
      {...(rest as HTMLAttributes<HTMLElementTagNameMap[typeof Tag]>)}
    >
      {label}
    </Tag>
  );

  if (!childrenNodes) {
    return leafComponent;
  }

  return (
    <Collapsible isOpen={false} trigger={leafComponent}>
      <ul
        className={`${styles["br-list"]} ${styles["mb-0"]} ${styles["pl-0"]}`}
      >
        {childrenNodes.map((node) => {
          return (
            <li className={`${styles["br-item"]}`} key={label}>
              <PlainNode nodeData={node} />
            </li>
          );
        })}
      </ul>
    </Collapsible>
  );
};
