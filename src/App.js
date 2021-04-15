import { BrowserRouter as Router, Switch, Route, Link } from "react-router-dom";
import Home from "./Components/Home/Home";
import NotFound from "./Components/Not Found/NotFound";
import NavBar from "./Components/NavBar/NavBar";
import Login from "./Components/Login/Login";
import RegisterEvent from "./Components/RegisterEvent/RegisterEvent";
import MyEvents from "./Components/MyEvent/MyEvents";
import PrivateRoute from "./Components/PrivateRoute/PrivateRoute";

function App() {
  return (
    <div>
      <Router>
        <NavBar></NavBar>
        <Switch>
          <Route path="/home">
            <Home></Home>
          </Route>
          <Route exact path="/">
            <Home></Home>
          </Route>
          <Route path="/login">
            <Login></Login>
          </Route>
          <PrivateRoute path="/registerEvent/:id">
            <RegisterEvent></RegisterEvent>
          </PrivateRoute>
          <PrivateRoute path="/myEvent">
            <MyEvents></MyEvents>
          </PrivateRoute>
          <Route path="*">
            <NotFound></NotFound>
          </Route>
        </Switch>
      </Router>
    </div>
  );
}

export default App;
