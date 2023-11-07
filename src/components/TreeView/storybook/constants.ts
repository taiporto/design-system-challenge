import { TreeViewProps } from "..";

export const STORYBOOK_TREE_VIEW_DATA: TreeViewProps["data"] = [
  {
    label: "Languages",
    childrenNodes: [
      {
        label: "Front-end",
        childrenNodes: [
          {
            label: "TypeScript",
          },
          {
            label: "JavaScript",
          },
        ],
      },
      {
        label: "Back-end",
        childrenNodes: [
          {
            label: "Python",
          },
          {
            label: "Ruby",
          },
        ],
      },
    ],
  },
];
