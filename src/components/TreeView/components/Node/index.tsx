import React from "react";

import { Collapsible } from "../../../Collapsible";
import { Checkbox } from "../../../Checkbox";
import { NodeData } from "../../types";
import { slugfy } from "../../../../utils/slugfy";

type NodeProps = { nodeData: NodeData };

export const Node = ({ nodeData }: NodeProps) => {
  const groupId = `group-${nodeData.id}`;

  const checkboxProps = {
    label: nodeData.label,
    id: nodeData.id ?? slugfy(nodeData.label),
    value: nodeData.value ?? slugfy(nodeData.label),
  };

  const CheckboxNode = {
    single: <Checkbox {...checkboxProps} />,
    parent: <Checkbox {...checkboxProps} data-parent={groupId} />,
  };

  if (!nodeData.childrenNodes) {
    return CheckboxNode.single;
  }

  return (
    <Collapsible isOpen={false} trigger={CheckboxNode.parent}>
      {nodeData.childrenNodes.map((node) => {
        return <Node key={node.id} nodeData={node} data-child={groupId} />;
      })}
    </Collapsible>
  );
};
