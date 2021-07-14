import { BrowserRouter as Router, Switch, Route } from "react-router-dom";

import Login from "./views/login";
import Menu from "./components/menu";
import Footer from "./components/footer";

const App = () => (
  <Router>
    <div className="flex flex-col h-full">
      <Menu />
      <Switch>
        <Route exact path={["/login", "/"]}>
          <Login />
        </Route>
      </Switch>
      <Footer />
    </div>
  </Router>
);

export default App;
