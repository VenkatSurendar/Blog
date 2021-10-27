import { Switch, Route } from "react-router-dom";
import "./App.css";

import home from "./component/home/home";
import about from "./component/about/about";
import Blog from "./component/blog/blog";

function App() {
  return (
    <div className="App">
      <Switch>
        <Route exact path="/home" component={home} />
        <Route exact path="/about" component={about} />
        <Route exact path="/blog" component={Blog} />
      </Switch>
    </div>
  );
}

export default App;

// home.js -> has all the component together.
// about.js -> some text for about page.
// blog.js -> individual blog post.
