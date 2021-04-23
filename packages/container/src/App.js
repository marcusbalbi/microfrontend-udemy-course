import React, { lazy, Suspense, useState } from "react";
import Header from "./components/Header";
// import MarketingApp from "./components/MarketingApp";
// import AuthApp from "./components/AuthApp";
import { BrowserRouter, Route, Switch } from "react-router-dom";
import { createGenerateClassName, StylesProvider } from "@material-ui/styles";
import Progressbar from "./components/Progressbar";

const MarketingLazy = lazy(() => {
  return import("./components/MarketingApp");
});
const AuthLazy = lazy(() => {
  return import("./components/AuthApp");
});

const generateClassname = createGenerateClassName({
  productionPrefix: "co",
});

export default () => {
  const [isSignedIn, setIsSignedIn] = useState(false);
  return (
    <StylesProvider generateClassName={generateClassname}>
      <BrowserRouter>
        <div>
          <Header isSignedIn={isSignedIn} />
          <Suspense fallback={<Progressbar />}>
            <Switch>
              <Route path="/auth">
                <AuthLazy
                  onSignIn={() => {
                    setIsSignedIn(true);
                  }}
                />
              </Route>
              <Route path="/" component={MarketingLazy} />
            </Switch>
          </Suspense>
        </div>
      </BrowserRouter>
    </StylesProvider>
  );
};
