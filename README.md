# Design System Challenge

This is the solution for the [Design System Challenge](https://gist.github.com/andersonba/6b1d07348e7baaf282a27259996d6520) proposed for the evaluation of aptness for a Front-end developer position.

For technical details and implementation logs, check out the [History file](./HISTORY.md).

## Running the project

This project is built with Vite and Yarn. To run it, follow these steps:

1. Use `nvm`, `asdf`, or any other Node version management (including just installing the correct Node version from the [website](https://nodejs.org/en/download)) to ensure your Node.js version is `20.9.0`
2. Install Yarn globally if you don't have it
3. Run `yarn --version` to check the version that the project is using. The `.yarn/yarn-4.0.1.cjs` file should ensure that the newest Yarn is used, but if you don't see `4.0.1` as the result of the `yarn --version` command, check the [Troubleshooting](#troubleshooting) section to check how to solve it.
4. Run `yarn install` to install all the packages

### Running Storybook

Run `yarn run storybook`. Storybook should be available at `http://localhost:6006/`.

### Running the index page

The index page provides a minimal structure to render the TreeView component outside of the Storybook environment. To check it out, run:

`yarn dev`

The page should be available at `http://127.0.0.1:3000/`

## Troubleshooting

### Yarn is not 4.0.1 or installing the packages prompts a `string-width` dependency error

Ensure you're running Node.js 20.9.0 and then run the following, in order:

```bash
corepack enable;
yarn set version berry;
yarn install
```