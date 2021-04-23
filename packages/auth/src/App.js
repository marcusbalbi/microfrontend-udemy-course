import React from "react";
import { Switch, Route, BrowserRouter, Link } from "react-router-dom";
import {
  StylesProvider,
  createGenerateClassName,
} from "@material-ui/core/styles";

import Signin from "./components/Signin";
import Signup from "./components/Signup";

const generateClassname = createGenerateClassName({
  productionPrefix: "au",
});

export default ({ history }) => {
  return (
    <div>
      <StylesProvider generateClassName={generateClassname}>
        <BrowserRouter>
          <Switch>
            {/* <Route exact path="/" component={() => {
              return (
                <>
                  <h1>Auth</h1>
                  <div>
                    <Link to="/auth/signin">SignIN</Link>
                    <Link to="/auth/signup">SignUP</Link>
                  </div>
                </>
              );
            }}></Route> */}
            <Route exact path="/auth/signin" component={Signin}></Route>
            <Route exact path="/auth/signup" component={Signup}></Route>
          </Switch>
        </BrowserRouter>
      </StylesProvider>
    </div>
  );
};
