export type CollapsibleProps = {
  /**
   * Defines the initial state of the collapsible
   */
  isOpen: boolean;
  /**
   * Defines the trigger element for the collapsible. This element, when clicked, will trigger the collapsible to open/close
   */
  trigger: React.ReactNode;
  /**
   * Anything passed as children to the Collapsible component will be rendered as the collapsible content
   */
  children: React.ReactNode;
};
