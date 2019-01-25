import React, { Component } from 'react';
import { Provider } from 'react-redux';
import './assets/css/normalize.css';
import MusicsOverView from './components/musics-overview/MusicsContainer';
import createReduxStore from './datastore/index';

const reduxStore = createReduxStore();

class App extends Component {
  public render() {
    return (
      <Provider store={reduxStore}>
        <MusicsOverView />
      </Provider>
    );
  }
}

export default App;
