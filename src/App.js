import React from 'react';
import { Provider } from 'react-redux';
import { Route, Switch } from 'react-router-dom';
import { ConnectedRouter } from 'connected-react-router';
import ReactLogo from '~/static/react.png';

import store, { history } from '~/store';

const styles = {
    container: {
        display: 'flex',
        flex: 1,
        flexDirection: 'row',
        justifyContent: "center",
        fontFamily: "system-ui, Sans-serif, Verdana, Cursive",
        paddingTop: '10%',
    },
    hero: {
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',
        fontSize: 28,
        fontWeight: 150,
        padding: 20,
        borderRadius: 15,
        boxShadow: "2px 2px 12px rgba(0,0,0,0.6)"
    }
};

const App = () => <div style={styles.container}>
    <div style={styles.hero}>
        <img src={ReactLogo} height={200} width={300} />
        <p>React Advanced Starter Template</p>
    </div>
</div>

const AppWithRouter = () => (<Provider store={store}>
                        <ConnectedRouter history={history}>
                            <Switch>
                                <Route render={() => <App />}></Route>
                            </Switch>
                        </ConnectedRouter>
                   </Provider>);

export default AppWithRouter;
