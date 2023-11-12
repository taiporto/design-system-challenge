import { PlainNode } from "../types";

export const STORYBOOK_PLAIN_TREE_VIEW_DATA: PlainNode<"h2" | "h3" | "a">[] = [
  {
    label: "Languages",
    tag: "h2",
    childrenNodes: [
      {
        label: "Front-end",
        tag: "h3",
        childrenNodes: [
          {
            label: "TypeScript",
            tag: "a",
            href: "https://www.typescriptlang.org/",
            target: "_blank",
          },
          {
            label: "JavaScript",
            tag: "a",
            href: "https://developer.mozilla.org/en-US/docs/Web/JavaScript",
            target: "_blank",
          },
        ],
      },
      {
        label: "Back-end",
        tag: "h3",
        childrenNodes: [
          {
            label: "Python",
            tag: "a",
            href: "https://www.python.org/",
            target: "_blank",
          },
          {
            label: "Ruby",
            tag: "a",
            href: "https://www.ruby-lang.org/en/",
            target: "_blank",
          },
        ],
      },
    ],
  },
  {
    label: "Frameworks and Libraries",
    tag: "h2",
    childrenNodes: [
      {
        label: "Front-end",
        tag: "h3",
        childrenNodes: [
          {
            label: "React",
            tag: "a",
            href: "https://reactjs.org/",
            target: "_blank",
          },
          {
            label: "Vue.js",
            tag: "a",
            href: "https://vuejs.org/",
            target: "_blank",
          },
        ],
      },
      {
        label: "Back-end",
        tag: "h3",
        childrenNodes: [
          {
            label: "Flask",
            tag: "a",
            href: "https://flask.palletsprojects.com/en/1.1.x/",
            target: "_blank",
          },
          {
            label: "Rails",
            tag: "a",
            href: "https://rubyonrails.org/",
            target: "_blank",
          },
        ],
      },
    ],
  },
];

export const STORYBOOK_CHECKBOX_TREE_VIEW_DATA = [
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
