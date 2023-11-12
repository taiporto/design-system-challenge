import { Checkbox } from "../Checkbox/index";
import type { Meta, StoryObj } from "@storybook/react";

import { Collapsible } from "./index";

const meta = {
  title: "Components/Collapsible",
  component: Collapsible,
  parameters: {
    layout: "centered",
  },
  tags: ["autodocs"],
} satisfies Meta<typeof Collapsible>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {
  args: {
    isOpen: false,
    trigger: <span>I'm a trigger</span>,
    children: (
      <div>
        <Checkbox
          value="firstCheckbox"
          id="checkbox-1"
          label="First Checkbox"
        />
        <Checkbox
          value="secondCheckbox"
          id="checkbox-2"
          label="Second Checkbox"
        />
      </div>
    ),
  },
};
