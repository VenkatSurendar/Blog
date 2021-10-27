import { Switch, Route } from "react-router-dom";
import "./App.css";

import home from "./component/home/home";
import about from "./component/about/about";
import blog from "./component/blog/blog";

function App() {
  return (
    <div className="App">
      <Switch>
        <Route exact path="/home" component={home} />
        <Route exact path="/about" component={about} />
        <Route exact path="/blogs" component={blog} />
      </Switch>
    </div>
  );
}

export default App;
