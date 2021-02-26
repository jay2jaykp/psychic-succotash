import React from "react";
import { Navbar } from "./components/navbar";
import {
  BrowserRouter as Router,
  Redirect,
  Route,
  Switch,
} from "react-router-dom";
import { HomePage } from "./components/HomePage";
// import { AboutPage } from "./components/AboutPage";
// import { CategoryPage } from "./components/CategoryPage";
// import { BrandPage } from "./components/BrandPage";
// import { DealsPage } from "./components/DealsPage";
import { NewArrivalPage } from "./components/NewArrivalPage";
import { Box } from "@material-ui/core";

function App() {
  return (
    <>
      <Router>
        <Navbar />
        <Box>
          <Switch>
            {/* <Route exact path="/about">
              <AboutPage />
            </Route>
            <Route exact path="/category">
              <CategoryPage />
            </Route>
            <Route exact path="/brand">
              <BrandPage />
            </Route>
            <Route exact path="/deals">
              <DealsPage />
            </Route> */}
            <Route exact path="/new">
              <NewArrivalPage />
            </Route>
            <Route path="/">
              <HomePage />
            </Route>
            <Redirect from="*" to="/new" />
          </Switch>
        </Box>
      </Router>
    </>
  );
}

export default App;
