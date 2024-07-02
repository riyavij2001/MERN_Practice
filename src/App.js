import logo from "./logo.svg";
import "./App.css";
import Props_first from "./topics/Props_first";
import Fetching_API_Data from "./topics/Fetching_API_Data";
import UseEfect from "./topics/UseEfect";
import Usereducers from "./topics/Usereducers";
import Hooks from "./topics/customHooks/Hooks";

function App() {
  return (
    <div className="App">
      <h1>React Basics</h1>
      <Props_first name="Props" />
      <br />
      <hr />
      <Fetching_API_Data />
      <br />
      <hr />
      <UseEfect />
      <br />
      <hr />
      <Usereducers />
      {/* <br />
      <hr />
      <Hooks /> */}
    </div>
  );
}

export default App;
