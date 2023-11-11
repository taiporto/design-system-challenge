import { TreeViewProps } from "..";

export const STORYBOOK_TREE_VIEW_DATA: TreeViewProps["data"] = [
  {
    id: "languages",
    label: "Languages",
    childrenNodes: [
      {
        id: "languages-front-end",
        label: "Front-end",
        parentId: "languages",

        childrenNodes: [
          {
            id: "typescript",
            label: "TypeScript",
            parentId: "languages-front-end",
          },
          {
            id: "javascript",
            label: "JavaScript",
            parentId: "languages-front-end",
          },
        ],
      },
      {
        id: "languages-back-end",
        label: "Back-end",
        parentId: "languages",

        childrenNodes: [
          {
            id: "python",
            label: "Python",
            parentId: "languages-back-end",
          },
          {
            id: "ruby",
            label: "Ruby",
            parentId: "languages-back-end",
          },
        ],
      },
    ],
  },
  {
    id: "frameworks",
    label: "Frameworks and Libraries",
    disabled: false,
    indeterminate: false,
    childrenNodes: [
      {
        id: "frameworks-front-end",
        label: "Front-end",
        parentId: "frameworks",

        childrenNodes: [
          {
            id: "react",
            label: "React",
            parentId: "frameworks-front-end",
          },
          {
            id: "vue",
            label: "Vue.js",
            parentId: "frameworks-front-end",
          },
        ],
      },
      {
        id: "frameworks-back-end",
        label: "Back-end",
        parentId: "frameworks",

        childrenNodes: [
          {
            id: "flask",
            label: "Flask",
            parentId: "frameworks-back-end",
          },
          {
            id: "rails",
            label: "Rails",
            parentId: "frameworks-back-end",
          },
        ],
      },
    ],
  },
];
