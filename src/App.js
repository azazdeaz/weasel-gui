import React, { Component } from 'react';
import {createStore} from 'redux'
import {Provider} from 'react-redux'
import reducer from './reducer'
import BaseScreen from './BaseScreen'

const store = createStore(reducer)

export class App extends Component {
  render() {

    return (
      <Provider store={store}>
        <BaseScreen/>
      </Provider>
    );
  }
}
