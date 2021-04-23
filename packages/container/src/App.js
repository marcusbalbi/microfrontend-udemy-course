import React, { lazy, Suspense, useState, useEffect } from "react";
import Header from "./components/Header";
// import MarketingApp from "./components/MarketingApp";
// import AuthApp from "./components/AuthApp";
import { Router, Route, Switch, Redirect } from "react-router-dom";
import { createGenerateClassName, StylesProvider } from "@material-ui/styles";
import Progressbar from "./components/Progressbar";
import { createBrowserHistory } from "history"

const MarketingLazy = lazy(() => {
  return import("./components/MarketingApp");
});
const AuthLazy = lazy(() => {
  return import("./components/AuthApp");
});

const DashboardLazy = lazy(() => {
  return import("./components/DashboardApp");
});

const generateClassname = createGenerateClassName({
  productionPrefix: "co",
});

const history = createBrowserHistory();

export default () => {
  const [isSignedIn, setIsSignedIn] = useState(false);

  useEffect(() => {
    if(isSignedIn) {
      history.push('/dashboard')
    }
  }, [isSignedIn])

  return (
    <StylesProvider generateClassName={generateClassname}>
      <Router history={history}>
        <div>
          <Header
            onSignOut={() => {
              setIsSignedIn(false);
            }}
            isSignedIn={isSignedIn}
          />
          <Suspense fallback={<Progressbar />}>
            <Switch>
              <Route path="/auth">
                <AuthLazy
                  onSignIn={() => {
                    setIsSignedIn(true);
                  }}
                />
              </Route>
              <Route path="/dashboard">
                {!isSignedIn && <Redirect to="/" />}
                <DashboardLazy />
              </Route>
              <Route path="/" component={MarketingLazy} />
            </Switch>
          </Suspense>
        </div>
      </Router>
    </StylesProvider>
  );
};
