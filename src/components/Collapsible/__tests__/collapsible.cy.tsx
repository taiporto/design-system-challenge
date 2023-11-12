import React from "react";

import { Collapsible } from "../index";

const collapsibleProps = {
  isOpen: false,
  trigger: <div>Test Collapsible</div>,
  children: <div>Test Collapsible Content</div>,
};

describe("<Collapsible />", () => {
  it("renders closed", () => {
    cy.mount(<Collapsible {...collapsibleProps} />);
    cy.get('[data-testid="collapsible-content"]').should("not.exist");
  });

  it("opens the content on trigger click", () => {
    cy.mount(<Collapsible {...collapsibleProps} />);
    cy.get('[data-testid="collapsible-trigger"]').click();
    cy.get('[data-testid="collapsible-content"]').should("exist");
  });
});
