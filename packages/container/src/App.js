import React, { lazy, Suspense } from "react";
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
  return (
    <StylesProvider generateClassName={generateClassname}>
      <BrowserRouter>
        <div>
          <Header />
          <Suspense fallback={<Progressbar />}>
            <Switch>
              <Route path="/auth" component={AuthLazy} />
              <Route path="/" component={MarketingLazy} />
            </Switch>
          </Suspense>
        </div>
      </BrowserRouter>
    </StylesProvider>
  );
};
