import { TreeView } from "./components/TreeView";
import { CHECKBOX_TREE_VIEW_DATA } from "./components/TreeView/__fixtures__";

function App() {
  return (
    <>
      <h1>Design System Challenge</h1>
      <div>
        <h2>Components</h2>
        <ul>
          <li>TreeView</li>
          <TreeView type="checkbox" data={CHECKBOX_TREE_VIEW_DATA} />
        </ul>
      </div>
    </>
  );
}

export default App;
