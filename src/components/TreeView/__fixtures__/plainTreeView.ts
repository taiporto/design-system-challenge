import { PlainNode } from "../types";

export const PLAIN_TREE_VIEW_DATA: PlainNode<"h2" | "h3" | "a">[] = [
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
