import { Checkbox } from "../Checkbox/index";
import type { Meta, StoryObj } from "@storybook/react";

import { Collapsible } from "./index";

// More on how to set up stories at: https://storybook.js.org/docs/react/writing-stories/introduction#default-export
const meta = {
  title: "Example/Collapsible",
  component: Collapsible,
  parameters: {
    // Optional parameter to center the component in the Canvas. More info: https://storybook.js.org/docs/react/configure/story-layout
    layout: "centered",
  },
  // This component will have an automatically generated Autodocs entry: https://storybook.js.org/docs/react/writing-docs/autodocs
  tags: ["autodocs"],
} satisfies Meta<typeof Collapsible>;

export default meta;
type Story = StoryObj<typeof meta>;

// More on writing stories with args: https://storybook.js.org/docs/react/writing-stories/args
export const Primary: Story = {
  args: {
    isOpen: false,
    trigger: (
      <Checkbox id="checkbox-1" label="Checkbox" data-parent="group-1" />
    ),
    children: (
      <div>
        <Checkbox id="checkbox-2" label="Checkbox" data-child="group-1" />
        <Checkbox id="checkbox-3" label="Checkbox" data-child="group-1" />
      </div>
    ),
  },
};
