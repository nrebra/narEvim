import {View, Text} from 'react-native';
import React from 'react';
import {Router} from './narEvim/Router';
import {Provider} from 'react-redux';
import {store} from './narEvim/redux/store/store';

const App = () => {
  return (
    <Provider store={store}>
      <Router />
    </Provider>
  );
};

export default App;
