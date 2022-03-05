import React from 'react';
import ReactDOM from 'react-dom';
import App from './Components/App/App';
import 'bootstrap/dist/css/bootstrap.min.css'
import 'bootstrap/dist/js/bootstrap.bundle.js'

import './index.css';
import { ContextDataProvider } from './Components/ContextData';

ReactDOM.render(
  <React.StrictMode>
    <ContextDataProvider>
    <App />

    </ContextDataProvider>
  </React.StrictMode>,
  document.getElementById('root')
);
