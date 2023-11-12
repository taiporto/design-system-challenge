import type { Meta, StoryObj } from "@storybook/react";

import { TreeView } from "../index";
import {
  STORYBOOK_CHECKBOX_TREE_VIEW_DATA,
  STORYBOOK_PLAIN_TREE_VIEW_DATA,
} from "./constants";

const meta = {
  title: "Components/TreeView",
  component: TreeView,
  parameters: {
    layout: "centered",
  },
  tags: ["autodocs"],
} satisfies Meta<typeof TreeView>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Plain: Story = {
  args: {
    type: "plain",
    //@ts-expect-error Storybook doesn't read generics correctly
    data: STORYBOOK_PLAIN_TREE_VIEW_DATA,
  },
};

export const Checkbox: Story = {
  args: {
    type: "checkbox",
    data: STORYBOOK_CHECKBOX_TREE_VIEW_DATA,
    onNodeChange: (data) => console.log(data),
    onTreeChange: (data) => console.log(data),
  },
};
