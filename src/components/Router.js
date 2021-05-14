import React from "react";
import {
  HashRouter as Router,
  Redirect,
  Route,
  Switch,
} from "react-router-dom";
import Auth from "routes/Auth";
import Home from "routes/Home";
import VerifyEmail from "./VerifyEmail";
import Navigator from "./Navigator";
import Completion from "routes/Completion";

const AppRouter = ({ emailVerify, isLoggedIn, userObj }) => {
  return (
    <Router>
      {isLoggedIn && <Navigator userObj={userObj} />}
      {isLoggedIn ? (
        emailVerify ? (
          <Switch>
            <Route exact path="/">
              <Home userObj={userObj} />
            </Route>
            <Route exact path="/completion">
              <Completion userObj={userObj} />
            </Route>
            <Redirect from="*" to="/" />
          </Switch>
        ) : (
          <Switch>
            <Route exact path="/">
              <VerifyEmail />
            </Route>
            <Redirect from="*" to="/" />
          </Switch>
        )
      ) : (
        <Switch>
          <Route exact path="/">
            <Auth />
          </Route>
          <Redirect from="*" to="/" />
        </Switch>
      )}
    </Router>
  );
};

export default AppRouter;
