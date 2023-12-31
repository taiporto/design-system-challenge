# Design System Challenge

This is the solution for the [Design System Challenge](https://gist.github.com/andersonba/6b1d07348e7baaf282a27259996d6520) proposed as an evaluation of aptness for a Front-end developer position.

For technical details and implementation logs, check out the [History file](./HISTORY.md).

## Running the project

This project is built with Vite and Yarn. To run it, follow these steps:

1. Use `nvm`, `asdf`, or any other Node version management (including just installing the correct Node version from the [website](https://nodejs.org/en/download)) to ensure your Node.js version is `20.9.0`
2. Install Yarn globally if you don't have it by running `npm install yarn -g`.
3. Run `yarn --version` inside the project's folder to check the version that the project is using. The `.yarn/yarn-4.0.1.cjs` file should ensure that the newest Yarn is used, but if you don't see `4.0.1` as the result of the `yarn --version` command, check the [Troubleshooting](#troubleshooting) section to understand how to solve it. For more context on the reason for using Yarn 4, check History's [technical choices section](./HISTORY.md#technical-choices).
4. Run `yarn install` to install all the packages.

### Running Storybook

Run `yarn run storybook`. Storybook should be available at [`http://localhost:6006/`](http://localhost:6006/).

### Running the index page

Run `yarn dev`. The index page provides a minimal structure to render the TreeView component outside of a Storybook environment.

It should be available at [`http://127.0.0.1:3000/`](http://127.0.0.1:3000/).

## Troubleshooting

### Yarn is not 4.0.1 or installing the packages prompts a `string-width` dependency error

Ensure you're running Node.js 20.9.0 and then run the following, in order:

```bash
corepack enable;
yarn set version berry;
yarn install
```

### Storybook is not showing the stories individually, only the docs for the components

Remove `node_modules`, clean Yarn's cache and install the dependencies again:

1. `rm -rf node_modules`
2. `yarn cache clean`
3. `yarn install`