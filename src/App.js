import './App.css';
import {Album} from "../node_modules/designops/dist/index.js"

function App() {
  return (
    <div >
      <Album Heading="Photo Album" SubContent="Something short and leading about the collection below—its contents, the creator, etc.
              Make it short and sweet, but not too short so folks don&apos;t simply skip over it
              entirely." />
    </div>
  );
}

export default App;
