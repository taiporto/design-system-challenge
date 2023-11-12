import { TreeView } from "./components/TreeView";
import { STORYBOOK_CHECKBOX_TREE_VIEW_DATA } from "./components/TreeView/storybook/constants";

function App() {
  return (
    <>
      <h1>Design System Challenge</h1>
      <div>
        <h2>Components</h2>
        <ul>
          <li>TreeView</li>
          <TreeView type="checkbox" data={STORYBOOK_CHECKBOX_TREE_VIEW_DATA} />
        </ul>
      </div>
    </>
  );
}

export default App;
