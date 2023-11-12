import React from "react";

import { TreeView } from "../index";
import { PLAIN_TREE_VIEW_DATA } from "../__fixtures__/plainTreeView";
import { CHECKBOX_TREE_VIEW_DATA } from "../__fixtures__";

const plainTreeViewProps = {
  type: "plain" as const,
  data: PLAIN_TREE_VIEW_DATA,
};

const checkboxTreeViewProps = {
  type: "checkbox" as const,
  data: CHECKBOX_TREE_VIEW_DATA,
};

describe("<TreeView />", () => {
  it("renders", () => {
    cy.mount(<TreeView {...plainTreeViewProps} />);
  });

  it("renders a plain tree view if type 'plain' is passed", () => {
    cy.mount(<TreeView {...plainTreeViewProps} />);
    cy.get("ul").should("exist");
    cy.get("h2").should("have.text", "Languages");
  });

  it("renders a checkbox tree view if type 'checkbox' is passed", () => {
    cy.mount(<TreeView {...checkboxTreeViewProps} />);
    cy.get("ul").should("exist");
    cy.get("input").should("exist");
    cy.get("h2").should("have.text", "Languages");
  });
});
