import React, { useState, useEffect } from 'react';
import Index from './index'
import configureStore from './store'
import { Provider } from 'react-redux'

export default function App() {

  let store = configureStore();

  return (
    <Provider store={store}>
      <Index />
    </Provider>
  );
}