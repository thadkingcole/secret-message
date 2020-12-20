import logo from "./logo.svg";
import "./App.css";
import Main from "./pages/Main";
import Message from "./pages/Message";

function App() {
  return (
    <div className="App">
      <header className="App-header">
        {/* page 1 */}
        <Main />

        {/* page 2 */}
        <Message />
      </header>
    </div>
  );
}

export default App;
