import React from "react";

import { Node } from "./components/Node";
import { NodeData } from "./types";

export type TreeViewProps = {
  data: NodeData[];
};

export const TreeView = ({ data }: TreeViewProps) => {
  return (
    <div>
      {data.map((node) => {
        return <Node key={node.id} nodeData={node} />;
      })}
    </div>
  );
};
