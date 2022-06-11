import React from "react";
import { Switch, Route, Router } from "react-router-dom";
import { createGenerateClassName, StylesProvider } from '@mui/styles';

const generateClassname = createGenerateClassName({
  productionPrefix: 'mox'
})

export default ({ history }) => {
  return (
    <div>
      <StylesProvider generateClassName={generateClassname}>
        <h1>Module X</h1>
        {/* <Router history={history} >
          <Switch>
            <Route exact path="/pricing" component={Pricing} />
            <Route path="/" component={Landing} />
          </Switch>
        </Router> */}
      </StylesProvider>
    </div>
  );
};
