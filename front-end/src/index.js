import React from 'react';
import ReactDOM from 'react-dom';
import { ConnectedRouter } from 'connected-react-router';
import { Route, Switch } from 'react-router-dom';
import { Provider } from 'react-redux';

import configureStore, { history } from './store';

import HomePage from './containers/HomePage';
import LoginPage from './containers/LoginPage';
import MenuPage from './containers/MenuPage';
import requireAuth from './containers/requireAuth';

const store = configureStore();

const App = () => {
  return (
    <Provider store={store}>
      <ConnectedRouter history={history}>
        <>
          <Switch>
            <Route path="/login" component={LoginPage} />
            <Route path="/menu" component={requireAuth(MenuPage)} />
            <Route path="/" component={requireAuth(HomePage)} />
          </Switch>
        </>
      </ConnectedRouter>
    </Provider>
  );
};

ReactDOM.render(<App />, document.getElementById('root'));