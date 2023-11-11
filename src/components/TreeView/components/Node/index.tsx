import React, { ChangeEvent } from "react";

import { Collapsible } from "../../../Collapsible";
import { Checkbox } from "../../../Checkbox";
import { NodeData } from "../../types";

type NodeProps = {
  nodeData: NodeData;
  onChange: (event: ChangeEvent<HTMLInputElement>) => void;
};

export const Node = ({ nodeData, onChange }: NodeProps) => {
  if (!nodeData.childrenNodes) {
    return (
      <Checkbox
        {...nodeData}
        value={nodeData.value ?? nodeData.id}
        onChange={onChange}
      />
    );
  }

  return (
    <ul>
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
        {nodeData.childrenNodes.map((node) => {
          return (
            <li key={node.id}>
              <Node nodeData={node} onChange={onChange} />
            </li>
          );
        })}
      </Collapsible>
    </ul>
  );
};
