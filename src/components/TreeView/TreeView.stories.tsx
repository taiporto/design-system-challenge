import type { Meta, StoryObj } from "@storybook/react";

import { TreeView } from "./index";
import { PLAIN_TREE_VIEW_DATA, CHECKBOX_TREE_VIEW_DATA } from "./__fixtures__";
import { ChangeEvent } from "react";
import { CheckboxNode } from "./types";

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
    data: PLAIN_TREE_VIEW_DATA,
  },
};

export const Checkbox: Story = {
  args: {
    type: "checkbox",
    data: CHECKBOX_TREE_VIEW_DATA,
    onNodeChange: (data: ChangeEvent<HTMLInputElement>) => console.log(data),
    onTreeChange: (data: CheckboxNode[]) => console.log(data),
  },
};
