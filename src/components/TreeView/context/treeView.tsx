import { createContext, useContext, useState } from "react";
import { NodeData } from "../types";

type TreeViewContextProps = {
  treeViewData: NodeData[];
  setTreeViewData: (treeViewData: NodeData[]) => void;
};

const TreeViewContext = createContext<TreeViewContextProps>({
  treeViewData: [],
  setTreeViewData: (treeViewData: NodeData[]) => {},
});

type TreeViewProviderProps = {
  data: NodeData[];
  children: React.ReactNode;
};

export const TreeViewProvider = ({ data, children }: TreeViewProviderProps) => {
  const [treeViewData, setTreeViewData] = useState<NodeData[]>(data);
  return (
    <TreeViewContext.Provider value={{ treeViewData, setTreeViewData }}>
      {children}
    </TreeViewContext.Provider>
  );
};

export const useTreeViewProvider = () => useContext(TreeViewContext);
