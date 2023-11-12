# [Design System Challenge](https://gist.github.com/andersonba/6b1d07348e7baaf282a27259996d6520)

## History

✅ - Done;
🟨 - Doing;

### 2023-11-06

- ✅ Create basic project configuration, scaffolding a React app with Vite and including Sass and Storybook as dependencies
- ✅ Configure the Design System base with fonts, colors and spacings -> Use [existing design system](#technical-choices) as reference
- 🟨 Create base components to be used inside the TreeView component

### 2023-11-07

- ✅ Create base components to be used inside the TreeView component
- 🟨 Create the TreeView components

### 2023-11-08
- 🟨 Create the TreeView components;
  - 🟨 Create TreeView checkbox nodes logic;

### 2023-11-09
- 🟨 Create the TreeView components;
  - 🟨 Create TreeView checkbox nodes logic;

### 2023-11-11
- 🟨 Create the TreeView components;
  - ✅ Create TreeView checkbox nodes base logic;
  - 🟨 Check data availability;
- ✅ Fixes:
  - ✅ Fix indeterminate styles;
  - ✅ Fix general styles;
  - ✅ Fix check not propagating to great-children;
  - ✅ Fix collapsible closing on parent check;
- 🟨 Document the components on Storybook;
- Create Cypress tests;

### 2023-11-12
- 🟨 Create the TreeView components;
  - Check behavior with disabled checkbox;
  - Check data availability;
- Document the components on Storybook;
- Create Cypress config + tests;

## Planned steps

- Create basic project configuration
- Configure the Design System base
- Create base components to be used inside the TreeView component
- Create the TreeView components
- Document the components appropriately on Storybook
  - Add prop descriptions
- Create Cypress config
- Create Cypress tests
- Update the README to add project description and instructions on how to build the project
- [Moonshot] Create unit tests for the components;

## Technical choices

- [Conventional Commits](https://www.conventionalcommits.org/en/v1.0.0/) is being used as a framework to keep the commits organized
- Vite was chosen for its speed and configuration simplicity
- Gov.br was chosen as a design system base because it is built with Sass, which makes the integration easier, and it shares a lot of the colors with the target company.
- The usage of the Radix UI checkbox primitive was considered, but since it doesn't use with the `input` element by default, although it guarantees 100% accessibility despite not using it, it was smarter to work with a default `input` + `label` element combo and use the styles already provided by the Gov.br Design System.
- Radix UI's Collapsible was chosen because it handles aria controls over what is opened or closed by itself, ensuring accessibility standards.

## Technical challenges

- Creating the TreeView logic is hard and it required some research to ensure the component kept its performance while allowing for a simple and clear code.
- It took me a while to understand why data replication wasn't working the way I wanted. I had to refactor it and start from scratch a few times.
- The more "direct" approach of working purely with the DOM methods and data attributes (as the chosen Design System would suggest), was left out in favor of an implementation that worked more closely with React's data structure and principles, using an object state to keep track of the changes in the checkbox tree

## Technical planning

- Expected behavior of tree view nodes:
  - Parent node:
    - If it is checked, all of its children nodes should be checked
    - If it is unchecked, all of its children nodes should be unchecked
    - If not all of its children are checked, it should have an `indeterminate` attribute set to `true`
    - When it has an `indeterminate` attribute:
      - If it is clicked:
        - It should change its state to `checked === false`
        - It should have the `indeterminate` attribute removed
        - All of its children should then be `checked === false`, replicating the parent's state
    - When it is `checked === true`:
      - If it is clicked:
        - It should change its state to `checked === false`
        - All of its children should then be `checked === false`, replicating the parent's state
    - When it is `checked === false`:
      - If it is clicked:
        - It should change its state to `checked === true`
        - All of its children should then be `checked === true`, replicating the parent's state
  - Child node:
    - If it is `checked === false` and it is clicked:
      - It should be `checked === true`
      - If the parent was previously `checked === false`:
        - The parent should now have an `indeterminate` attribute set to it
        - The parent should now be `checked === undefined`
      - If the parent was previously `indeterminate`:
        - Check if all of the child's node siblings are checked:
          - If yes, change the parent to `checked === true` and remove its indeterminate attribute
          - If no, make no changes to the parent
    - If it is `checked === true` and it is clicked:
      - It should be `checked === false`
      - If the parent was previously `checked === true`:
        - The parent should now have an `indeterminate` attribute set to it
        - The parent should now be `checked === undefined`
      - If the parent was previoulsy `indeterminate`:
        - Check if all of the child's node siblings are unchecked:
          - If yes, change the parent to `checked === false` and remove its indeterminate attribute
          - If no, make no changes to the parent
    - If it is `indeterminate` and it is clicked:
      - It should be `checked === false`
      - It should have its `indeterminate` attribute removed
      - It should replicate the behavior to its parent