import React, { Component } from 'react';
import { Provider } from 'react-redux';
import './assets/css/normalize.css';
import Dashboard from './components/containers/DashboardContainer';
import createReduxStore from './datastore/index';

const reduxStore = createReduxStore();

class App extends Component {
  public render() {
    return (
      <Provider store={reduxStore}>
        <Dashboard />
      </Provider>
    );
  }
}

export default App;
