import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
// import App from './App';
import Bootstrap from './Bootstrap'
import Test from './Test'
import * as serviceWorker from './serviceWorker';

// import {App as AppHookSDemo} from "./HookSDemo/App";
// import ColorProvider from "./HookSDemo/ColorProvider"

import App from './FlightPractice/App'
ReactDOM.render(
  <React.StrictMode>
    {/* <Test login="omribi"/> */}
    {/* <Bootstrap/> */}
    <App />
    {/* <ColorProvider>
     <AppHookSDemo/ >    
    </ColorProvider> */}
  </React.StrictMode>,
  document.getElementById('root')
);

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
