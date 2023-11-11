import React from "react";

import * as RadixCollapsible from "@radix-ui/react-collapsible";
import { ChevronDownIcon, ChevronRightIcon } from "@radix-ui/react-icons";

import styles from "./style.module.scss";

type CollapsibleProps = {
  isOpen: boolean;
  trigger: React.ReactNode;
  children: React.ReactNode;
};

export const Collapsible = ({
  isOpen,
  trigger,
  children,
}: CollapsibleProps) => {
  const [open, setOpen] = React.useState(isOpen);

  return (
    <RadixCollapsible.Root open={open} onOpenChange={setOpen}>
      <div className={`${styles["d-flex"]} ${styles["align-items-center"]}`}>
        <RadixCollapsible.Trigger asChild>
          <button
            className={`${styles["mr-1"]} ${styles["br-button"]} ${styles["circle"]}`}
          >
            {open ? <ChevronDownIcon /> : <ChevronRightIcon />}
          </button>
        </RadixCollapsible.Trigger>
        {trigger}
      </div>
      <RadixCollapsible.Content>{children}</RadixCollapsible.Content>
    </RadixCollapsible.Root>
  );
};
