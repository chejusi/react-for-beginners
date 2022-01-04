
import {BrowserRouter as Router, Switch,Route} from "react-router-dom";
import Detail from "./routes/Detail";
import Home from "./routes/Home";
function App() {
  return (
    <Router>
        <Switch>
          <Route path="/hello">
            <h1>hello</h1>
          </Route>
          <Route path="/movie/:id" component={Detail} />
          <Route path="/" component={Home} />
        </Switch>
    </Router>
  );
}

export default App;
