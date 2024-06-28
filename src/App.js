import logo from "./logo.svg";
import "./App.css";
import Props_first from "./topics/Props_first";
import Fetching_API_Data from "./topics/Fetching_API_Data";

function App() {
  return (
    <div className="App">
      <h1>React Basics</h1>
      <Props_first name='Props'/>
      <br />
      <hr />
      <Fetching_API_Data />
    </div>
  );
}

export default App;
