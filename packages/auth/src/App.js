import React from "react";
import { Switch, Route, Router } from "react-router-dom";
import { StylesProvider, createGenerateClassName } from "@material-ui/core/styles";

const generateClassname = createGenerateClassName({
  productionPrefix: 'au'
})

export default ({ history }) => {
  return (
    <div>
      <StylesProvider generateClassName={generateClassname}>
        <Router history={history} >
          <Switch>
          </Switch>
        </Router>
      </StylesProvider>
    </div>
  );
};
