import React from "react";
import { Provider } from "react-redux";
import { Route, Switch, Router } from "react-router-dom";
import { ConnectedRouter } from "connected-react-router";
import ReactLogo from "~/static/react.png";

import store, { history } from "~/store";

const styles = {
  container: {
    display: "flex",
    flex: 1,
    flexDirection: "row",
    justifyContent: "center",
    fontFamily: "system-ui, Sans-serif, Verdana, Cursive",
    paddingTop: "10%",
  },
  hero: {
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
    fontSize: 28,
    fontWeight: 150,
    padding: 20,
    borderRadius: 15,
    boxShadow: "2px 2px 12px rgba(0,0,0,0.6)",
  },
};

const App = () => (
  <div style={styles.container}>
    <div style={styles.hero}>
      <img src={ReactLogo} height={200} width={300} />
      <p>React Advanced Starter Template</p>
    </div>
  </div>
);

const Contact = ({ match, location }) => {
  const { name } = match.params;
  const { search } = location;

  const url_params = Object.fromEntries([...new URLSearchParams(search)]);

  console.log(url_params);

  return (
    <div>
      <h2>I'm {name || "Nobody !"} !</h2>
      {url_params.hideSensitive === "false" ? <h3>SSN: 12345</h3> : null}
    </div>
  );
};

const NotFound = () => <p>Sorry, we couldn't find what you're looking for !</p>;

const AppWithRouter = () => (
  <Provider store={store}>
    <ConnectedRouter history={history}>
      <Switch>
        <Route exact path="/" component={App}></Route>
        <Route exact path="/contact" component={Contact}></Route>
        <Route path="/contact/:name" component={Contact}></Route>
        <Route path="*" component={NotFound}></Route>
      </Switch>
    </ConnectedRouter>
  </Provider>
);

export default AppWithRouter;
