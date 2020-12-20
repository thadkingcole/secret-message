import "./App.css";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import Main from "./pages/Main";
import Message from "./pages/Message";

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <Router>
          <Switch>
            <Route exact path="/" component={Main} />
            <Route path="/:message" component={Message} />
          </Switch>
        </Router>
      </header>
    </div>
  );
}

export default App;
