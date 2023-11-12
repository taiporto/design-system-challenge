import React from "react";

import { Checkbox } from "../index";

const checkboxProps = {
  id: "testCheckbox",
  value: "testCheckbox",
  label: "Test Checkbox",
  onChange: cy.spy().as("onChangeSpy"),
  checked: false,
  disabled: false,
  indeterminate: false,
};

describe("<Checkbox />", () => {
  it("renders", () => {
    cy.mount(<Checkbox {...checkboxProps} />);
    cy.get("input")
      .should("exist")
      .should("have.a.property", "value", "testCheckbox");
    cy.get("label").should("have.text", "Test Checkbox");
  });

  it("triggers onChange when clicked", () => {
    cy.mount(<Checkbox {...checkboxProps} />);
    cy.get("input").click();
    cy.get("@onChangeSpy").should("have.been.calledWith", 1);
  });

  describe("when disabled", () => {
    it("should render a disabled checkbox", () => {
      cy.mount(<Checkbox {...checkboxProps} disabled />);
      cy.get("input").should("be.disabled");
    });
  });

  describe("when checked", () => {
    it("should render a checked checkbox", () => {
      cy.mount(<Checkbox {...checkboxProps} checked />);
      cy.get("input").should("be.checked");
    });
  });

  describe("when indeterminate", () => {
    it("should render an indeterminate checkbox", () => {
      cy.mount(<Checkbox {...checkboxProps} indeterminate />);
      cy.get("input").should("be.checked");
      cy.get("input").should("have.a.property", "indeterminate", true);
    });
  });
});
