import type { Meta, StoryObj } from "@storybook/react";

import { TreeView } from "../index";
import { STORYBOOK_TREE_VIEW_DATA } from "./constants";

const meta = {
  title: "Components/TreeView",
  component: TreeView,
  parameters: {
    layout: "centered",
  },
} satisfies Meta<typeof TreeView>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {
  args: {
    data: STORYBOOK_TREE_VIEW_DATA,
    onNodeChange: (data) => console.log(data),
    onTreeChange: (data) => console.log(data),
  },
};
