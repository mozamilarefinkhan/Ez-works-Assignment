import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './App';
import reducer from "./Components/context/reducer";
import { initialState } from "./Components/context/initialState";

import { StateProvider } from './Components/context/StateProvider';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <StateProvider initialState={initialState} reducer={reducer}>
    <App />
  </StateProvider>

);