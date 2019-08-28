import React from 'react';
import { Provider } from 'react-redux';
import { Route, Switch } from 'react-router-dom';
import { ConnectedRouter } from 'connected-react-router';

import store, { history } from '~/store';

const App = () => (<Provider store={store}>
                        <ConnectedRouter history={history}>
                            <Switch>
                                <Route render={() => <h2> CSOD Admin </h2>}></Route>
                            </Switch>
                        </ConnectedRouter>
                   </Provider>);

export default App;
