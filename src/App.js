import React, { Component } from 'react';
import store from './store'
import {Provider} from 'react-redux'
import { Route } from 'react-router-dom'
import AddsContainer from './components/AddsContainer'
import FormContainer from './components/FormContainer'
import AddDetailsContainer from './components/AddDetailsContainer'

class App extends Component {
  render() {
    return (
      <Provider store={store}>
        <div>
          <Route path="/adds" exact component={AddsContainer} />
          <Route path="/adds" exact component={FormContainer} />
          <Route path="/adds/:id" component={AddDetailsContainer} />
        </div>
      </Provider>
    );
  }
}

export default App;