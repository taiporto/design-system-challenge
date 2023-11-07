import type { Meta, StoryObj } from "@storybook/react";

import { TreeView } from "../index";
import { STORYBOOK_TREE_VIEW_DATA } from "./constants";

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

export const Primary: Story = {
  args: {
    data: STORYBOOK_TREE_VIEW_DATA,
  },
};
