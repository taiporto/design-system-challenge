import React from "react";

import { CheckboxNode, TreeViewProps } from "./types";
import { CheckboxTreeView } from "./components/CheckboxTreeView";
import { PlainTreeView } from "./components/PlainTreeView";

export const TreeView = ({
  type = "plain",
  data,
  onNodeChange,
  onTreeChange,
}: TreeViewProps) => {
  if (type === "checkbox") {
    return (
      <CheckboxTreeView
        data={data as CheckboxNode[]}
        onNodeChange={onNodeChange}
        onTreeChange={onTreeChange}
      />
    );
  }

  return <PlainTreeView data={data} />;
};
