import { TreeView } from "./components/TreeView";

function App() {
  return (
    <>
      <h1>Design System Challenge</h1>
      <div>
        <h2>Components</h2>
        <ul>
          <li>TreeView</li>
          <TreeView label="Test" />
        </ul>
      </div>
    </>
  );
}

export default App;
